import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export interface GraphicType {
  totalInvested: number;
  monthlyInterest: number;
  cumulativeTotal: number;
  totalYield: number;
  date: string;
}

interface GraphicRoscaType {
  totalInvested: number;
  taxes: number;
  totalYield: number;
}

const graphicSchema = yup.object({
  initialInvestment: yup.string().required("*Este campo é obrigatório"),
  additionalContributions: yup.string().required("*Este campo é obrigatório"),
  term: yup.string().required("*Este campo é obrigatório"),
  frequencyTerm: yup.string().required("*Este campo é obrigatório"),
  profiability: yup.string().required("*Este campo é obrigatório"),
  frequencyProfiability: yup.string().required("*Este campo é obrigatório"),
  taxesOnProfit: yup.string().required("*Este campo é obrigatório"),
});

type graphicType = yup.InferType<typeof graphicSchema>;

export function useCalculator() {
  const [graphic, setGraphic] = useState<GraphicType[]>([]);
  const [graphicRosca, setGraphicRosca] = useState<GraphicRoscaType>();
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      initialInvestment: "",
      additionalContributions: "",
      term: "",
      frequencyTerm: "",
      profiability: "",
      frequencyProfiability: "",
      taxesOnProfit: "",
    },
    resolver: yupResolver(graphicSchema),
  });

  const calculateFinalResult = (data: graphicType) => {
    const {
      additionalContributions,
      frequencyProfiability,
      frequencyTerm,
      initialInvestment,
      profiability,
      taxesOnProfit,
      term,
    } = data;

    setGraphic([]);
    let totalInvested: number = parseFloat(
      initialInvestment.replaceAll(",", "."),
    );
    let cumulativeTotal: number = parseFloat(
      initialInvestment.replaceAll(",", "."),
    );

    const Gainfulness: number =
      frequencyProfiability === "monthly"
        ? parseFloat(profiability.replaceAll(",", ".")) / 100
        : 1 +
          (parseFloat(profiability.replaceAll(",", ".")) / 100) ** 1 / 12 -
          1;

    const termCont: number =
      frequencyTerm === "monthly"
        ? parseFloat(term.replaceAll(",", "."))
        : parseFloat(term.replaceAll(",", ".")) * 12;

    const arrayToGraphic: GraphicType[] = [];

    for (let i = 1; i <= termCont; i++) {
      const currentDate = new Date();

      if (i === 1) {
        arrayToGraphic.push({
          date: currentDate.toLocaleDateString("pt-BR"),
          cumulativeTotal: totalInvested,
          monthlyInterest: 0,
          totalInvested: totalInvested,
          totalYield: 0,
        });
      }

      currentDate.setMonth(currentDate.getMonth() + i);

      totalInvested += parseFloat(additionalContributions.replaceAll(",", "."));

      const monthlyInterest: number = cumulativeTotal * Gainfulness;

      cumulativeTotal =
        cumulativeTotal +
        parseFloat(additionalContributions.replaceAll(",", ".")) +
        monthlyInterest;

      const totalYield: number = cumulativeTotal - totalInvested;

      const object: GraphicType = {
        cumulativeTotal: cumulativeTotal,
        monthlyInterest: monthlyInterest,
        totalInvested: totalInvested,
        totalYield: totalYield,
        date: currentDate.toLocaleDateString("pt-BR"),
      };

      arrayToGraphic.push(object);
    }

    const graphicSize = arrayToGraphic.length - 1;

    const objectRosca: GraphicRoscaType = {
      taxes:
        ((arrayToGraphic[graphicSize].cumulativeTotal -
          arrayToGraphic[graphicSize].totalInvested) *
          Number(taxesOnProfit)) /
        100,
      totalInvested: arrayToGraphic[graphicSize].totalInvested,
      totalYield:
        arrayToGraphic[graphicSize].cumulativeTotal -
        arrayToGraphic[graphicSize].totalInvested -
        ((arrayToGraphic[graphicSize].cumulativeTotal -
          arrayToGraphic[graphicSize].totalInvested) *
          Number(taxesOnProfit)) /
          100,
    };

    setGraphic(arrayToGraphic);
    setGraphicRosca(objectRosca);

    reset();
  };

  const onSubmit = (data: graphicType) => {
    calculateFinalResult(data);
  };

  return {
    onSubmit,
    calculateFinalResult,
    graphic,
    graphicRosca,
    control,
    Controller,
    handleSubmit,
    errors,
    reset,
  };
}
