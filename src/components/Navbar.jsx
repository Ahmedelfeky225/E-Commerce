import {
  AlignJustify,
  CircleUserRound,
  LogOut,
  Menu,
  Moon,
  Percent,
  Search,
  ShoppingBag,
  Sun,
  User,
} from "lucide-react";
import { useState, useEffect } from "react"; // أضفنا useEffect
import { NavLink, useNavigate } from "react-router-dom";
import SearchPage from "../pages/SearchPage";
import { useSelector } from "react-redux";
import { bagSelector } from "../app/features/bag/bagSlice";
import Drawer from "../components/Drawer";
import { useAuth } from "../context/AuthContext";
import Button from "../components/ui/Button";
import { toast } from "react-toastify";

import { t } from "i18next";
import DropDownTranslate from "./DropDownTranslate";

const Navbar = () => {
  const [openSearchPage, setOpenSearchPage] = useState(null);
  const [drawer, setDrawer] = useState(false);

  const [loading, setLoading] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { bagItems } = useSelector(bagSelector);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setIsDarkMode(prefersDark);
      if (prefersDark) {
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  const truncateEmail = (email) => {
    if (email && email.length > 20) {
      return `${email.substring(0, 17)}...`;
    }
    return email;
  };

  const handleLogout = async () => {
    setLoading(true);
    try {
      await logout();
      toast.success("Logged out successfully");
      setTimeout(() => {
        navigate("/auth/login");
      }, 1000);
    } catch (err) {
      toast.error(err || "Failed to log out");
    }
    setLoading(false);
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      document.documentElement.classList.toggle("dark");
      return newMode;
    });
  };

  return (
    <>
      <nav className="shadow-sm bg-[#ffffff] dark:bg-gray-900 dark:border-gray-800 dark:border-b dark:text-white py-[15px] fixed left-0 right-0 z-50 px-3">
        <div className="flex items-center justify-between container mx-auto max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl my-2">
          <NavLink to="/" reloadDocument className="">
            <img
              src="/images/logo.webp"
              alt="Logo"
              className="md:w-[100px] w-[70px]"
            />
          </NavLink>

          <ul className="hidden md-max:flex gap-7">
            <li>
              <NavLink
                reloadDocument
                to="/"
                className="text-gray-600 hover:text-purple-800 transition-colors dark:text-[#ccc]"
              >
                {t("Home")}
              </NavLink>
            </li>
            <li>
              <NavLink
                reloadDocument
                to="/categories"
                className="text-gray-600 hover:text-purple-800 transition-colors dark:text-[#ccc]"
              >
                {t("Categories")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/brands"
                className="text-gray-600 hover:text-purple-800 transition-colors dark:text-[#ccc]"
              >
                {t("Brands")}
              </NavLink>
            </li>
            <li>
              <NavLink
                reloadDocument
                to="/offers"
                className="text-gray-600 hover:text-purple-800 transition-colors dark:text-[#ccc]"
              >
                {t("Offers")}
              </NavLink>
            </li>
            <li>
              <NavLink
                reloadDocument
                to="/contact-us"
                className="text-gray-600 hover:text-purple-800 transition-colors dark:text-[#ccc]"
              >
                {t("Contact Us")}
              </NavLink>
            </li>
          </ul>

          <ul className="flex items-center sm:gap-5 gap-3  ">
            <DropDownTranslate />

            <button
              onClick={() => setOpenSearchPage(true)}
              className="text-gray-600 hover:text-purple-800 dark:text-[#ccc]"
            >
              <Search size={20} />
            </button>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              {isDarkMode ? (
                <Sun size={20} className="text-yellow-500" />
              ) : (
                <Moon size={20} className="text-gray-800 dark:text-gray-200" />
              )}
            </button>
            <li className="relative cursor-pointer">
              <ShoppingBag
                onClick={() => setDrawer(true)}
                className="text-gray-600 hover:text-purple-800 dark:text-white"
              />
              <span className="bg-[#1f1137] w-5 h-5 absolute -right-[10px] -top-[10px] rounded-full text-center text-sm text-white">
                {bagItems.length}
              </span>
            </li>

            <li className="relative">
              <div className="dropdown dropdown-end">
                {currentUser ? (
                  <>
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn btn-ghost btn-circle avatar duration-200"
                    >
                      <img
                        src="https://www.gravatar.com/avatar/?d=mp"
                        alt="Default Avatar"
                        className=" w-[30px] h-[30px] sm:w-10 sm:h-10 rounded-full"
                      />
                    </div>

                    <ul
                      tabIndex={0}
                      className="menu menu-sm lg:rtl:left-[7px] rtl:left-[6px] rounded-sm px-0 pb-0 pt-0 dropdown-content dropdown-contentt mt-5 z-50  shadow bg-white dark:bg-gray-800  w-44"
                    >
                      <li className="border-b border-gray-200 dark:border-gray-700">
                        <p
                          className="text-sm truncate px-3 py-3  "
                          title={currentUser.email}
                        >
                          {truncateEmail(currentUser.email)}
                        </p>
                      </li>
                      <li>
                        <button
                          onClick={handleLogout}
                          disabled={loading}
                          className="w-full text-left text-sm px-3 py-3 dark:text-white hover:bg-gray-100  dark:hover:bg-gray-700 disabled:opacity-50"
                        >
                          {loading ? t("Logging out...") : t("Log out")}
                        </button>
                      </li>
                    </ul>
                  </>
                ) : (
                  <NavLink
                    to="/auth/login"
                    className="text-gray-600 hover:text-purple-800 dark:text-white"
                  >
                    <CircleUserRound />
                  </NavLink>
                )}
              </div>
            </li>
          </ul>
        </div>
      </nav>

      {/* Navigation in small screen */}
      <div className="fixed bottom-3 left-3 right-3 bg-white shadow-lg px-6 py-3 flex items-center justify-between z-50 rounded-full sm-max:max-w-[300px] sm-max:mx-auto md-max:hidden dark:bg-gray-800">
        <NavLink
          to="/"
          className="font-extrabold text-2xl text-gray-600 dark:text-white"
          title="Home"
        >
          B
        </NavLink>
        <NavLink to="/categories" title="categories">
          <AlignJustify className="text-gray-600 hover:text-purple-800 dark:text-white" />
        </NavLink>
        <NavLink to="/offers" title="offers">
          <Percent className="text-gray-600 hover:text-purple-800 dark:text-white" />
        </NavLink>
        <NavLink to="/brands" title="brands">
          <img
            src="/images/hanger-light.png"
            className="w-[24px] dark:hidden"
            alt="Light hanger icon"
          />
          <img
            src="/images/hanger-dark.png"
            className="w-[24px] dark:block hidden"
            alt="Dark hanger icon"
          />
        </NavLink>
        {currentUser ? (
          <button
            onClick={handleLogout}
            disabled={loading}
            className="text-gray-600 hover:text-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-800 focus:ring-opacity-50 disabled:opacity-50 dark:text-white"
          >
            <LogOut />
          </button>
        ) : (
          <NavLink
            to="/auth/login"
            className="text-gray-600 hover:text-purple-800 dark:text-white"
          >
            <CircleUserRound />
          </NavLink>
        )}
      </div>

      {openSearchPage && <SearchPage setOpenSearchPage={setOpenSearchPage} />}
      {drawer && (
        <Drawer setDrawer={setDrawer} onClose={() => setDrawer(false)} />
      )}
    </>
  );
};

export default Navbar;
