import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "heading" }, "Hello Harsh");
const root = ReactDOM.createRoot(document.getElementById("root"));

const jsxheading = (
  <h1 id="heading" tabIndex="5">
    Hello Harsh using jsx
  </h1>
);

const HeadingComponent = () =>(
<h1 id="heading">Hello Harsh This is react functional component</h1>
);



root.render(<HeadingComponent />);
