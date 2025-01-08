import React from "react";
import ReactDOM from "react-dom/client";

// Now we will use javascript in jsx and component and react elem in each other
const number = 1000;
const elem = (
  <h1>This is elem</h1>
);
const Title = () => (
  
<h2>{number}</h2>
);

const HeadingComponent = () => (
  <div id="container">
    {elem}
  <Title></Title>
    <Title />
    {Title()}
<h1 id="heading">Hello Harsh This is react functional component</h1>
</div>
);



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
