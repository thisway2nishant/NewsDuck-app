import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              NewsMonkey
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
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    href="/"
                    className="btn btn-outline-primary mx-2"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="/"
                    className="btn btn-outline-primary mx-2"
                    aria-current="page"
                  >
                    Business
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="/"
                    className="btn btn-outline-primary mx-2"
                    aria-current="page"
                  >
                    Entertainment
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="/"
                    className="btn btn-outline-primary mx-2"
                    aria-current="page"
                  >
                    Health
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="/"
                    className="btn btn-outline-primary mx-2"
                    aria-current="page"
                  >
                    Science
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="/"
                    className="btn btn-outline-primary mx-2"
                    aria-current="page"
                  >
                    Technology
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="/"
                    className="btn btn-outline-primary mx-2"
                    aria-current="page"
                  >
                    Sports
                  </a>
                </li>
              </ul>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
