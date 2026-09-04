import { IoMdInformationCircleOutline } from "react-icons/io";
import { useLanguage } from "../hooks/useLanguage";

interface PopupAtentionType {
  popupState: boolean;
  closePopup: () => void;
}

export function PopupAtention({ popupState, closePopup }: PopupAtentionType) {
  const { language } = useLanguage();

  return (
    <div
      className={`w-full h-[65%] md:w-[60%] md:h-[40%] lg:w-[30%] lg:h-[60%] p-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background z-10  rounded-lg ${popupState ? "visible opacity-100 transition-all duration-300 flex flex-col justify-between" : "invisible opacity-0 transition-all duration-300"}`}
    >
      <IoMdInformationCircleOutline className="text-8xl text-info w-full" />

      <h3 className="text-center text-3xl text-text">
        {language === "pt-br" ? "ATENÇÃO!" : "ATTENTION!"}
      </h3>

      <p className="text-text text-justify mt-2">
        {language === "pt-br"
          ? "Os valores e gráficos exibidos no momento são apenas uma demonstração inicial com dados ilustrativos. Para visualizar a sua projeção personalizada, preencha os campos do formulário com os seus dados de investimento e clique em Calcular"
          : "The values and charts currently displayed are for demonstration purposes only, using initial illustrative data. To view your personalized projection, fill in the form fields with your investment details and click Calculate."}
      </p>

      <button
        className="text-center w-full bg-info p-2 rounded-lg cursor-pointer hover:bg-secondary transition duration-75 ease-in-out"
        onClick={closePopup}
      >
        {language === "pt-br" ? "Entendi" : "Got it"}
      </button>
    </div>
  );
}
