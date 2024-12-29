
import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1",{id:"heading"}, "Hello Harsh");
const root = ReactDOM.createRoot(document.getElementById("root"));

const jsxheading = <h1 id="heading">Hello Harsh using jsx</h1>

root.render(jsxheading);
