import { RouterProvider } from "react-router-dom";
import "./App.css";

import Home from "./pages";
import router from "./router";
import AuthProvider from "./context/AuthContext";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer position="top-right" autoClose={500} />
    </AuthProvider>
  );
}

export default App;
