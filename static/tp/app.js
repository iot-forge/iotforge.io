import {
  DEFAULT_SETTINGS,
  ORP_RULES,
  PUNCTUATION_RULES,
  STORAGE_KEY,
  STORAGE_VERSION,
  THEMES,
  WPM_LIMITS
} from './config.js';

const elements = {
  editorView: document.getElementById('editor-view'),
  runView: document.getElementById('run-view'),
  runContainer: document.getElementById('run-container'),
  runStage: document.querySelector('.run-stage'),
  scriptInput: document.getElementById('script-input'),
  modeSelect: document.getElementById('mode-select'),
  wpmInput: document.getElementById('wpm-input'),
  themeSelect: document.getElementById('theme-select'),
  mirrorToggle: document.getElementById('mirror-toggle'),
  tokenizationSelect: document.getElementById('tokenization-select'),
  punctuationToggle: document.getElementById('punctuation-toggle'),
  runButton: document.getElementById('run-button'),
  resetButton: document.getElementById('reset-button'),
  editorNotice: document.getElementById('editor-notice'),
  form: document.getElementById('editor-form'),
  currentWord: document.getElementById('current-word'),
  currentLeft: document.querySelector('#current-word .orp-left'),
  currentLetter: document.querySelector('#current-word .orp-letter'),
  currentRight: document.querySelector('#current-word .orp-right'),
  nextWord: document.getElementById('next-word'),
  secondWord: document.getElementById('second-word'),
  runStatus: document.getElementById('run-status'),
  wpmDisplay: document.getElementById('wpm-display')
};

const state = {
  frames: [],
  index: 0,
  mode: DEFAULT_SETTINGS.mode,
  settings: { ...DEFAULT_SETTINGS },
  playing: false,
  timerId: null,
  spaceDown: false
};

const TOKEN_CHUNKS = /\s+|[^\s]+/gu;
const TOKEN_PATTERN = /https?:\/\/[^\s]+|www\.[^\s]+|[\p{L}\p{N}]+(?:['’][\p{L}\p{N}]+)*|[\p{N}]+(?:[.,][\p{N}]+)*(?:['’][\p{L}\p{N}]+)*|[^\s]/gu;

init();

function init() {
  hydrateThemeOptions();
  loadPersistedSettings();
  applySettingsToUI();
  bindEditorEvents();
  updateRunButtonState();
  updateEditorNotice('');
  toggleViews(false);
}

function hydrateThemeOptions() {
  const existing = new Set();
  elements.themeSelect.innerHTML = '';
  THEMES.forEach(theme => {
    if (existing.has(theme.id)) {
      return;
    }
    existing.add(theme.id);
    const option = document.createElement('option');
    option.value = theme.id;
    option.textContent = theme.label;
    elements.themeSelect.append(option);
  });
}

function loadPersistedSettings() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return;
    }
    const payload = JSON.parse(raw);
    if (!payload || payload.version !== STORAGE_VERSION) {
      return;
    }
    state.settings = { ...DEFAULT_SETTINGS, ...payload.settings };
  } catch (error) {
    console.warn('Unable to load saved teleprompter settings', error);
    state.settings = { ...DEFAULT_SETTINGS };
  }
}

