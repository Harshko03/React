import React from "react";
import ReactDOM from "react-dom/client";


const Title = () => (
<h1 id="heading">This is title component</h1>
);
// component composition
const HeadingComponent = () => (
  <div id="container">
    <Title />
<h1 id="heading">Hello Harsh This is react functional component</h1>
</div>
);



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
