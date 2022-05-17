import React, { Component } from "react";
import {Link} from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              NewsMonkey
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
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    to="/home"
                    className="btn btn-outline-primary mx-2"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/business"
                    className="btn btn-outline-primary mx-2"
                    aria-current="page"
                  >
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/entertainment"
                    className="btn btn-outline-primary mx-2"
                    aria-current="page"
                  >
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/health"
                    className="btn btn-outline-primary mx-2"
                    aria-current="page"
                  >
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/science"
                    className="btn btn-outline-primary mx-2"
                    aria-current="page"
                  >
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/technology"
                    className="btn btn-outline-primary mx-2"
                    aria-current="page"
                  >
                    Technology
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/sports"
                    className="btn btn-outline-primary mx-2"
                    aria-current="page"
                  >
                    Sports
                  </Link>
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
