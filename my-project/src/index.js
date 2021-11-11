import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const myName = "Dmitiy";
const message = "Вы хорошо выглядите!!";

ReactDOM.render(
  <React.StrictMode>
    <App name={myName} message={message} />
  </React.StrictMode>,
  document.getElementById("root")
);
