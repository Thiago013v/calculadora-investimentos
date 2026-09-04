import { useLanguage } from "../hooks/useLanguage";

interface SelectType {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onBlur: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
  onRef: (node: HTMLSelectElement | null) => void;
  children: React.ReactNode;
}

export function Select({
  onBlur,
  onChange,
  onRef,
  value,
  children,
}: SelectType) {
  const { language } = useLanguage();

  return (
    <div className="flex flex-col">
      <select
        className="select select-xs w-full text-[1rem] flex justify-center"
        onChange={onChange}
        onBlur={onBlur}
        ref={onRef}
        value={value}
      >
        <option value="" disabled>
          {language === "pt-br" ? "Selecione" : "Select"}
        </option>
        <option value="monthly">
          {language === "pt-br" ? "Mensal" : "Monthly"}
        </option>
        <option value="annual">
          {language === "pt-br" ? "Anual" : "Annual"}
        </option>
      </select>

      {children}
    </div>
  );
}
