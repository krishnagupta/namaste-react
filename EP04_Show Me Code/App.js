/**
 * Header
 * - Logo
 * - NavItems
 * Body
 * - Search
 * - Restro container
 * - Restro card
 * Footer
 * - link
 * - copyright
 * - address
 * - contact
 */

import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src="https://content.jdmagicbox.com/comp/hyderabad/s4/040pxx40.xx40.191231191910.c1s4/catalogue/kritunga-restaurant-hyderabad-restaurants-0gwchguxva.jpg"
      />
      <h3>Meghana Foods</h3>
      <h4>Biryani, North Indian, Asian </h4>
      <h4>4.3 star</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard res-name="Biryani Zone" />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
