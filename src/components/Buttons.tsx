import { useLanguage } from "../hooks/useLanguage";

interface ButtonsType {
  reset: () => void;
}

export function Buttons({ reset }: ButtonsType) {
  const { language } = useLanguage();

  return (
    <div className="join gap-2">
      <button className="btn w-[50%]" type="submit">
        {language === "pt-br" ? "Calcular" : "Calculate"}
      </button>
      <button
        className="btn w-[50%] btn-outline btn-accent text-text"
        onClick={reset}
        type="reset"
      >
        {language === "pt-br" ? "Limpar" : "Clear"}
      </button>
    </div>
  );
}
