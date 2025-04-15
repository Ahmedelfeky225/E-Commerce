import {
  CircleUserRound,
  LogOut,
  Menu,
  Moon,
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

import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [openSearchPage, setOpenSearchPage] = useState(null);
  const [drawer, setDrawer] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); // الحالة الأساسية
  const { bagItems } = useSelector(bagSelector);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

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

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    console.log("Changing language to:", lang); // تأكد من أن اللغة تتغير بشكل صحيح

    document.dir = lang === "ar" ? "rtl" : "ltr";
  };
  return (
    <>
      <nav className="shadow-sm bg-white dark:bg-gray-900 dark:border-gray-800 dark:border-b dark:text-white py-[15px] fixed left-0 right-0 z-50 px-3">
        <div className="flex items-center justify-between container mx-auto max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl my-2">
          <NavLink to="/" reloadDocument className="">
            <img src="/images/logo.webp" alt="Logo" className="w-[100px]" />
          </NavLink>

          <ul className="hidden md-max:flex gap-5">
            <li>
              <NavLink
                reloadDocument
                to="/"
                className="text-gray-600 hover:text-purple-800 transition-colors dark:text-white"
              >
                {t("Home")}
              </NavLink>
            </li>
            <li>
              <NavLink
                reloadDocument
                to="/categories"
                className="text-gray-600 hover:text-purple-800 transition-colors dark:text-white"
              >
                {t("Categories")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/brands"
                className="text-gray-600 hover:text-purple-800 transition-colors dark:text-white"
              >
                {t("Brands")}
              </NavLink>
            </li>
            <li>
              <NavLink
                reloadDocument
                to="/offers"
                className="text-gray-600 hover:text-purple-800 transition-colors dark:text-white"
              >
                {t("Offers")}
              </NavLink>
            </li>
            <li>
              <NavLink
                reloadDocument
                to="/contact-us"
                className="text-gray-600 hover:text-purple-800 transition-colors dark:text-white"
              >
                {t("Contact Us")}
              </NavLink>
            </li>
          </ul>

          <ul className="flex items-center gap-4">
            <li>
              <select
                onChange={(e) => changeLanguage(e.target.value)}
                className="border-0 outline-0 text-black p-2 focus:ring-2 focus:ring-purple-800 focus:ring-opacity-50 dark:bg-gray-700 dark:text-white"
              >
                <option value="en">English</option>
                <option value="ar">Arabic</option>
              </select>
            </li>
            <button
              onClick={() => setOpenSearchPage(true)}
              className="text-gray-600 hover:text-purple-800 dark:text-white"
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
              <div>
                {currentUser ? (
                  <>
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="text-gray-600 hover:text-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-800 focus:ring-opacity-50 dark:text-white"
                    >
                      <User />
                    </button>
                    {isDropdownOpen && (
                      <div className="absolute right-0 w-48 bg-white shadow-lg rounded-md py-2 z-10 dark:bg-gray-800 dark:text-white">
                        <div className="px-4 py-2 text-sm text-gray-700 border-b dark:text-gray-200">
                          <p className="truncate" title={currentUser.email}>
                            {truncateEmail(currentUser.email)}
                          </p>
                        </div>
                        <Button
                          onClick={handleLogout}
                          disabled={loading}
                          className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 disabled:opacity-50 dark:hover:bg-gray-700 dark:text-white"
                        >
                          {loading ? "Logging out..." : t("Log out")}
                        </Button>
                      </div>
                    )}
                  </>
                ) : (
                  <NavLink
                    reloadDocument
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
        >
          B
        </NavLink>
        <NavLink to="/categories">
          <Menu className="text-gray-600 hover:text-purple-800 dark:text-white" />
        </NavLink>
        <NavLink to="/offers">
          <img src="/images/tag price.png" alt="Offers" className="w-6 h-6" />
        </NavLink>
        <NavLink to="/brands">
          <img src="/images/cloakroom.png" alt="Brands" className="w-6 h-6" />
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
      {drawer && <Drawer onClose={() => setDrawer(false)} />}
    </>
  );
};

export default Navbar;
