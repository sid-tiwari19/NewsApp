import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

const Navbar = ({ toggleBgMode, toggleLoadingMode, lang1, lang2, setLang }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [bgColor, setBgColor] = useState("#007BFF");
  const location = useLocation();

  const toggleDarkMode = () => {
    if (darkMode) {
      setDarkMode(false);
      toggleLoadingMode("red");
      toggleBgMode("White");
      setBgColor("#007BFF");
    } else {
      setDarkMode(true);
      toggleLoadingMode("#007BFF");
      toggleBgMode("Dark");
      setBgColor("red");
    }
  };
  const isActiveLink = (path) => {
    return location.pathname === path ? "active" : "";
  };
  return (
    <div>
      <nav
        className="navbar fixed-top navbar-expand-lg"
        style={{ backgroundColor: bgColor, color: "white" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" style={{ color: "white" }} to="/">
            Riyal Neus
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${isActiveLink("/")}`}
                  style={{ color: "white" }}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${isActiveLink("/about")}`}
                  style={{ color: "white" }}
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${isActiveLink("/business")}`}
                  style={{ color: "white" }}
                  to="/business"
                >
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${isActiveLink("/entertainment")}`}
                  style={{ color: "white" }}
                  to="/entertainment"
                >
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${isActiveLink("/world")}`}
                  style={{ color: "white" }}
                  to="/world"
                >
                  World
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${isActiveLink("/beauty")}`}
                  style={{ color: "white" }}
                  to="/beauty"
                >
                  Beauty{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${isActiveLink("/science")}`}
                  style={{ color: "white" }}
                  to="/science"
                >
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${isActiveLink("/sport")}`}
                  style={{ color: "white" }}
                  to="/sport"
                >
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${isActiveLink("/tech")}`}
                  style={{ color: "white" }}
                  to="/tech"
                >
                  Technology
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${isActiveLink("/finance")}`}
                  style={{ color: "white" }}
                  to="/finance"
                >
                  Finance
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${isActiveLink("/politics")}`}
                  style={{ color: "white" }}
                  to="/politics"
                >
                  Politics
                </Link>
              </li>
            </ul>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              checked={darkMode}
              onChange={toggleDarkMode}
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              <i
                className="bi bi-moon-stars-fill"
                style={{ padding: "0px 5px" }}
              ></i>
            </label>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
