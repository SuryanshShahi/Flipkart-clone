import React from "react";
import { NavLink } from "react-router-dom";
import web from "../images/plus.png";
import web1 from "../images/flipkart.png";

function Navbar() {
  return (
    <section id="navbar">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container px-5">
          <NavLink className="navbar-brand text-white pl-5" to="/">
            <img src={web1} className="img-fluid flipkart" alt="menupic"></img>
            <div className="logo">
              <h7>
                Explore{" "}
                <span className="text-warning">
                  <b>Plus</b>{" "}
                </span>
              </h7>
              <img src={web} className="img-fluid plus" alt="menupic"></img>
            </div>
          </NavLink>
          <form className="w-100 justify-content-end searchbox align-content-center d-flex">
            <input
              className="border-0 w-100 shadow-sm pl-3 position-relative"
              type="search"
              placeholder="Search for Products, brands and more"
              aria-label="Search"
            />
            <div className="fa fa-search text-info position-absolute fa-lg mt-2 mx-3"></div>
          </form>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item align-items-center d-flex ml-5">
                <NavLink
                  className="nav-link active bg-white px-4 py-1 shadow-sm"
                  aria-current="page"
                  to="/"
                >
                  <span className="px-3 text-primary font-weight-bold">
                    Login
                  </span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-white font-weight-bold mx-4"
                  to="/"
                >
                  More
                </NavLink>
              </li>
              <li className="nav-item align-items-center d-flex">
                <NavLink
                  className="nav-link text-white fa fa-shopping-cart fa-lg"
                  to="/"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  &nbsp;
                  <b className="" style={{ fontSize: "17px" }}>
                    Cart
                  </b>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    
     
      </section>
  );
}
export default Navbar;
