import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";

const RootLayout = () => {
  const { i18n } = useTranslation();

  return (
    <div
      className="dark:bg-gray-900 dark:text-white min-h-screen bg-white transition-colors duration-300"
      key={i18n.language}
    >
      <Navbar />
      <div className="py-5 px-2">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
