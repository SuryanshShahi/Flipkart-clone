import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

function Footer() {
  return (
    <section id="footer">
      <footer className="text-white">
        <div className="container-fluid py-5 px-5">
          <div className="row">
            <div className="col-6">
              <div className="row">
                <div className="col-3">ABOUT</div>
                <div className="col-3">HELP</div>
                <div className="col-3">POLICY</div>
                <div className="col-3">SOCIAL</div>
              </div>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-6">Mail Us:</div>
                <div className="col-6">Registered Office Address:</div>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
        <br></br>
        <br></br>
      </footer>
    </section>
  );
}

export default Footer;
