import { createContext } from "react";

interface ThemeContextType {
  theme: "light" | "dark";
  handleTheme: (theme: "dark" | "light") => void;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);
