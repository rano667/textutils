import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    // `Template litterals`
    <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
      <div className="container-fluid">
        <a
          className="navbar-brand"
          href="#"
          style={{
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="#"
                style={{
                  color: props.mode === "dark" ? "white" : "black",
                }}
              >
                Home
              </a>
            </li>
            {/* <li className="nav-item">
              <a
                className="nav-link"
                href="/about"
                style={{
                  color: props.mode === "dark" ? "white" : "black",
                }}
              >
                About
              </a>
            </li> */}
          </ul>

          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button type="button" class="btn btn-primary">
              Search
            </button>
          </form> */}
          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "grey" : "light"
            } `}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}
// specify the props type
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};

// specify the default Props
Navbar.defaultProps = {
  title: "Set Title Here",
  aboutText: "About text here",
};
