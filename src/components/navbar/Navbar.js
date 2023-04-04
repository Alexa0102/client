import React, { useState } from "react";
import DUMMY_DATA from "../../util/dummyData";

import { NavLink } from "react-router-dom";
import SearchBar from "../search/Search";

import "./NavbarStyles.css";

function Navbar() {
  // const handleNav = () => setNav(!nav)

  return (
    <nav className="navbar">
      <div className="logo">
        <NavLink to="/home" style={{ textDecoration: "none" }}>
          <h2>SECOND CHANCE.</h2>
        </NavLink>
      </div>

      <ul className="nav-menu">
        <NavLink activeClassName="active" to="/home">
          Home
        </NavLink>
        <NavLink activeClassName="active" to="/catalog">
          Catalog
        </NavLink>
        <NavLink activeClassName="active" to="/brands">
          Brands
        </NavLink>
        <SearchBar data={DUMMY_DATA} />    
      </ul>
    </nav>
  );
}

export default Navbar;
