import { memo } from "react";
import { useLanguage } from "../hooks/useLanguage";

interface TableRowType {
  monthlyInterest: number;
  totalInvested: number;
  totalYield: number;
  cumulativeTotal: number;
  index: number;
}

export const TableRow = memo(function TableRow({
  monthlyInterest,
  totalInvested,
  totalYield,
  cumulativeTotal,
  index,
}: TableRowType) {
  const { language } = useLanguage();

  const languageTag: "pt-BR" | "en-US" =
    language === "pt-br" ? "pt-BR" : "en-US";
  const currencyCodes: "BRL" | "USD" = language === "pt-br" ? "BRL" : "USD";

  return (
    <tr>
      <td className="border border-border text-center text-text pl-4 pr-4">
        {index}
      </td>
      <td className="border border-border text-text pl-4 pr-4 text-center">
        {monthlyInterest.toLocaleString("pt-BR", {
          style: "currency",
          currency: currencyCodes,
        })}
      </td>
      <td className="border border-border text-text pl-4 pr-4 text-center">
        {totalInvested.toLocaleString(languageTag, {
          style: "currency",
          currency: currencyCodes,
        })}
      </td>
      <td className="border border-border text-text pl-4 pr-4 text-center">
        {totalYield.toLocaleString(languageTag, {
          style: "currency",
          currency: currencyCodes,
        })}
      </td>
      <td className="border border-border text-text pl-4 pr-4 text-center">
        {cumulativeTotal.toLocaleString(languageTag, {
          style: "currency",
          currency: currencyCodes,
        })}
      </td>
    </tr>
  );
});
