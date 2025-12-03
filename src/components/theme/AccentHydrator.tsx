"use client";

import { useEffect } from "react";
import {
  ACCENT_COLORS,
  DEFAULT_ACCENT,
  ACCENT_STORAGE_KEY,
  ACCENT_STORAGE_HSL_KEY,
  ACCENT_STORAGE_FG_KEY,
  applyAccentToDocument,
} from "@/lib/theme";

export function AccentHydrator() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const storedName = window.localStorage.getItem(ACCENT_STORAGE_KEY);
    const storedHsl = window.localStorage.getItem(ACCENT_STORAGE_HSL_KEY);
    const storedFg = window.localStorage.getItem(ACCENT_STORAGE_FG_KEY);

    const fromStorage =
      storedName && storedHsl && storedFg
        ? ACCENT_COLORS.find((color) => color.name === storedName) ?? null
        : null;

    const accent = fromStorage ?? DEFAULT_ACCENT;
    applyAccentToDocument(accent);
  }, []);

  return null;
}


