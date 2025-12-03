"use client";

import { useTheme } from "next-themes";
import { useEffect, useMemo, useState } from "react";
import {
  ACCENT_COLORS,
  applyAccentToDocument,
  ACCENT_STORAGE_KEY,
  ACCENT_STORAGE_HSL_KEY,
  ACCENT_STORAGE_FG_KEY,
  DEFAULT_ACCENT,
} from "@/lib/theme";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [accentIndex, setAccentIndex] = useState(() =>
    Math.max(0, ACCENT_COLORS.findIndex((c) => c.name === DEFAULT_ACCENT.name)),
  );

  useEffect(() => {
    // Hydration guard for accent preview
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    if (typeof window === "undefined") return;
    const storedName = window.localStorage.getItem(ACCENT_STORAGE_KEY);
    if (storedName) {
      const storedIndex = ACCENT_COLORS.findIndex((color) => color.name === storedName);
      if (storedIndex >= 0) {
        setAccentIndex(storedIndex);
      }
    }
  }, []);

  useEffect(() => {
    if (theme !== "dark-graphite") {
      setTheme("dark-graphite");
    }
  }, [theme, setTheme]);

  useEffect(() => {
    if (!mounted) return;
    const accent = ACCENT_COLORS[accentIndex];
    applyAccentToDocument(accent);
    try {
      window.localStorage.setItem(ACCENT_STORAGE_KEY, accent.name);
      window.localStorage.setItem(ACCENT_STORAGE_HSL_KEY, accent.hsl);
      window.localStorage.setItem(ACCENT_STORAGE_FG_KEY, accent.foregroundHsl);
    } catch {
      /* localStorage unavailable */
    }
  }, [accentIndex, mounted]);

  const accent = useMemo(() => ACCENT_COLORS[accentIndex], [accentIndex]);

  const cycleAccent = () => {
    setAccentIndex((index) => (index + 1) % ACCENT_COLORS.length);
  };

  if (!mounted) {
    return <div className="h-10 w-28 rounded-full bg-slate-600/30 animate-pulse" />;
  }

  return (
    <button
      type="button"
      onClick={cycleAccent}
      className="group inline-flex items-center justify-between rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition hover:border-white/40 hover:bg-white/15"
      aria-label={`Current accent: ${accent.name}. Click to cycle.`}
    >
      <span>{accent.name}</span>
      <span
        aria-hidden="true"
        className="h-3 w-3 rounded-full border border-white/30 shadow-[0_0_8px_rgba(255,255,255,0.6)]"
        style={{ backgroundColor: `hsl(${accent.hsl})` }}
      />
    </button>
  );
}


