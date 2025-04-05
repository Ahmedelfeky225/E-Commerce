// Footer.jsx
import {
    Instagram,
    Twitter,
  } from "lucide-react";
  
  const Footer = () => {
    return (
      <footer className="bg-[#230b45] text-white pt-10">
        <div className="container mx-auto max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl  2xl:max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
          {/* Shop With Us */}
          <div>
            <h3 className="text-lg font-bold mb-6 uppercase">Shop With Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Login
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Categories
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Brands
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Offers
                </a>
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
            <h3 className="text-lg font-bold mb-6 uppercase">Let Us Help You</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Delete Account
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Tracking Order
                </a>
              </li>
            </ul>
          </div>
  
          <div>
            <h3 className="text-lg font-bold mb-6 uppercase">Subscribe Now</h3>
            <p className="mb-6">
              Subscribe to our newsletter to get updates, special offers.
            </p>
            <div >
              <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="p-2 rounded bg-transparent text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-white w-fit text-gray-900 font-semibold py-2 px-4  hover:bg-gray-200">
                Subscribe
              </button>
              </form>
            </div>
          </div>
  
          <div>
            <h3 className="text-lg font-bold mb-6 uppercase">Follow Us</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="hover:text-gray-400">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-gray-400">
                <Twitter size={24} />
              </a>
            </div>
            <h3 className="text-lg font-bold mb-6 uppercase">Download Now</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="flex items-center bg-white text-gray-900 py-2 px-4 rounded hover:bg-gray-200"
              >
                <img src="/images/googlePlay.webp" alt="apple" className="w-6 h-6" />
                Play Store
              </a>
              <a
                href="#"
                className="flex items-center bg-white text-gray-900 py-2 px-2 gap-2 rounded hover:bg-gray-200"
              >
                <img src="/images/apple.webp" alt="apple" className="w-6 h-6" />
                Apple Store
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 text-gray-100 text-[13px] bg-[#1f1137] py-6">
          All Rights Reserved © 2025 Bridge
        </div>
      </footer>
    );
  };
  
  export default Footer;