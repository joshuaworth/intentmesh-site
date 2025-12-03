export const ACCENT_COLORS = [
  { name: "Steel Cable", hsl: "215 18% 55%", foregroundHsl: "0 0% 100%" },
  { name: "Fire Service", hsl: "25 95% 53%", foregroundHsl: "0 0% 100%" },
  { name: "Logic Board", hsl: "186 72% 46%", foregroundHsl: "0 0% 100%" },
  { name: "Safety Circuit", hsl: "142 71% 45%", foregroundHsl: "0 0% 100%" },
  { name: "Governor Rope", hsl: "279 45% 47%", foregroundHsl: "0 0% 100%" },
  { name: "Hydraulic Oil", hsl: "207 90% 54%", foregroundHsl: "0 0% 100%" },
  { name: "Caution Tape", hsl: "45 93% 47%", foregroundHsl: "0 0% 100%" },
  { name: "Emergency Stop", hsl: "355 80% 54%", foregroundHsl: "0 0% 100%" },
  { name: "Blueprint", hsl: "240 60% 55%", foregroundHsl: "0 0% 100%" },
  { name: "Brass Key", hsl: "46 82% 52%", foregroundHsl: "0 0% 100%" },
  { name: "Inspection Light", hsl: "190 80% 50%", foregroundHsl: "0 0% 100%" },
  { name: "Limit Switch", hsl: "347 77% 50%", foregroundHsl: "0 0% 100%" },
  { name: "Counterweight", hsl: "220 10% 35%", foregroundHsl: "0 0% 100%" },
  { name: "Relay Contact", hsl: "16 85% 60%", foregroundHsl: "0 0% 100%" },
  { name: "Guide Rail", hsl: "155 60% 70%", foregroundHsl: "180 20% 15%" },
  { name: "Machine Room", hsl: "197 82% 51%", foregroundHsl: "0 0% 100%" },
  { name: "Buffer Spring", hsl: "96 72% 45%", foregroundHsl: "0 0% 100%" },
  { name: "Door Operator", hsl: "174 75% 50%", foregroundHsl: "0 0% 100%" },
  { name: "Phase Monitor", hsl: "320 70% 55%", foregroundHsl: "0 0% 100%" },
  { name: "Hoistway Dust", hsl: "36 35% 72%", foregroundHsl: "25 25% 15%" },
] as const;

export type AccentColor = (typeof ACCENT_COLORS)[number];

export const DEFAULT_ACCENT_NAME = "Guide Rail";
export const ACCENT_STORAGE_KEY = "intentmesh-accent";
export const ACCENT_STORAGE_HSL_KEY = "intentmesh-accent-hsl";
export const ACCENT_STORAGE_FG_KEY = "intentmesh-accent-fg";

export const DEFAULT_ACCENT =
  ACCENT_COLORS.find((color) => color.name === DEFAULT_ACCENT_NAME) ?? ACCENT_COLORS[0];

export function applyAccentToDocument(color: AccentColor) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  root.style.setProperty("--primary", color.hsl);
  root.style.setProperty("--primary-foreground", color.foregroundHsl);
  root.style.setProperty("--accent", color.hsl);
  root.style.setProperty("--accent-foreground", color.foregroundHsl);
}


