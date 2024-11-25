import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/styles.css"; // Optional, for your global styles
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
