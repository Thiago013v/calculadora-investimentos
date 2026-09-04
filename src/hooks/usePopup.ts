import { useEffect, useState } from "react";

export function usePopup() {
  const [popupState, setPopupState] = useState<boolean>(false);
  const [popupInformationState, setPopupInformationState] =
    useState<boolean>(false);
  const [popupLanguageState, setPopupLanguageState] = useState<boolean>(false);
  const [popupThemeState, setPopupThemeState] = useState<boolean>(false);

  useEffect(() => {
    if (Number(localStorage.getItem("count")) > 1) {
      return;
    }

    localStorage.setItem("count", "1");
    setTimeout(() => {
      setPopupState(true);
    }, 1500);
  }, []);

  const closePopup = () => {
    localStorage.setItem("count", "2");
    setPopupState(false);
  };

  const handlePopupInformation = () => {
    setPopupInformationState(!popupInformationState);
  };

  const handlePopupLanguage = () => {
    setPopupLanguageState(!popupLanguageState);
  };

  const handlePopupTheme = () => {
    setPopupThemeState(!popupThemeState);
  };

  const setAllPopupState =
    popupInformationState ||
    popupState ||
    popupLanguageState ||
    popupThemeState;

  return {
    popupState,
    closePopup,
    handlePopupInformation,
    popupInformationState,
    setAllPopupState,
    popupLanguageState,
    handlePopupLanguage,
    popupThemeState,
    handlePopupTheme,
  };
}
