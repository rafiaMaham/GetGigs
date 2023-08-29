import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  });

  return (
    <div className={active ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          {/* <Link to="/"> */}
          <span className="text">GetGigs</span>
          {/* </Link> */}
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>GetGigs Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign In</span>
          <span>Become a seller</span>
          <button>Join</button>
        </div>
      </div>

      {active && (
        <>
          <hr />
          <div className="menu">
            <li>test1</li>
            <li>test1</li>
          </div>
        </>
      )}

      {/* <Link className="link menuLink" to="/">
          Graphics & Design
        </Link>
        <Link className="link menuLink" to="/">
          Video & Animation
        </Link>
        <Link className="link menuLink" to="/">
          Writing & Translation
        </Link>
        <Link className="link menuLink" to="/">
          AI Services
        </Link>
        <Link className="link menuLink" to="/">
          Digital Marketing
        </Link>
        <Link className="link menuLink" to="/">
          Music & Audio
        </Link>
        <Link className="link menuLink" to="/">
          Programming & Tech
        </Link>
        <Link className="link menuLink" to="/">
          Business
        </Link>
        <Link className="link menuLink" to="/">
          Lifestyle
        </Link> */}
    </div>
  );
};

export default Navbar;