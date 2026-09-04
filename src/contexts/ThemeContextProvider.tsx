import { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";

interface ThemeContextProviderType {
  children: React.ReactNode;
}

export function ThemeContextProvider({ children }: ThemeContextProviderType) {
  const [theme, setTheme] = useState<"light" | "dark">(() =>
    localStorage.getItem("theme") === "dark" ? "dark" : "light",
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      return;
    } else {
      document.documentElement.classList.remove("dark");
      return;
    }
  }, [theme]);

  const handleTheme = (theme: "dark" | "light") => {
    if (theme === "dark") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <ThemeContext.Provider value={{ handleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
}
