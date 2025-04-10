import {
  CircleUserRound,
  LogOut,
  Menu,
  Search,
  ShoppingBag,
  User,
} from "lucide-react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import SearchPage from "../pages/SearchPage";
import { useSelector } from "react-redux";
import { bagSelector } from "../app/features/bag/BagSlice";
import Drawer from "../components/Drawer";
import { useAuth } from "../context/AuthContext";
import Button from "../components/ui/Button";
import { toast } from "react-toastify";

const Navbar = () => {
  const [openSearchPage, setOpenSearchPage] = useState(null);
  const [drawer, setDrawer] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(false); // حالة التحميل

  const { bagItems } = useSelector(bagSelector);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

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

  return (
    <>
      <nav className="shadow-sm bg-white py-[15px] fixed left-0 right-0 z-50 px-3">
        <div className="flex items-center justify-between container mx-auto max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl my-2">
          <NavLink to="/" reloadDocument>
            <img src="/images/logo.webp" alt="Logo" className="w-[100px]" />
          </NavLink>

          <ul className="hidden md-max:flex gap-5">
            <li>
              <NavLink
                to="/"
                className="text-gray-600 hover:text-purple-800 transition-colors"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/categories"
                className="text-gray-600 hover:text-purple-800 transition-colors"
              >
                Categories
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/brands"
                className="text-gray-600 hover:text-purple-800 transition-colors"
              >
                Brands
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/offers"
                className="text-gray-600 hover:text-purple-800 transition-colors"
              >
                Offers
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact-us"
                className="text-gray-600 hover:text-purple-800 transition-colors"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>

          <ul className="flex items-center gap-4">
            <li>
              <select className="border-0 outline-0 text-black p-2 focus:ring-2 focus:ring-purple-800 focus:ring-opacity-50">
                <option>English</option>
                <option>Arabic</option>
              </select>
            </li>
            <button
              onClick={() => setOpenSearchPage(true)}
              className="text-gray-600 hover:text-purple-800"
            >
              <Search size={20} />
            </button>
            <li className="relative cursor-pointer">
              <ShoppingBag
                onClick={() => setDrawer(true)}
                className="text-gray-600 hover:text-purple-800"
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
                      className="text-gray-600 hover:text-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-800 focus:ring-opacity-50"
                    >
                      <User />
                    </button>
                    {isDropdownOpen && (
                      <div className="absolute right-0  w-48 bg-white shadow-lg rounded-md py-2 z-10">
                        <div className="px-4 py-2 text-sm text-gray-700 border-b">
                          <p className="truncate" title={currentUser.email}>
                            {truncateEmail(currentUser.email)}
                          </p>
                        </div>
                        <Button
                          onClick={handleLogout}
                          disabled={loading}
                          className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 disabled:opacity-50"
                        >
                          {loading ? "Logging out..." : "Log out"}
                        </Button>
                      </div>
                    )}
                  </>
                ) : (
                  <NavLink
                    reloadDocument
                    to="/auth/login"
                    className="text-gray-600 hover:text-purple-800"
                  >
                    <CircleUserRound />
                  </NavLink>
                )}
              </div>
            </li>
          </ul>
        </div>
      </nav>

      {/*Navigation in small screen */}
      <div className="fixed bottom-3 left-3 right-3 bg-white shadow-lg px-6 py-3 flex items-center justify-between z-50 rounded-full sm-max:max-w-[300px] sm-max:mx-auto md-max:hidden">
        <NavLink to="/" className="font-extrabold text-2xl">
          B
        </NavLink>
        <NavLink to="/categories">
          <Menu className="text-gray-600 hover:text-purple-800" />
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
            className="text-gray-600 hover:text-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-800 focus:ring-opacity-50 disabled:opacity-50"
          >
            <LogOut />
          </button>
        ) : (
          <NavLink
            to="/auth/login"
            className="text-gray-600 hover:text-purple-800"
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