function persistSettings() {
  try {
    const payload = { version: STORAGE_VERSION, settings: state.settings };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch (error) {
    console.warn('Unable to persist teleprompter settings', error);
  }
}

function applySettingsToUI() {
  const settings = state.settings;
  elements.scriptInput.value = settings.text;
  elements.modeSelect.value = settings.mode;
  elements.wpmInput.value = clampWpm(settings.wpm);
  elements.themeSelect.value = settings.theme;
  elements.mirrorToggle.checked = settings.mirror;
  elements.tokenizationSelect.value = settings.tokenization;
  elements.punctuationToggle.checked = settings.punctuationPauses;
  elements.wpmInput.disabled = settings.mode !== 'timer';
  document.body.dataset.theme = settings.theme;
}

function bindEditorEvents() {
  elements.scriptInput.addEventListener('input', handleScriptInput);
  elements.modeSelect.addEventListener('change', handleModeChange);
  elements.wpmInput.addEventListener('change', handleWpmChange);
  elements.themeSelect.addEventListener('change', handleThemeChange);
  elements.mirrorToggle.addEventListener('change', handleMirrorToggle);
  elements.tokenizationSelect.addEventListener('change', handleTokenizationChange);
  elements.punctuationToggle.addEventListener('change', handlePunctuationToggle);
  elements.form.addEventListener('submit', handleRunRequested);
  elements.resetButton.addEventListener('click', handleReset);
}

function handleScriptInput(event) {
  state.settings.text = event.target.value;
  persistSettings();
  updateRunButtonState();
}

function handleModeChange(event) {
  state.settings.mode = event.target.value;
  elements.wpmInput.disabled = state.settings.mode !== 'timer';
  persistSettings();
}

function handleWpmChange(event) {
  const nextValue = clampWpm(Number(event.target.value));
  state.settings.wpm = nextValue;
  elements.wpmInput.value = nextValue;
  persistSettings();
}

function handleThemeChange(event) {
  state.settings.theme = event.target.value;
  document.body.dataset.theme = state.settings.theme;
  persistSettings();
}

function handleMirrorToggle(event) {
  state.settings.mirror = Boolean(event.target.checked);
  persistSettings();
}

function handleTokenizationChange(event) {
  state.settings.tokenization = event.target.value;
  persistSettings();
}

function handlePunctuationToggle(event) {
  state.settings.punctuationPauses = Boolean(event.target.checked);
  persistSettings();
}

function handleRunRequested(event) {
  event.preventDefault();
  if (!state.settings.text || state.settings.text.trim().length === 0) {
    updateEditorNotice('Add some text before running the teleprompter.');
    return;
  }
  const frames = prepareFrames(state.settings.text, state.settings.tokenization, state.settings.punctuationPauses);
  if (frames.length === 0) {
    updateEditorNotice('Tokenization yielded no frames. Adjust your settings and try again.');
    return;
  }
  state.frames = frames;
  state.mode = state.settings.mode;
  state.index = resolveStartIndex(frames.length);
  state.playing = state.mode === 'timer';
  state.spaceDown = false;
  updateEditorNotice('');
  enterRunView();
}

function prepareFrames(text, tokenizationMode, punctuationPausesEnabled) {
  const tokens = tokenize(text, tokenizationMode).filter(token => /\S/u.test(token));
  return tokens.map(token => createFrame(token, punctuationPausesEnabled));
}

function tokenize(text, mode) {
  const chunks = text.match(TOKEN_CHUNKS) || [];
  if (mode !== 'punctuation') {
    return chunks.filter(chunk => /\S/u.test(chunk));
  }
  const refined = [];
  chunks.forEach(chunk => {
    if (!/\S/u.test(chunk)) {
      return;
    }
    const matches = chunk.match(TOKEN_PATTERN);
    if (matches) {
      refined.push(...matches);
    } else {
      refined.push(chunk);
    }
  });
  return refined;
}

function createFrame(token, punctuationPausesEnabled) {
  const isWhitespace = !token || !/\S/u.test(token);
  if (isWhitespace) {
    const multiplier = punctuationPausesEnabled && token.includes('\n') ? PUNCTUATION_RULES.multipliers['\n'] || 1 : 1;
    return {
      token,
      isWhitespace: true,
      left: '',
      letter: '',
      right: '',
      pivotIndex: 0,
      multiplier
    };
  }
  const glyphs = Array.from(token);
  const pivotIndex = resolvePivotIndex(glyphs.length);
  const letter = glyphs[pivotIndex] ?? '';
  const left = glyphs.slice(0, pivotIndex).join('');
  const right = glyphs.slice(pivotIndex + 1).join('');
  const multiplier = punctuationPausesEnabled ? resolveMultiplier(token) : 1;
  return { token, isWhitespace: false, left, letter, right, pivotIndex, multiplier };
}

function resolvePivotIndex(length) {
  if (length <= 1) {
    return 0;
  }
  for (const rule of ORP_RULES) {
    if (length <= rule.maxLength) {
      return Math.min(rule.pivotIndex, length - 1);
    }
  }
  return Math.max(length - 1, 0);
}

function resolveMultiplier(token) {
  if (!token) {
    return 1;
  }
  const trimmed = token.trim();
  if (!trimmed) {
    return token.includes('\n') ? PUNCTUATION_RULES.multipliers['\n'] || 1 : 1;
  }
  const trailing = trimmed.slice(-1);
  if (PUNCTUATION_RULES.multipliers[trailing]) {
    return PUNCTUATION_RULES.multipliers[trailing];
  }
  if (token.includes('\n')) {
    return PUNCTUATION_RULES.multipliers['\n'] || 1;
  }
  return 1;
}

function updateRunButtonState() {
  const hasText = Boolean(state.settings.text && state.settings.text.trim().length > 0);
  elements.runButton.disabled = !hasText;
}

function updateEditorNotice(message) {
  elements.editorNotice.textContent = message || '';
}

function resolveStartIndex(totalFrames) {
  if (state.settings.resumeBehavior !== 'lastIndex') {
    return 0;
  }
  const candidate = Number(state.settings.lastIndex ?? 0);
  if (Number.isInteger(candidate) && candidate >= 0 && candidate < totalFrames) {
    return candidate;
  }
  return 0;
}

function enterRunView() {
  document.body.dataset.theme = state.settings.theme;
  elements.runContainer.classList.toggle('is-mirrored', state.settings.mirror);
  toggleViews(true);
  bindRunEvents();
  renderFrame();
  updateWpmDisplay();
  if (state.mode === 'timer') {
    resumeTimer();
  } else {
    setRunStatus('Press space to advance');
  }
}

function exitRunView() {
  pauseTimer();
  unbindRunEvents();
  toggleViews(false);
  state.settings.lastIndex = state.index;
  persistSettings();
  updateEditorNotice('');
}

function toggleViews(inRun) {
  elements.editorView.hidden = inRun;
  elements.runView.hidden = !inRun;
}

function bindRunEvents() {
  window.addEventListener('keydown', handleRunKeyDown);
  window.addEventListener('keyup', handleRunKeyUp);
  window.addEventListener('resize', handleRunResize);
}

function unbindRunEvents() {
  window.removeEventListener('keydown', handleRunKeyDown);
  window.removeEventListener('keyup', handleRunKeyUp);
  window.removeEventListener('resize', handleRunResize);
}

function handleRunKeyDown(event) {
  if (event.key === 'Escape') {
    event.preventDefault();
    exitRunView();
    return;
  }

  if (event.key === ' ' || event.code === 'Space') {
    event.preventDefault();
    if (state.mode === 'timer') {
      if (!state.spaceDown) {
        state.spaceDown = true;
        pauseTimer();
      }
    } else if (!event.repeat) {
      advanceFrame();
    }
    return;
  }

  if (event.key === 'Backspace') {
    event.preventDefault();
    if (event.repeat) {
      return;
    }
    rewindFrame();
    return;
  }

  if (state.mode === 'timer') {
    if (event.key === '+' || (event.key === '=' && event.shiftKey)) {
      event.preventDefault();
      adjustWpm(1);
      return;
    }
    if (event.key === '-' || event.key === '_') {
      event.preventDefault();
      adjustWpm(-1);
      return;
    }
  }
}

function handleRunKeyUp(event) {
  if ((event.key === ' ' || event.code === 'Space') && state.mode === 'timer') {
    event.preventDefault();
    if (state.spaceDown) {
      state.spaceDown = false;
      resumeTimer();
    }
  }
}

function handleRunResize() {
  if (elements.runView.hidden) {
    return;
  }
  const frame = state.frames[state.index];
  if (frame) {
    requestAnimationFrame(() => setOrpWord(frame));
  }
}

function adjustWpm(delta) {
  const next = clampWpm(state.settings.wpm + delta);
  state.settings.wpm = next;
  elements.wpmInput.value = next;
  updateWpmDisplay();
  persistSettings();
  if (state.mode === 'timer' && state.playing) {
    resumeTimer();
  }
}

function clampWpm(value) {
  if (!Number.isFinite(value)) {
    return DEFAULT_SETTINGS.wpm;
  }
  return Math.min(WPM_LIMITS.max, Math.max(WPM_LIMITS.min, Math.round(value)));
}

function renderFrame() {
  const frame = state.frames[state.index];
  if (!frame) {
    handleEndOfScript();
    return;
  }
  setOrpWord(frame);
  setPreviewWord(elements.nextWord, state.frames[state.index + 1]);
  setPreviewWord(elements.secondWord, state.frames[state.index + 2]);
  setRunStatus('');
}

function setOrpWord(frame) {
  elements.currentLeft.textContent = frame.left;
  elements.currentLetter.textContent = frame.letter;
  elements.currentRight.textContent = frame.right;
  elements.currentWord.classList.toggle('is-whitespace', frame.isWhitespace);
  scheduleFontAdjustment(frame);
}

function scheduleFontAdjustment(frame) {
  requestAnimationFrame(() => applyFontSizing(frame));
}

function applyFontSizing(frame) {
  const stage = elements.runStage || elements.runContainer;
  if (!stage) {
    return;
  }
  const maxWidth = stage.clientWidth * 0.9;
  const targetHeight = window.innerHeight * 0.3;
  const context = elements.currentWord;
  if (!context) {
    return;
  }
  context.style.fontSize = `${targetHeight}px`;
  const measuredWidth = context.scrollWidth;
  if (measuredWidth > maxWidth && measuredWidth > 0) {
    const scale = maxWidth / measuredWidth;
    const nextSize = Math.max(24, Math.floor(targetHeight * scale));
    context.style.fontSize = `${nextSize}px`;
  }
  if (frame.isWhitespace) {
    context.style.fontSize = `${Math.max(24, Math.floor(targetHeight * 0.4))}px`;
  }
}


function setPreviewWord(element, frame) {
  if (!frame) {
    element.textContent = '';
    element.classList.remove('is-whitespace');
    return;
  }
  element.textContent = frame.token;
  element.classList.toggle('is-whitespace', frame.isWhitespace);
}

function resumeTimer() {
  clearTimer();
  if (state.index >= state.frames.length) {
    handleEndOfScript();
    return;
  }
  state.playing = true;
  setRunStatus('');
  const frame = state.frames[state.index];
  const delay = computeDelay(frame);
  state.timerId = window.setTimeout(() => {
    advanceFrame();
  }, delay);
}

function pauseTimer() {
  if (!state.playing) {
    return;
  }
  clearTimer();
  state.playing = false;
  if (state.mode === 'timer') {
    setRunStatus('Paused');
  }
}

function clearTimer() {
  if (state.timerId !== null) {
    window.clearTimeout(state.timerId);
    state.timerId = null;
  }
}

function computeDelay(frame) {
  const base = 60000 / state.settings.wpm;
  return Math.max(16, Math.round(base * (frame.multiplier || 1)));
}

function rewindFrame() {
  if (state.index <= 0) {
    state.index = 0;
    renderFrame();
    if (state.mode === 'timer' && !state.playing) {
      setRunStatus('Paused');
    }
    return;
  }
  if (state.mode === 'timer') {
    const wasPlaying = state.playing;
    if (wasPlaying) {
      clearTimer();
    }
    state.index -= 1;
    renderFrame();
    if (wasPlaying) {
      resumeTimer();
    } else {
      setRunStatus('Paused');
    }
    return;
  }
  state.index -= 1;
  renderFrame();
}

function advanceFrame() {
  if (state.index < state.frames.length - 1) {
    state.index += 1;
    renderFrame();
    if (state.mode === 'timer' && state.playing) {
      resumeTimer();
    }
  } else {
    state.index = state.frames.length;
    handleEndOfScript();
  }
}

function handleEndOfScript() {
  clearTimer();
  state.playing = false;
  setRunStatus('End of script');
  elements.currentLeft.textContent = '';
  elements.currentLetter.textContent = '';
  elements.currentRight.textContent = '';
  elements.nextWord.textContent = '';
  elements.secondWord.textContent = '';
  elements.wpmDisplay.textContent = state.mode === 'timer' ? `${state.settings.wpm} WPM` : '';
}

function setRunStatus(message) {
  elements.runStatus.textContent = message || '';
}

function updateWpmDisplay() {
  if (state.mode !== 'timer') {
    elements.wpmDisplay.textContent = '';
    return;
  }
  elements.wpmDisplay.textContent = `${state.settings.wpm} WPM`;
}

function handleReset() {
  state.settings = { ...DEFAULT_SETTINGS };
  persistSettings();
  applySettingsToUI();
  updateRunButtonState();
  updateEditorNotice('Settings reset to defaults.');
}

window.addEventListener('beforeunload', () => {
  state.settings.lastIndex = state.index;
  persistSettings();
});
