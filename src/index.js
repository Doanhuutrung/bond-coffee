import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import menu from "./redux/menu";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={menu}>
      <BrowserRouter>
        <ToastContainer
          position="top-left"
          autoClose={5000}
          closeOnClick
          pauseOnHover={false}
          theme="light"
        />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
