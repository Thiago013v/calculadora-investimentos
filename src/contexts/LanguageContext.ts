import { createContext } from "react";

interface LanguageContextType {
  language: "pt-br" | "en-us";
  handleLanguage: (language: "pt-br" | "en-us") => void;
}

export const LanguageContext = createContext<LanguageContextType | null>(null);
