export const STORAGE_KEY = "rsvp-teleprompter-state";

export const DEFAULT_SETTINGS = Object.freeze({
  text: "",
  mode: "timer",
  wpm: 300,
  theme: "dark-1",
  mirror: false,
  tokenization: "whitespace",
  punctuationPauses: false,
  punctuationHelpers: false,
  resumeBehavior: "beginning",
  lastIndex: 0,
});

export const MAIN_WORD_VIEWPORT_HEIGHT = 0.25;
export const WPM_LIMITS = Object.freeze({
  min: 100,
  max: 1200,
});

export const THEMES = Object.freeze([
  {
    id: "dark-1",
    label: "Dark 1",
    bg: "#000000",
    text: "#f8fafc",
    orp: "#ff4444",
  },
  {
    id: "dark-2",
    label: "Dark 2",
    bg: "#0b0b0f",
    text: "#f5f5f7",
    orp: "#ff4545",
  },
  { id: "light", label: "Light", bg: "#f7fafc", text: "#1a202c", orp: "#e11" },
]);

export const ORP_RULES = Object.freeze([
  { maxLength: 5, pivotIndex: 1 },
  { maxLength: 9, pivotIndex: 2 },
  { maxLength: 13, pivotIndex: 3 },
  { maxLength: Infinity, pivotIndex: 4 },
]);

export const PUNCTUATION_HELPER_RULES = Object.freeze([
  Object.freeze({ pattern: /,$/, className: "helper-ends-comma" }),
  Object.freeze({ pattern: /\.$/, className: "helper-ends-period" }),
]);
export const PUNCTUATION_RULES = Object.freeze({
  enabled: false,
  multipliers: {
    ".": 2.0,
    "?": 2.0,
    "!": 2.0,
    ",": 1.5,
    ";": 1.5,
    ":": 1.5,
    "\n": 2.5,
  },
});

export const STORAGE_VERSION = 1;
