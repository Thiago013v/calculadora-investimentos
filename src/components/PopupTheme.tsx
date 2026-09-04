import { useLanguage } from "../hooks/useLanguage";
import { useTheme } from "../hooks/useTheme";
import { IoMdClose } from "react-icons/io";
import { IoMoonOutline } from "react-icons/io5";
import { IoMdSunny } from "react-icons/io";

interface PopupThemeType {
  closePopup: () => void;
  popup: boolean;
}

export function PopupTheme({ closePopup, popup }: PopupThemeType) {
  const { language } = useLanguage();
  const { handleTheme, theme } = useTheme();

  return (
    <div
      className={` w-[80%] md:w-[30%] h-[40%] p-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background z-10 rounded-lg flex flex-col gap-10 ${popup ? "visible opacity-100 transition-all duration-300" : "invisible opacity-0 transition-all duration-300"}`}
    >
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-center text-2xl text-text flex flex-row items-center gap-2">
          <IoMoonOutline /> {language === "pt-br" ? "Tema" : "Theme"}
        </h2>

        <button className="cursor-pointer" onClick={closePopup}>
          <IoMdClose className="text-text text-2xl" />
        </button>
      </div>

      <div className="border border-border flex flex-col items-center w-full h-[80%] gap-5">
        <p className="text-text">
          {language === "pt-br"
            ? "Escolha o tema da interface"
            : "Choose the interface theme."}
        </p>

        <div className="flex flex-col justify-center items-center w-full gap-4">
          <button
            className={`border border-border w-[80%] text-text p-2 rounded-lg flex flex-row items-center gap-2 cursor-pointer text-[1.1rem] ${theme === "light" ? "bg-primary" : "hover:bg-border"}`}
            onClick={() => handleTheme("light")}
          >
            <IoMdSunny /> {language === "pt-br" ? "Claro" : "Light"}
          </button>
          <button
            className={`border border-border w-[80%] text-text p-2 rounded-lg flex flex-row items-center gap-2 cursor-pointer text-[1.1rem] ${theme === "dark" ? "bg-primary" : "hover:bg-border"}`}
            onClick={() => handleTheme("dark")}
          >
            <IoMoonOutline /> {language === "pt-br" ? "Escuro" : "Dark"}
          </button>
        </div>
      </div>
    </div>
  );
}
