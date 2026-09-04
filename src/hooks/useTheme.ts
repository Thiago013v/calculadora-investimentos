import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export function useTheme() {
  const provider = useContext(ThemeContext);

  if (!provider) {
    throw new Error(
      "[ERRO] Não pode utilizar esse contexto fora de um PROVIDER",
    );
  }

  const { handleTheme, theme } = provider;

  return { handleTheme, theme };
}
