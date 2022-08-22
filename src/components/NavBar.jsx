import { Link, NavLink} from "react-router-dom";
import {useEffect, useRef, useState} from 'react'


const NavBar = () => {
  


  return (
    <>
     <div className="container-navbar ">
      <nav className="navBar container">
        <Link to="/" className="home1">
          <img
            className="logo"
            src="/assets/logo.png"
            alt="logo 2nd Street Station"
          />
        </Link>

        <div className="container--icon__menu">
          <label className="icon-menu" htmlFor="menu">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </label>

          <input id="menu" type="checkbox" className="menu hidden" />

          <div className="container-links text-white">
          <NavLink to="/" className={({ isActive }) => (isActive ? "link-active" : "link")}>
              Home
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) => (isActive ? "link-active" : "link")}
            >
              Services
            </NavLink>
            <NavLink
              to="/menu"
              className={({ isActive }) => (isActive ? "link-active" : "link")}
            >
              Menu
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "link-active" : "link")}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "link-active" : "link")}
            >
              Contact
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
    
    </>
  );
};

export default NavBar;
