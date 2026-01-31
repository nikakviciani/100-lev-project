import React, { useState } from "react";
import "./index.css";

export default function Navbar({ isLoggedIn, setPage, handleLogout }) {
  const [isOpen, setIsOpen] = useState(false);

  const goTo = (page) => {
    setPage(page);
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      {/* LOGO */}
      <div className="nav-left" onClick={() => goTo("home")}>
        <img
          src="src\assets\image.png"
          alt="Goal-Oriented Academy"
          className="logo"
        />
        
      </div>

      {/* HAMBURGER */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* NAV LINKS */}
      <div className={`nav-right ${isOpen ? "open" : ""}`}>
        <a onClick={() => goTo("about")} className="nav-link">About</a>
        <a onClick={() => goTo("mma")} className="nav-link">MMA</a>
        <a onClick={() => goTo("courses")} className="nav-link">Courses</a>
        

        {isLoggedIn ? (
          <a className="logout-btn" onClick={handleLogout}>
            Log Out
          </a>
        ) : (
          <>
            <a onClick={() => goTo("login")} className="nav-link">Login</a>
            <a onClick={() => goTo("register")} className="nav-link">Register</a>
          </>
        )}
      </div>
    </nav>
  );
}
