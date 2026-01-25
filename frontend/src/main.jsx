import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ShopContextProvider from "./context/ShopContext";
import { ToastContainer } from 'react-toastify';
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ShopContextProvider>
      <App />
      <ToastContainer 
      position="bottom-right"
      autoClose={3000}
      theme="dark" // Start with dark
    />
    </ShopContextProvider>
  </BrowserRouter>,
);
