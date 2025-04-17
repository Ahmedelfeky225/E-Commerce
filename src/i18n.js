import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEn from "./locales/en.json";
import translationAR from "./locales/ar.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationEn },

    ar: {
      translation: translationAR,
    },
  },
  lng: localStorage.getItem("lang") || "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
