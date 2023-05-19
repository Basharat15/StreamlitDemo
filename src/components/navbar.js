import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">
          StreamLit
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul
            className="navbar-nav ml-auto"
            style={{
              marginLeft: "40%",
              width: "60%",
              justifyContent: "space-between",
            }}
          >
            <li className="nav-item">
              <a className="nav-link" href="/about">
                Print
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                Record
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                Settings
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                Report
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Help
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                About Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
