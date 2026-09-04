import { useCalculator } from "./hooks/useCalculator";
import { usePopup } from "./hooks/usePopup";
import { useLanguage } from "./hooks/useLanguage";

import { useMemo } from "react";
import type { GraphicType } from "./hooks/useCalculator";
import { Buttons } from "./components/Buttons";
import { Input } from "./components/Input";
import { Graphic } from "./components/Graphic";
import { TableRow } from "./components/TableRow";
import { Select } from "./components/Select";
import { dataBase } from "./mocks/mockData";
import { dataPie } from "./mocks/mockDataPie";
import { PopupAtention } from "./components/PopupAtention";
import { PopupLanguage } from "./components/PopupLanguage";
import { PopupTheme } from "./components/PopupTheme";
import { PopupInformation } from "./components/PopupInformation";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineGlobal } from "react-icons/ai";
import { IoMoonOutline } from "react-icons/io5";

export interface RoscaDadosType {
  name: string;
  value: number | undefined;
  cor: string;
}

export function App() {
  const { language } = useLanguage();

  const {
    popupState,
    closePopup,
    handlePopupInformation,
    popupInformationState,
    setAllPopupState,
    handlePopupLanguage,
    popupLanguageState,
    handlePopupTheme,
    popupThemeState,
  } = usePopup();

  const {
    onSubmit,
    graphic,
    graphicRosca,
    Controller,
    control,
    errors,
    reset,
    handleSubmit,
  } = useCalculator();

  const dadosRosca: RoscaDadosType[] = useMemo(() => {
    const nameTotalInvested: string =
      language === "pt-br" ? "Total Investido" : "Total Invested";
    const returnOnInvestment: string =
      language === "pt-br" ? "Retorno de Investimento" : "Return on Investment";
    const taxes: string = language === "pt-br" ? "Imposto" : "Tax";

    return [
      {
        name: nameTotalInvested,
        value: graphicRosca?.totalInvested,
        cor: "#5A8DEE",
      },
      {
        name: returnOnInvestment,
        value: graphicRosca?.totalYield,
        cor: "#FF748B",
      },
      { name: taxes, value: graphicRosca?.taxes, cor: "#FFC107" },
    ];
  }, [graphicRosca, language]);

  return (
    <>
      <PopupAtention
        closePopup={closePopup}
        popupState={popupState}
      ></PopupAtention>

      <PopupLanguage
        closePopup={handlePopupLanguage}
        popup={popupLanguageState}
      ></PopupLanguage>

      <PopupTheme
        closePopup={handlePopupTheme}
        popup={popupThemeState}
      ></PopupTheme>

      <PopupInformation
        closePopup={handlePopupInformation}
        popup={popupInformationState}
      ></PopupInformation>

      <div
        className={`min-h-svh flex flex-col lg:grid lg:grid-cols-[30%_70%] lg:grid-rows-[1fr] ${setAllPopupState && "blur-md brightness-50 pointer-events-none select-none"}`}
      >
        <div
          className="flex flex-col justify-between col-start-1 col-end-2 row-start-1 row-end-2 bg-primary p-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <form className="flex flex-col h-full w-full justify-between gap-2">
            <div className="flex flexr-row justify-center items-center self-start gap-4">
              <div className="dropdown">
                <button tabIndex={0} role="button">
                  <GiHamburgerMenu className="text-3xl cursor-pointer" />
                </button>
                <div
                  tabIndex={0}
                  className="dropdown-content card card-sm bg-background z-1 w-64 shadow-md"
                >
                  <div className="card-body flex flex-col p-0">
                    <button
                      className="flex flex-row items-center text-text gap-2 text-[1.05rem] cursor-pointer h-full w-full p-2"
                      type="button"
                      onClick={handlePopupInformation}
                    >
                      <IoMdInformationCircleOutline />{" "}
                      {language === "pt-br" ? "Ajuda" : "Help"}
                    </button>

                    <button
                      className="flex flex-row items-center text-text gap-2 text-[1.05rem] cursor-pointer h-full w-full p-2"
                      type="button"
                      onClick={handlePopupLanguage}
                    >
                      <AiOutlineGlobal />{" "}
                      {language === "pt-br" ? "Idioma" : "Language"}
                    </button>

                    <button
                      className="flex flex-row items-center text-text gap-2 text-[1.05rem] cursor-pointer h-full w-full p-2"
                      type="button"
                      onClick={handlePopupTheme}
                    >
                      <IoMoonOutline />{" "}
                      {language === "pt-br" ? "Tema" : "Theme"}
                    </button>
                  </div>
                </div>
              </div>
              <h1 className="text-[1.2rem] text-text">
                {language === "pt-br"
                  ? "Calculadora de Investimentos"
                  : "Investment Calculator"}
              </h1>
            </div>

            <div className="flex flex-col gap-4">
              <Controller
                control={control}
                name="initialInvestment"
                render={({ field }) => (
                  <Input
                    idName="initial-investment"
                    labelName={
                      language === "pt-br"
                        ? "Investimento Inicial"
                        : "Initial Investment"
                    }
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    onRef={field.ref}
                    value={field.value}
                    symbol={language === "pt-br" ? "R$" : "$"}
                    withSelect={false}
                  ></Input>
                )}
              ></Controller>
              {errors.initialInvestment && (
                <span className="text-red-500">
                  {errors.initialInvestment.message}
                </span>
              )}
              <Controller
                control={control}
                name="additionalContributions"
                render={({ field }) => (
                  <Input
                    idName="additional-contributions"
                    labelName={
                      language === "pt-br"
                        ? "Aportes Adicionais"
                        : "Additional Contributions"
                    }
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    onRef={field.ref}
                    value={field.value}
                    symbol={language === "pt-br" ? "R$" : "$"}
                    withSelect={false}
                  ></Input>
                )}
              ></Controller>
              {errors.additionalContributions && (
                <span className="text-red-500">
                  {errors.additionalContributions.message}
                </span>
              )}
              <Controller
                control={control}
                name="term"
                render={({ field }) => (
                  <Input
                    idName="term"
                    labelName={language === "pt-br" ? "Prazo" : "Term"}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    onRef={field.ref}
                    value={field.value}
                    withSelect={true}
                  >
                    <Controller
                      name="frequencyTerm"
                      control={control}
                      render={({ field }) => (
                        <Select
                          onBlur={field.onBlur}
                          onChange={field.onChange}
                          onRef={field.ref}
                          value={field.value}
                        >
                          {!errors.term && errors.frequencyTerm && (
                            <span className="text-red-500">
                              {errors.frequencyTerm.message}
                            </span>
                          )}
                        </Select>
                      )}
                    ></Controller>
                  </Input>
                )}
              ></Controller>
              {errors.term && (
                <span className="text-red-500">{errors.term.message}</span>
              )}
              <Controller
                control={control}
                name="profiability"
                render={({ field }) => (
                  <Input
                    idName="profiability"
                    labelName={
                      language === "pt-br" ? "Rentabilidade" : "Profitability"
                    }
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    onRef={field.ref}
                    value={field.value}
                    withSelect={true}
                    symbol="%"
                  >
                    <Controller
                      name="frequencyProfiability"
                      control={control}
                      render={({ field }) => (
                        <Select
                          onBlur={field.onBlur}
                          onChange={field.onChange}
                          onRef={field.ref}
                          value={field.value}
                        >
                          {!errors.profiability &&
                            errors.frequencyProfiability && (
                              <span className="text-red-500">
                                {errors.frequencyProfiability.message}
                              </span>
                            )}
                        </Select>
                      )}
                    ></Controller>
                  </Input>
                )}
              ></Controller>
              {errors.profiability && (
                <span className="text-red-500">
                  {errors.profiability.message}
                </span>
              )}
              <Controller
                control={control}
                name="taxesOnProfit"
                render={({ field }) => (
                  <Input
                    idName="taxes-on-profit"
                    labelName={
                      language === "pt-br"
                        ? "Impostos sobre Lucro"
                        : "Taxes on Profit"
                    }
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    onRef={field.ref}
                    value={field.value}
                    symbol="%"
                    withSelect={false}
                  ></Input>
                )}
              ></Controller>
              {errors.taxesOnProfit && (
                <span className="text-red-500">
                  {errors.taxesOnProfit.message}
                </span>
              )}
            </div>

            <Buttons reset={reset}></Buttons>
          </form>
        </div>

        <div className="flex flex-col lg:grid lg:grid-rows-[1fr_1fr] lg:grid-cols-[1fr] lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2 bg-background w-full h-full carousel">
          <div className="carousel flex w-full h-full col-start-1 col-end-1 row-start-1 row-end-3">
            <div
              id="slide1"
              className="carousel-item relative w-full h-full flex flex-col"
            >
              <div className="flex flex-col h-full w-full justify-center items-center p-2">
                <h2 className="text-2xl text-text ml-3">
                  {language === "pt-br" ? "Resultado Final" : "Result Final"}
                </h2>
                {graphicRosca?.totalInvested === undefined ? (
                  <Graphic dataPie={dataPie}></Graphic>
                ) : (
                  <Graphic dataPie={dadosRosca}></Graphic>
                )}
              </div>
              <div className="flex flex-col w-full h-full  justify-center items-center p-2">
                <h2 className="text-2xl text-text ml-3">
                  {language === "pt-br" ? "Progressão" : "Progression"}
                </h2>
                {graphic.length === 0 ? (
                  <Graphic dataBar={dataBase}></Graphic>
                ) : (
                  <Graphic dataBar={graphic}></Graphic>
                )}
              </div>
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a
                  href="#slide2"
                  className="btn btn-circle bg-text text-background"
                >
                  ❮
                </a>
                <a
                  href="#slide2"
                  className="btn btn-circle bg-text text-background"
                >
                  ❯
                </a>
              </div>
            </div>
            <div
              id="slide2"
              className="carousel-item relative w-full h-full flex justify-center items-center"
            >
              <div className="max-h-140 overflow-auto">
                <table className="border border-separate border-spacing-0">
                  <thead>
                    <tr>
                      <th className="border border-border text-text pl-8 pr-8 sticky top-0 z-10 bg-secondary">
                        {language === "pt-br" ? "Mês" : "Month"}
                      </th>
                      <th className="border border-border text-text pl-8 pr-8 sticky top-0 z-10 bg-secondary">
                        {language === "pt-br" ? "Juros" : "Interest"}
                      </th>
                      <th className="border border-border text-text pl-8 pr-8 sticky top-0 z-10 bg-secondary">
                        {language === "pt-br"
                          ? "Total Investido"
                          : "Total Invested"}
                      </th>
                      <th className="border border-border text-text pl-8 pr-8 sticky top-0 z-10 bg-secondary">
                        {language === "pt-br"
                          ? "Rendimento Total"
                          : "Total Returns"}
                      </th>
                      <th className="border border-border text-text pl-8 pr-8 sticky top-0 z-10 bg-secondary">
                        {language === "pt-br"
                          ? "Total Acumulado"
                          : "Total Accumulated"}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {graphic.length === 0
                      ? dataBase.map((currentValue: GraphicType, index) => (
                          <TableRow
                            key={index}
                            cumulativeTotal={currentValue.cumulativeTotal}
                            index={index}
                            monthlyInterest={currentValue.monthlyInterest}
                            totalInvested={currentValue.totalInvested}
                            totalYield={currentValue.totalYield}
                          ></TableRow>
                        ))
                      : graphic.map((currentValue: GraphicType, index) => (
                          <TableRow
                            key={index}
                            cumulativeTotal={currentValue.cumulativeTotal}
                            monthlyInterest={currentValue.monthlyInterest}
                            totalInvested={currentValue.totalInvested}
                            totalYield={currentValue.totalYield}
                            index={index}
                          ></TableRow>
                        ))}
                  </tbody>
                </table>
              </div>

              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a
                  href="#slide1"
                  className="btn btn-circle bg-text text-background"
                >
                  ❮
                </a>
                <a
                  href="#slide1"
                  className="btn btn-circle bg-text text-background"
                >
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
