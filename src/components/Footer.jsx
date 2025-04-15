// Footer.jsx
import { Link } from "react-router-dom";
import { Instagram, Twitter, MessageCircle } from "lucide-react";
import { t } from "i18next";

const Footer = () => {
  return (
    <footer
      className="bg-[#230b45] text-white pt-10 dark:bg-gray-900 shadow-2xl dark:shadow-lg dark:border-t dark:border-gray-800
    "
    >
      <div className="container mx-auto max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl  2xl:max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        <div>
          <h3 className="text-lg font-bold mb-6 uppercase">
            {t("Shop With Us")}
          </h3>
          <ul className="space-y-2">
            <li>
              <Link reloadDocument to="/" className="hover:underline">
                {t("Home")}
              </Link>
            </li>
            <li>
              <Link reloadDocument to="/auth/login" className="hover:underline">
                {" "}
                {t("Login")}
              </Link>
            </li>
            <li>
              <Link reloadDocument to="/categories" className="hover:underline">
                {t("Categories")}
              </Link>
            </li>
            <li>
              <Link reloadDocument to="/brands" className="hover:underline">
                {t("Brands")}
              </Link>
            </li>
            <li>
              <Link reloadDocument to="/offers" className="hover:underline">
                {t("Offers")}
              </Link>
            </li>
          </ul>
          <div className="mt-6">
            <select className=" border-0 outline-0 text-black p-2">
              <option>English</option>
              <option>Arabic</option>
            </select>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-6 uppercase">
            {t("Let Us Help You")}
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                {t("Delete Account")}
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                {t("FAQ")}
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                {t("Terms and Conditions")}
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                {t("Privacy Policy")}
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                {t("About Us")}
              </a>
            </li>
            <li>
              <Link to="/contact-us" className="hover:underline">
                {t("Contact Us")}
              </Link>
            </li>
            <li>
              <a href="#" className="hover:underline">
                {t("Tracking Order")}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-6 uppercase">
            {t("Subscribe Now")}
          </h3>
          <p className="mb-6">
            {t("Subscribe to our newsletter to get updates, special offers.")}
          </p>
          <div>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder={t("Enter your email address")}
                className="p-2 rounded bg-transparent text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-white w-fit text-gray-900 font-semibold py-2 px-4  hover:bg-gray-200">
                {" "}
                {t("Subscribe")}
              </button>
            </form>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-6 uppercase">{t("Follow Us")}</h3>
          <div className="flex space-x-4 mb-6 gap-2">
            <a
              target="_blank"
              href="https://www.instagram.com/briggekw/"
              className="hover:text-gray-400"
            >
              <Instagram size={24} />
            </a>
            <a
              target="_blank"
              href="https://api.whatsapp.com/send/?phone=%2B96592207174&text=Welcome+to+Brigge%2C+How+we+can+help+you+today%3F&type=phone_number&app_absent=0"
              className="hover:text-gray-400"
            >
              <MessageCircle size={24} />
            </a>
          </div>
          <h3 className="text-lg font-bold mb-6 uppercase">
            {t("Download Now")}
          </h3>
          <div className="flex space-x-4 gap-2">
            <a
              target="_blank"
              href="https://play.google.com/store/apps/details?id=com.gatetechs.kishk&pli=1"
              className="flex items-center bg-white text-gray-900 py-2 px-4 rounded hover:bg-gray-200 gap-1"
            >
              <img
                src="/images/googlePlay.webp"
                alt="apple"
                className="w-6 h-6"
              />
              <span>{t("Play Store")}</span>
            </a>
            <a
              target="_blank"
              href="https://apps.apple.com/us/app/brigge/id6450512325"
              className="flex items-center bg-white text-gray-900 py-2 px-2 gap-1 rounded hover:bg-gray-200"
            >
              <img src="/images/apple.webp" alt="apple" className="w-6 h-6" />
              <span>{t("Apple Store")}</span>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 text-gray-100 text-[13px] bg-[#1f1137] py-6 dark:bg-gray-900 ">
        {t("All Rights Reserved © 2025 Bridge")}
      </div>
    </footer>
  );
};

export default Footer;
