import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  const activeTag = (e) => {
    document.querySelector(".active").classList.remove("active");
    console.log(e.target.classList.toggle("active"));
  };

  return (
    <nav>
      <div className="nav-left">Microsoft</div>
      <div className="nav-right">
        <ul className="nav-list">
          <Link to="/home">
            <li onClick={(e) => activeTag(e)} className="nav-item active">
              Home
            </li>
          </Link>
          <Link to="/team">
            <li onClick={(e) => activeTag(e)} className="nav-item">
              Team
            </li>
          </Link>
          <Link to="/blogs">
            <li onClick={(e) => activeTag(e)} className="nav-item">
              Blogs
            </li>
          </Link>
          <Link to="/events">
            <li onClick={(e) => activeTag(e)} className="nav-item">
              Events
            </li>
          </Link>
          <Link to="/about">
            <li onClick={(e) => activeTag(e)} className="nav-item">
              About
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
