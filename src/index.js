import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./containers/App.js";
import reportWebVitals from "./reportWebVitals";
import "tachyons"; // tachyons are prebuilt styles that we can use - we installed this package using npm install tachyons

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
