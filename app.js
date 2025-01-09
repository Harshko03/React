import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://static.vecteezy.com/system/resources/previews/014/798/827/original/hamburger-logos-colorful-burger-logo-for-restaurant-or-cafe-logo-design-template-vector.jpg" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact US</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return <div className="app">
    <Header/>
  </div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
