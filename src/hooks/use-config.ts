import { create } from "zustand";
import { persist } from "zustand/middleware";
import { defaultTheme } from "@/lib/theme";
import type { Theme } from "@/types/theme";
import type { Style } from "@/config/styles-config";

type Config = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  style: Style["name"];
  setStyle: (style: Style["name"]) => void;
  mode: "light" | "dark";
  setMode: (mode: "light" | "dark") => void;
};

export const useConfig = create<Config>()(
  persist(
    (set) => ({
      style: "default",
      mode: "dark",
      theme: defaultTheme,
      setStyle: (style: Style["name"]) => set((state) => ({ ...state, style })),
      setTheme: (theme: Theme) => set((state) => ({ ...state, theme })),
      setMode: (mode: "light" | "dark") => set((state) => ({ ...state, mode })),
    }),
    {
      name: "preview-theme",
    }
  )
);
