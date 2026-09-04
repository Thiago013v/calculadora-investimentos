import { IoMdInformationCircleOutline } from "react-icons/io";
import { useLanguage } from "../hooks/useLanguage";
import { IoMdClose } from "react-icons/io";
import foto1 from "../assets/foto1.png";
import foto2 from "../assets/foto2.png";
import foto3 from "../assets/foto3.png";
import foto4 from "../assets/foto4.jpeg";
import foto5 from "../assets/foto5.jpeg";
import foto6 from "../assets/foto6.jpeg";
import foto7 from "../assets/foto7.jpeg";
import foto8 from "../assets/foto8.jpeg";
import foto9 from "../assets/foto9.jpeg";
import foto10 from "../assets/foto10.png";

interface PopupInformationType {
  closePopup: () => void;
  popup: boolean;
}

export function PopupInformation({ closePopup, popup }: PopupInformationType) {
  const { language } = useLanguage();

  return (
    <div
      className={`carousel w-full md:h-[70%] md:w-[50%] lg:h-[55%] lg:w-[35%]  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background z-10  rounded-lg ${popup ? "visible opacity-100 transition-all duration-300 flex flex-row" : "invisible opacity-0 transition-all duration-300"}`}
    >
      <div id="info1" className="carousel-item relative w-full">
        <div className="flex flex-col justify-between items-center p-4">
          <div className="w-full items-center flex justify-between">
            <h2 className="flex flex-row items-center gap-3 text-2xl text-text">
              <IoMdInformationCircleOutline />
              {language === "pt-br" ? "Informações" : "Information"}
            </h2>

            <button onClick={closePopup} className="cursor-pointer">
              <IoMdClose className="text-text text-2xl" />
            </button>
          </div>

          <img src={foto1} alt="Foto chatGPT" className="w-[70%]" />

          <div>
            <h2 className="text-text text-center text-2xl">
              {language === "pt-br"
                ? "Investimento Inicial"
                : "Initial Investment"}
            </h2>

            <p className="text-text text-justify">
              {language === "pt-br"
                ? "É o valor do seu primeiro depósito para começar a aplicação. Esse dinheiro entra no primeiro dia e serve de base para os juros do primeiro mês."
                : "It is the amount of your first deposit to start the investment. This money is added on the first day and serves as the basis for the interest earned in the first month."}
            </p>
          </div>
        </div>

        <div className="absolute  top-1/2 flex -translate-y-1/2 transform w-full right-5 justify-end">
          <a href="#info2" className="btn btn-circle bg-text text-background">
            ❯
          </a>
        </div>
      </div>
      <div id="info2" className="carousel-item relative w-full">
        <div className="flex flex-col justify-between items-center p-4">
          <div className="w-full items-center flex justify-between">
            <h2 className="flex flex-row items-center gap-3 text-2xl text-text">
              <IoMdInformationCircleOutline />
              {language === "pt-br" ? "Informações" : "Information"}
            </h2>

            <button onClick={closePopup} className="cursor-pointer">
              <IoMdClose className="text-text text-2xl" />
            </button>
          </div>

          <img src={foto2} alt="Foto chatGPT" className="w-[70%]" />

          <div>
            <h2 className="text-text text-center text-2xl">
              {language === "pt-br" ? "Aporte Mensal" : "Monthly Contribution"}
            </h2>

            <p className="text-text text-justify">
              {language === "pt-br"
                ? "É a quantia fixa que você pretende depositar todos os meses. Esse valor aumenta constantemente a sua base de cálculo, acelerando o crescimento dos seus juros compostos"
                : "It is the fixed amount you plan to deposit every month. This amount continuously increases your calculation base, accelerating the growth of your compound interest."}
            </p>
          </div>
        </div>

        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#info1" className="btn btn-circle bg-text text-background">
            ❮
          </a>
          <a href="#info3" className="btn btn-circle bg-text text-background">
            ❯
          </a>
        </div>
      </div>
      <div id="info3" className="carousel-item relative w-full">
        <div className="flex flex-col justify-between items-center p-4">
          <div className="w-full items-center flex justify-between">
            <h2 className="flex flex-row items-center gap-3 text-2xl text-text">
              <IoMdInformationCircleOutline />
              {language === "pt-br" ? "Informações" : "Information"}
            </h2>

            <button onClick={closePopup} className="cursor-pointer">
              <IoMdClose className="text-text text-2xl" />
            </button>
          </div>

          <img src={foto3} alt="Foto chatGPT" className="w-[70%]" />

          <div>
            <h2 className="text-text text-center text-2xl">
              {language === "pt-br" ? "Prazo" : "Term"}
            </h2>

            <p className="text-text text-justify">
              {language === "pt-br"
                ? "É o tempo total em que o seu dinheiro continuará rendendo. Quanto maior o prazo, mais tempo os juros compostos têm para fazer o seu dinheiro multiplicar"
                : "It is the total period during which your money will continue to earn returns. The longer the term, the more time compound interest has to multiply your money."}
            </p>
          </div>
        </div>

        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#info2" className="btn btn-circle bg-text text-background">
            ❮
          </a>
          <a href="#info4" className="btn btn-circle bg-text text-background">
            ❯
          </a>
        </div>
      </div>
      <div id="info4" className="carousel-item relative w-full">
        <div className="flex flex-col justify-between items-center p-4">
          <div className="w-full items-center flex justify-between">
            <h2 className="flex flex-row items-center gap-3 text-2xl text-text">
              <IoMdInformationCircleOutline />
              {language === "pt-br" ? "Informações" : "Information"}
            </h2>

            <button onClick={closePopup} className="cursor-pointer">
              <IoMdClose className="text-text text-2xl" />
            </button>
          </div>

          <img src={foto4} alt="Foto chatGPT" className="w-[70%]" />

          <div>
            <h2 className="text-text text-center text-2xl">
              {language === "pt-br" ? "Rentabilidade" : "Return Rate"}
            </h2>

            <p className="text-text text-justify">
              {language === "pt-br"
                ? "É a taxa de juros aplicada sobre o seu saldo a cada mês / ano. Ela define a velocidade com que o seu capital acumulado vai gerar novos rendimentos"
                : "It is the interest rate applied to your balance each month / year. It determines the rate at which your accumulated capital will generate new returns."}
            </p>
          </div>
        </div>

        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#info3" className="btn btn-circle bg-text text-background">
            ❮
          </a>
          <a href="#info5" className="btn btn-circle bg-text text-background">
            ❯
          </a>
        </div>
      </div>
      <div id="info5" className="carousel-item relative w-full">
        <div className="flex flex-col justify-between items-center p-4">
          <div className="w-full items-center flex justify-between">
            <h2 className="flex flex-row items-center gap-3 text-2xl text-text">
              <IoMdInformationCircleOutline />
              {language === "pt-br" ? "Informações" : "Information"}
            </h2>

            <button onClick={closePopup} className="cursor-pointer">
              <IoMdClose className="text-text text-2xl" />
            </button>
          </div>

          <img src={foto5} alt="Foto chatGPT" className="w-[70%]" />

          <div>
            <h2 className="text-text text-center text-2xl">
              {language === "pt-br" ? "Imposto de Renda" : "Income Tax"}
            </h2>

            <p className="text-text text-justify">
              {language === "pt-br"
                ? "É a porcentagem cobrada pelo governo sobre os lucros gerados no final do investimento. Esse valor não afeta o que você investiu do bolso, apenas o rendimento obtido."
                : "It is the percentage charged by the government on the profits generated at the end of the investment. This amount does not affect what you invested out of pocket, only the returns earned."}
            </p>
          </div>
        </div>

        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#info4" className="btn btn-circle bg-text text-background">
            ❮
          </a>
          <a href="#info6" className="btn btn-circle bg-text text-background">
            ❯
          </a>
        </div>
      </div>
      <div id="info6" className="carousel-item relative w-full">
        <div className="flex flex-col justify-between items-center p-4">
          <div className="w-full items-center flex justify-between">
            <h2 className="flex flex-row items-center gap-3 text-2xl text-text">
              <IoMdInformationCircleOutline />
              {language === "pt-br" ? "Informações" : "Information"}
            </h2>

            <button onClick={closePopup} className="cursor-pointer">
              <IoMdClose className="text-text text-2xl" />
            </button>
          </div>

          <img src={foto6} alt="Foto chatGPT" className="w-[70%]" />

          <div>
            <h2 className="text-text text-center text-2xl">
              {language === "pt-br" ? "Botão Calcular" : "Calculate Button"}
            </h2>

            <p className="text-text text-justify">
              {language === "pt-br"
                ? "Processa os dados informados, aplica a fórmula dos juros compostos e gera instantaneamente a tabela de evolução e os gráficos de progresso e rendimento"
                : "Processes the provided data, applies the compound interest formula, and instantly generates the growth table and progress and returns charts."}
            </p>
          </div>
        </div>

        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#info5" className="btn btn-circle bg-text text-background">
            ❮
          </a>
          <a href="#info7" className="btn btn-circle bg-text text-background">
            ❯
          </a>
        </div>
      </div>
      <div id="info7" className="carousel-item relative w-full">
        <div className="flex flex-col justify-between items-center p-4">
          <div className="w-full items-center flex justify-between">
            <h2 className="flex flex-row items-center gap-3 text-2xl text-text">
              <IoMdInformationCircleOutline />
              {language === "pt-br" ? "Informações" : "Information"}
            </h2>

            <button onClick={closePopup} className="cursor-pointer">
              <IoMdClose className="text-text text-2xl" />
            </button>
          </div>

          <img src={foto7} alt="Foto chatGPT" className="w-[70%]" />

          <div>
            <h2 className="text-text text-center text-2xl">
              {language === "pt-br" ? "Botão Limpar" : "Clear Button"}
            </h2>

            <p className="text-text text-justify">
              {language === "pt-br"
                ? "Redefine todos os campos do formulário para os valores padrão (ou limpa os inputs), permitindo que você inicie uma nova simulação do zero sem alterar os resultados visíveis no momento."
                : "Resets all form fields to their default values (or clears the inputs), allowing you to start a new simulation from scratch without changing the results currently displayed."}
            </p>
          </div>
        </div>

        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#info6" className="btn btn-circle bg-text text-background">
            ❮
          </a>
          <a href="#info8" className="btn btn-circle bg-text text-background">
            ❯
          </a>
        </div>
      </div>
      <div id="info8" className="carousel-item relative w-full">
        <div className="flex flex-col justify-between items-center p-4">
          <div className="w-full items-center flex justify-between">
            <h2 className="flex flex-row items-center gap-3 text-2xl text-text">
              <IoMdInformationCircleOutline />
              {language === "pt-br" ? "Informações" : "Information"}
            </h2>

            <button onClick={closePopup} className="cursor-pointer">
              <IoMdClose className="text-text text-2xl" />
            </button>
          </div>

          <img src={foto8} alt="Foto chatGPT" className="w-[70%]" />

          <div>
            <h2 className="text-text text-center text-2xl">
              {language === "pt-br" ? "Gráfico de Rosca" : "Donut Chart"}
            </h2>

            <p className="text-text text-justify">
              {language === "pt-br"
                ? "Exibe a divisão proporcional do seu montante final no término do período. Ele destaca quanto do valor total corresponde ao capital investido (azul), ao lucro líquido retido (rosa) e à fatia correspondente ao Imposto de Renda descontado sobre os rendimentos (amarelo)."
                : "Displays the proportional breakdown of your final amount at the end of the period. It highlights how much of the total value corresponds to the invested capital (blue), the retained net profit (pink), and the portion corresponding to Income Tax deducted from the returns (yellow)."}
            </p>
          </div>
        </div>

        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#info7" className="btn btn-circle bg-text text-background">
            ❮
          </a>
          <a href="#info9" className="btn btn-circle bg-text text-background">
            ❯
          </a>
        </div>
      </div>
      <div id="info9" className="carousel-item relative w-full">
        <div className="flex flex-col justify-between items-center p-4">
          <div className="w-full items-center flex justify-between">
            <h2 className="flex flex-row items-center gap-3 text-2xl text-text">
              <IoMdInformationCircleOutline />
              {language === "pt-br" ? "Informações" : "Information"}
            </h2>

            <button onClick={closePopup} className="cursor-pointer">
              <IoMdClose className="text-text text-2xl" />
            </button>
          </div>

          <img src={foto9} alt="Foto chatGPT" className="w-[70%]" />

          <div>
            <h2 className="text-text text-center text-2xl">
              {language === "pt-br" ? "Gŕafico de Barras" : "Bar Chart"}
            </h2>

            <p className="text-text text-justify">
              {language === "pt-br"
                ? "Acompanha a evolução do seu patrimônio mês a mês. A barra azul mostra o total acumulado do dinheiro que você investiu do próprio bolso, enquanto a barra rosa representa o crescimento dos juros compostos acumulados ao longo do tempo"
                : "Track the growth of your wealth month by month. The blue bar shows the total amount of money you have invested out of your own pocket, while the pink bar represents the growth of compound interest accumulated over time."}
            </p>
          </div>
        </div>

        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#info8" className="btn btn-circle bg-text text-background">
            ❮
          </a>
          <a href="#info10" className="btn btn-circle bg-text text-background">
            ❯
          </a>
        </div>
      </div>
      <div id="info10" className="carousel-item relative w-full">
        <div className="flex flex-col justify-between items-center p-4">
          <div className="w-full items-center flex justify-between">
            <h2 className="flex flex-row items-center gap-3 text-2xl text-text">
              <IoMdInformationCircleOutline />
              {language === "pt-br" ? "Informações" : "Information"}
            </h2>

            <button onClick={closePopup} className="cursor-pointer">
              <IoMdClose className="text-text text-2xl" />
            </button>
          </div>

          <img src={foto10} alt="Foto chatGPT" className="w-[70%]" />

          <div>
            <h2 className="text-text text-center text-2xl">
              {language === "pt-br"
                ? "Tabela de Evolução Mensal"
                : "Monthly Progression Table"}
            </h2>

            <p className="text-text text-justify">
              {language === "pt-br"
                ? "Detalha o passo a passo financeiro de cada mês da simulação. Ela exibe o saldo inicial, a quantia aportada, os juros gerados no mês vigente e o saldo acumulado total, permitindo conferir a matemática exata do rendimento mês a mês."
                : "Details the financial step-by-step breakdown for each month of the simulation. It displays the initial balance, the amount contributed, the interest generated during the current month, and the total accumulated balance, allowing you to verify the exact return calculation month by month."}
            </p>
          </div>
        </div>

        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#info9" className="btn btn-circle bg-text text-background">
            ❮
          </a>
        </div>
      </div>
    </div>
  );
}
