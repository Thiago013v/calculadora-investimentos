import { AiOutlineGlobal } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { useLanguage } from "../hooks/useLanguage";

interface PopupLanguageType {
  closePopup: () => void;
  popup: boolean;
}

export function PopupLanguage({ closePopup, popup }: PopupLanguageType) {
  const { handleLanguage, language } = useLanguage();

  return (
    <div
      className={`w-[80%] md:w-[50%] lg:w-[30%] md:h-[45%] lg:h-[40%] p-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background z-10 rounded-lg flex flex-col gap-10 ${popup ? "visible opacity-100 transition-all duration-300" : "invisible opacity-0 transition-all duration-300"}`}
    >
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-center text-2xl text-text flex flex-row items-center gap-2">
          <AiOutlineGlobal /> {language === "pt-br" ? "Idioma" : "Language"}
        </h2>

        <button className="cursor-pointer" onClick={closePopup}>
          <IoMdClose className="text-text text-2xl" />
        </button>
      </div>

      <div className="border border-border flex flex-col items-center w-full h-[80%] gap-5">
        <p className="text-text">Selecione o idioma / Select language</p>

        <div className="flex flex-col justify-center items-center w-full gap-4">
          <button
            className={`border border-border w-[80%] text-text p-3 rounded-lg flex flex-row cursor-pointer ${language === "pt-br" ? "bg-primary" : "hover:bg-border"}`}
            onClick={() => handleLanguage("pt-br")}
          >
            🇧🇷 Português (Brasil)
          </button>
          <button
            className={`border border-border w-[80%] text-text p-3 rounded-lg flex flex-row cursor-pointer ${language === "en-us" ? "bg-primary" : "hover:bg-border"}`}
            onClick={() => handleLanguage("en-us")}
          >
            🇺🇸 English (United States)
          </button>
        </div>
      </div>
    </div>
  );
}
