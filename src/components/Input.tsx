import CurrencyInput from "react-currency-input-field";

interface InputType {
  idName: string;
  labelName: string;
  symbol?: "R$" | "$" | "%";
  withSelect: boolean;
  children?: React.ReactNode;
  onChange: (values: string | undefined | null) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  value: string | number;
  onRef: (node: HTMLInputElement | null) => void;
}

export function Input({
  idName,
  labelName,
  symbol,
  children,
  onBlur,
  onChange,
  onRef,
  value,
  withSelect,
}: InputType) {
  if (symbol && !withSelect) {
    return (
      <div>
        <label htmlFor={idName} className="text-text text-[1rem]">
          {labelName}
        </label>
        <div className="flex">
          <div className="bg-accent text-text w-[10%] text-center">
            {symbol}
          </div>

          <CurrencyInput
            className="input input-xs bg-background w-full text-text text-[1rem]"
            id={idName}
            onValueChange={(value) => onChange(value)}
            onBlur={onBlur}
            ref={onRef}
            defaultValue={value}
            value={value}
            allowNegativeValue={false}
            allowDecimals={true}
            decimalSeparator=","
            groupSeparator="."
            decimalsLimit={2}
          ></CurrencyInput>
        </div>
      </div>
    );
  }

  if (!symbol && withSelect) {
    return (
      <div>
        <label htmlFor={idName} className="text-text text-[1rem]">
          {labelName}
        </label>
        <div className="flex w-full">
          <CurrencyInput
            className="input input-xs bg-background w-[90%] text-text text-[1rem]"
            id={idName}
            onValueChange={(value) => onChange(value)}
            onBlur={onBlur}
            ref={onRef}
            defaultValue={value}
            value={value}
            allowNegativeValue={false}
            allowDecimals={true}
            decimalSeparator=","
            groupSeparator="."
            decimalsLimit={2}
          ></CurrencyInput>

          {children}
        </div>
      </div>
    );
  }

  if (symbol && withSelect) {
    return (
      <div className="flex flex-col">
        <label htmlFor={idName} className="text-text text-[1rem]">
          {labelName}
        </label>
        <div className="flex w-full">
          <div className="bg-accent text-text w-[10%] max-h-6 text-center">
            {symbol}
          </div>
          <CurrencyInput
            className="input input-xs bg-background w-[80%] text-text text-[1rem]"
            id={idName}
            onValueChange={(value) => onChange(value)}
            onBlur={onBlur}
            ref={onRef}
            defaultValue={value}
            value={value}
            allowNegativeValue={false}
            allowDecimals={true}
            decimalSeparator=","
            groupSeparator="."
            decimalsLimit={2}
          ></CurrencyInput>

          {children}
        </div>
      </div>
    );
  }
}
