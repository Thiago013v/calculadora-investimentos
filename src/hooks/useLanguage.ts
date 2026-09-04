import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

export function useLanguage() {
  const provider = useContext(LanguageContext);

  if (!provider) {
    throw new Error(
      "[ERRO] NÃO PODE UTILIZAR O CONTEXTO DE IDIOMA FORA DO PROVIDER DE IDIOMA",
    );
  }

  const { handleLanguage, language } = provider;

  return { handleLanguage, language };
}
