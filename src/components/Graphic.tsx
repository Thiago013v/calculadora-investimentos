import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Bar,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";
import type { GraphicType } from "../hooks/useCalculator";
import type { RoscaDadosType } from "../App";
import { memo } from "react";
import { useLanguage } from "../hooks/useLanguage";

interface GraphicComponentType {
  dataPie?: RoscaDadosType[];
  dataBar?: GraphicType[];
}

export const Graphic = memo(function Graphic({
  dataPie,
  dataBar,
}: GraphicComponentType) {
  const { language } = useLanguage();

  if (dataPie) {
    return (
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={dataPie}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={90}
            paddingAngle={0}
          >
            {dataPie.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.cor} />
            ))}
          </Pie>

          <Tooltip
            formatter={(value) =>
              !value
                ? undefined
                : language === "pt-br"
                  ? `R$ ${value.toLocaleString("pt-BR")}`
                  : `$ ${value.toLocaleString("en-US")}`
            }
          />
          <Legend verticalAlign="top" />
        </PieChart>
      </ResponsiveContainer>
    );
  }

  if (dataBar) {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={dataBar}
          margin={{ top: 20, right: 30, left: 20, bottom: 30 }}
        >
          <CartesianGrid stroke="#e0e0e0" />

          <XAxis
            dataKey="date"
            angle={-45}
            textAnchor="end"
            height={60}
            tick={{ fontSize: 12 }}
          />

          <YAxis
            dataKey="cumulativeTotal"
            tickFormatter={(value) =>
              language === "pt-br"
                ? value.toLocaleString("pt-BR")
                : value.toLocaleString("en-US")
            }
            tick={{ fontSize: 12 }}
          />

          <Tooltip
            formatter={(value) =>
              language === "pt-br"
                ? `R$ ${Number(value).toLocaleString("pt-BR")}`
                : `$ ${Number(value).toLocaleString("en-US")}`
            }
          />

          <Legend verticalAlign="top" height={40} />

          <Bar
            dataKey="totalInvested"
            name={language === "pt-br" ? "Total Investido" : "Total Invested"}
            stackId="a"
            fill="#5A8DEE"
          />
          <Bar
            dataKey="totalYield"
            name={
              language === "pt-br"
                ? "Retorno de Investimento"
                : "Return on Investment"
            }
            stackId="a"
            fill="#FF748B"
          />
        </BarChart>
      </ResponsiveContainer>
    );
  }
});
