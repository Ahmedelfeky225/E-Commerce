import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "../pages/Layout";

import CategoriesPage from "../pages/Categories";
import HomePage from "../pages";
import BrandsPage from "../pages/Brands";
import OffersPage from "../pages/Offers";
import ContactPage from "../pages/Contact";
import LoginPage from "../pages/Login";
import PageNotFound from "../pages/PageNotFound";
import ProductDetails from "../pages/ProductDetails"; // استيراد صفحة تفاصيل المنتج
import ErrorHandler from "../components/errors/ErrorHandler";
import RegisterPage from "../pages/Register";
import SearchPage from "../pages/SearchPage";
import AuthProvider from "../context/AuthContext";
import ForgotPasswordPage from "../pages/ForgotPassword";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Root Layout */}
      <Route path="/" element={<RootLayout />} errorElement={<ErrorHandler />}>
        <Route index element={<HomePage />} />
        <Route path="categories" element={<CategoriesPage />} />
        <Route path="brands" element={<BrandsPage />} />
        <Route path="offers" element={<OffersPage />} />
        <Route path="contact-us" element={<ContactPage />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/register" element={<RegisterPage />} />
        <Route path="/auth/forgot-password" element={<ForgotPasswordPage />} />
        {/* إضافة مسار تفاصيل المنتج */}
        <Route path="product/:id" element={<ProductDetails />} />
      </Route>
      {/* Root Layout */}

      {/* Page Not Found */}
      <Route path="*" element={<PageNotFound />} />
      {/* Page Not Found */}
    </>
  )
);

export default router;
