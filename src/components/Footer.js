import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

function Footer() {
  return (
    <section id="footer">
      <footer className="text-white">
        <div className="container-fluid pt-3 px-5">
          <div className="row pt-3 px-3 pb-2">
            <div className="col-8">
              <div className="row">
                <div className="col-3">
                  <span style={{ color: "#878787" }}>ABOUT</span>
                  <ul className="list-unstyled mt-2">
                    <li>Contact Us</li>
                    <li>About Us</li>
                    <li>Careers Us</li>
                    <li>Flipkart Stories</li>
                    <li>Press</li>
                    <li>Flipkart Wholesale</li>
                    <li>Corporate Information</li>
                  </ul>
                </div>
                <div className="col-3">
                  <span style={{ color: "#878787" }}>HELP</span>
                  <ul className="list-unstyled mt-2">
                    <li>Payments</li>
                    <li>Shipping</li>
                    <li>Cancellation & Returns</li>
                    <li>FAQ</li>
                    <li>Report Infringement</li>
                  </ul>
                </div>
                <div className="col-3">
                  <span style={{ color: "#878787" }}>POLICY</span>
                  <ul className="list-unstyled mt-2">
                    <li>Return Policy</li>
                    <li>Terms Of Use</li>
                    <li>Security</li>
                    <li>Privacy</li>
                    <li>Sitemap</li>
                    <li>EPR Compliance</li>
                  </ul>
                </div>
                <div className="col-3">
                  <span style={{ color: "#878787" }}>SOCIAL</span>
                  <ul className="list-unstyled mt-2">
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>YouTube</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="row">
                <div className="col-6">
                  <span style={{ color: "#878787" }}>Mail Us:</span>
                  <p className="mt-2">
                    <p>Flipkart Internet Private Limited,</p>

                    <p>Buildings Alyssa, Begonia &</p>

                    <p>Clove Embassy Tech Village,</p>

                    <p>Outer Ring Road, Devarabeesanahalli Village,</p>

                    <p>Bengaluru, 560103,</p>

                    <p>Karnataka, India</p>
                  </p>
                </div>
                <div className="col-6">
                  <span style={{ color: "#878787" }}>
                    Registered Office Address:
                  </span>
                  <div className="mt-2">
                    <p>Flipkart Internet Private Limited,</p>

                    <p>Buildings Alyssa, Begonia &</p>

                    <p>Clove Embassy Tech Village,</p>

                    <p>Outer Ring Road, Devarabeesanahalli Village,</p>

                    <p>Bengaluru, 560103,</p>

                    <p>Karnataka, India</p>

                    <p>CIN : U51109KA2012PTC066107</p>

                    <p>
                      Telephone:{" "}
                      <a
                        href="tel:18002029898"
                        className="text-primary font-weight-bold"
                      >
                        1800 202 9898
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="container-fluid px-5 py-2">
          <div className="row pb-3 px-4">
            <div className="col-8">
              <div className="row">
                <div className="col">
                  <div className="fa fa-briefcase mx-3 text-warning">
                    <span className="text-white" style={{fontSize:"14px", fontFamily:"Roboto,Arial,sans-serif" }}>
                      &nbsp;&nbsp;&nbsp;Sell On Flipkart
                    </span>
                  </div>
                </div>
                <div className="col">
                  <div className="fa fa-star-o mx-3 text-warning">
                    <span className="text-white" style={{fontSize:"14px", fontFamily:"Roboto,Arial,sans-serif" }}>
                      &nbsp;&nbsp;&nbsp;Advertise
                    </span>
                  </div>
                </div>
                <div className="col">
                  <div className="fa fa-gift mx-3 text-warning">
                    <span className="text-white" style={{fontSize:"14px", fontFamily:"Roboto,Arial,sans-serif" }}>
                      &nbsp;&nbsp;&nbsp;Gift Cards
                    </span>
                  </div>
                </div>
                <div className="col">
                  <div className="fa fa-question-circle mx-3 text-warning">
                    <span className="text-white" style={{fontSize:"14px", fontFamily:"Roboto,Arial,sans-serif" }}>
                      &nbsp;&nbsp;&nbsp;Help Center
                    </span>
                  </div>
                </div>
                <div className="col">
                  <span className="text-white" style={{fontSize:"14px", fontFamily:"Roboto,Arial,sans-serif" }}>© 2007-2021 Flipkart.com</span>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="col justify-content-end d-flex pr-4 mr-1">
                <img
                  src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/payment-method_69e7ec.svg"
                  className="img-fluid mt-1"
                  style={{height:"16.3px"}}
                ></img>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
