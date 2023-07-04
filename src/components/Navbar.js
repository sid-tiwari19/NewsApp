import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import logo from "./logo192.png";

const Navbar = ({ toggleBgMode, toggleLoadingMode, setFinal }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [bgColor, setBgColor] = useState("#007BFF");
  const [query, setQuery] = useState(null);
  const location = useLocation();

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setFinal(query); // Call setFinal function with the query value
  };

  useEffect(() => {
    if (query === "") setFinal(null);
    // eslint-disable-next-line
  }, [query]);

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
        className="navbar fixed-top navbar-expand-lg "
        style={{
          backgroundColor: bgColor,
          color: "white",
        }}
      >
        <div className="container-fluid">
          <img
            src={logo}
            alt=""
            style={{ height: "50px", margin: "0px 10px" }}
          ></img>
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
                  className={`nav-link ${isActiveLink("/health")}`}
                  style={{ color: "white" }}
                  to="/lifestyle"
                >
                  Lifestyle
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${isActiveLink("/science")}`}
                  style={{ color: "white" }}
                  to="/politics"
                >
                  Politics
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
                  className={`nav-link ${isActiveLink("/technology")}`}
                  style={{ color: "white" }}
                  to="/tech"
                >
                  Science & Tech
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${isActiveLink("/technology")}`}
                  style={{ color: "white" }}
                  to="/world"
                >
                  World
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${isActiveLink("/technology")}`}
                  style={{ color: "white" }}
                  to="/india"
                >
                  India
                </Link>
              </li>
            </ul>
          </div>
          <div className="mx-2" style={{ width: "400px" }}>
            <form
              class="d-flex my-2"
              role="search"
              onSubmit={handleSearch}
              style={{ width: "100%" }}
            >
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                style={
                  darkMode
                    ? {
                        backgroundColor: "#212121",
                        color: "white",
                        width: "min(100%,350px)",
                      }
                    : { width: "min(100%,350px)" }
                }
                aria-label="Search"
              />
              <button
                class={`btn btn-${!darkMode ? "danger" : "primary"}`}
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
          <div className="mx-auto">
            <div className="form-check form-switch mx-2">
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
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
