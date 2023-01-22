import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <React.Fragment>
      <div className="navbar">
        <div className="nav-links/top">
          <i className="fa-sharp fa-solid fa-lock icon text-success"></i>
          <i class="fa-solid fa-bars icon"></i>
          <div className="exit-icon bg-dark">
            <Link to={"/content-frame"}>
              <i className="fa-solid fa-house-chimney-window text-white fs-4"></i>
            </Link>
          </div>
          <Link to={"/bag-details"}>
            <i className="fa-solid fa-bag-shopping icon mt-5"></i>
          </Link>
        </div>
        <div className="nav-links/bottom ">
          <div className="exit-icon">
            <i className="fa-sharp fa-solid fa-right-from-bracket text-white fs-4"></i>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
