import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://static.vecteezy.com/system/resources/previews/014/798/827/original/hamburger-logos-colorful-burger-logo-for-restaurant-or-cafe-logo-design-template-vector.jpg"
        />
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

const RestaurantCard= ()=>{
return (
  <div className="res-card">
<h3>Burger Headquater</h3>
  </div>
)

};

const Body = () => {
  return(
  <div className="body">
    <div className="search">Search</div>
      <div className="res-container">
       <RestaurantCard/>
      </div>
    
  </div>
  )
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header/>
      <Body/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
