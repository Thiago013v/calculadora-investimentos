import { LanguageContext } from "./LanguageContext";
import { useState, useEffect } from "react";

interface LanguageContextProviderType {
  children: React.ReactNode;
}

export function LanguageContextProvider({
  children,
}: LanguageContextProviderType) {
  const [language, setLanguage] = useState<"pt-br" | "en-us">(() =>
    localStorage.getItem("language") === "en-us" ? "en-us" : "pt-br",
  );

  useEffect(() => {
    if (language === "en-us") {
      localStorage.setItem("language", "en-us");
      return;
    }

    localStorage.setItem("language", "pt-br");
  }, [language]);

  const handleLanguage = (language: "pt-br" | "en-us") => {
    setLanguage(language);
  };

  return (
    <LanguageContext.Provider value={{ language, handleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
