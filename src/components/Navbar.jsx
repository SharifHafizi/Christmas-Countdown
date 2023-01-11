import { Link } from "react-router-dom";
import React from "react";
import "./navbar.css";
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="h1">
        <Link to="/" className="link">
          <h1>New year 2024</h1>
        </Link>
      </div>
      <div className="h2">
        <Link to="/about" className="link">
          <h2>About</h2>
        </Link>

        <Link to="/comment" className="link">
          <h2>Comment</h2>
        </Link>
      </div>
    </div>
  );
}
