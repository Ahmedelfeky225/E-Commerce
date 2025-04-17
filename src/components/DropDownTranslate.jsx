import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const DropDownTranslate = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const { i18n } = useTranslation();

  useEffect(() => {
    setSelectedLanguage(i18n.language === "en" ? "ُEnglish" : "العربية");
  }, [i18n.language]);
  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang) {
      i18n.changeLanguage(savedLang);
      document.dir = i18n.dir(savedLang);
    }
  }, []);
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    console.log("Changing language to:", lang);
    document.dir = i18n.dir(lang);
    localStorage.setItem("lang", lang);
  };
  return (
    <div className="mt-[2px]">
      <div className="dropdown dropdown-center  rtl:dropdown-start ">
        <div
          tabIndex={0}
          role="button"
          className="flex items-center gap-1 uppercase text-sm font-medium cursor-pointer "
        >
          {selectedLanguage}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        <ul
          tabIndex={0}
          className="dropdown-content relative mt-3 rtl:right-10 right-4  border w-28  bg-[#fff5f5] shadow-xl dark:bg-gray-800 dark:text-white dark:border-none text-black text-sm z-50"
        >
          <li
            className="cursor-pointer w-full hover:bg-gray-100 px-2 dark:hover:bg-gray-700 transition pb-1 pt-2 "
            onClick={() => changeLanguage("en")}
          >
            <span className="px-2 rounded">English</span>
          </li>
          <li
            className="cursor-pointer w-full hover:bg-gray-100 px-2 dark:hover:bg-gray-700 transition pt-1 pb-2"
            onClick={() => changeLanguage("ar")}
          >
            <span className="px-2  rounded ">العربية</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DropDownTranslate;
