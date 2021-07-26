import React from "react";
import { NavLink } from "react-router-dom";
import web from "../images/plus.png";
import web1 from "../images/flipkart.png";
import web2 from "../images/1.jpg";
import {
  Content,
  Banner,
  ProductLine1,
  ProductLine2,
  ProductLine3,
  ProductLine5,
} from "../Data/content";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@material-ui/core";
import MultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

var settings = {
  indicators: false,
  animation: "slide",
  navButtonsAlwaysVisible: true,
  navButtonsProps: {
    style: {
      background: "#fff",
      fontSize: "2.5rem",
      borderRadius: 0,
      height: "104px",
      width: "50px",
      outline: "none",
      color: "black",
    },
  },
};
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    slidesToSlide: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
var setting = {
  responsive: responsive,
  centerMode: true,
};
function Home() {
  return (
    <section id="home">
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

      <nav class="navbar navbar-light bg-white shadow-sm mt-5">
        <div class="container">
          {Content.map((elem) => {
            const { text, image } = elem;
            return (
              <div className="my-3">
                <div className="justify-content-center d-flex">
                  <img
                    src={image}
                    className="img-fluid text-center"
                    style={{ width: "65px" }}
                  ></img>
                </div>
                <div className="justify-content-center d-flex mt-1">
                  <h7 style={{ fontSize: "14px" }}>
                    <b>{text}</b>
                  </h7>
                </div>
              </div>
            );
          })}
        </div>
      </nav>

      <div className="my-2 mx-3">
        <Carousel {...settings} className="car">
          {Banner.map((image) => (
            <img src={image} className="img-fluid" alt="menupic"></img>
          ))}
        </Carousel>
      </div>
      <div className="mx-2 mr-3 mb-2">
        <div className="container-fluid mx-1 banner2">
          <div className="row">
            <div className="col-10 card border-0 shadow-sm rounded-0">
              <div className="row gx-0">
                <div className="col-2 card border-0 rounded-0">
                  <div className="card-body ">
                    <div className="justify-content-center align-items-center d-flex pt-5 ">
                      <h2>
                        <b>Top Offers</b>
                      </h2>
                    </div>
                    <div className="d-flex justify-content-center">
                      <div className="btn btn-info">VIEW ALL</div>
                    </div>
                  </div>
                  <div className="card-footer bg-info rounded-0">
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                  </div>
                </div>
                <div className="col-10">
                  <MultiCarousel {...setting}>
                    {ProductLine1.map((elem) => {
                      const { text, image, price } = elem;
                      return (
                        <div className="card border-0 mx-2">
                          <div className="card-body my-5 text-center">
                            <img
                              src={image}
                              className="img-fluid"
                              alt="menupic"
                            ></img>
                          </div>
                          <div
                            className="text-center bg-white"
                            style={{ fontSize: "14px" }}
                          >
                            <div className="font-weight-bold">{text}</div>
                            <h5 className="text-success ">Buy Now!!</h5>
                            <div>{price}</div>
                          </div>
                        </div>
                      );
                    })}
                  </MultiCarousel>
                </div>
              </div>
            </div>
            <div className="col-2 shadow-sm">
              <img
                src="https://rukminim1.flixcart.com/flap/464/708/image/740c68de8a578ec2.jpg?q=70"
                className="img-fluid cardH"
                alt="menupic"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid mb-2">
        <div className="row pr-2">
          {ProductLine2.map((image) => (
            <div className="col-4 border-0">
              <div className="card my-1 shadow-sm">
                <img src={image} className="img-fluid" alt="menupic"></img>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-2 mr-3 mb-3">
        <div className="container-fluid mx-1 banner2">
          <div className="row">
            <div className="card border-0 shadow-sm rounded-0">
              <div className="row gx-0">
                <div className="col-2 card border-0 rounded-0">
                  <div className="card-body ">
                    <div className="justify-content-center align-items-center d-flex pt-5 ">
                      <h2>
                        <b>Top Offers</b>
                      </h2>
                    </div>
                    <div className="d-flex justify-content-center">
                      <div className="btn btn-info">VIEW ALL</div>
                    </div>
                  </div>
                  <div className="card-footer bg-info rounded-0">
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                  </div>
                </div>
                <div className="col-10">
                  <MultiCarousel {...setting}>
                    {ProductLine1.map((elem) => {
                      const { text, image, price } = elem;
                      return (
                        <div className="card border-0 mx-2">
                          <div className="card-body my-5 text-center">
                            <img
                              src={image}
                              className="img-fluid"
                              alt="menupic"
                            ></img>
                          </div>
                          <div
                            className="text-center bg-white"
                            style={{ fontSize: "14px" }}
                          >
                            <div className="font-weight-bold">{text}</div>
                            <h5 className="text-success ">Buy Now!!</h5>
                            <div>{price}</div>
                          </div>
                        </div>
                      );
                    })}
                  </MultiCarousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid mb-2">
        <div className="row pr-2">
          {ProductLine3.map((image) => (
            <div className="col-4 border-0">
              <div className="card my-1 shadow-sm">
                <img src={image} className="img-fluid" alt="menupic"></img>
              </div>
            </div>
          ))}
        </div>
      </div>






      
      <div className="mx-2 mr-3 mb-3">
        <div className="container-fluid mx-1 banner2">
          <div className="row">
            <div className="card border-0 shadow-sm rounded-0">
              <div className="row gx-0">
                <div className="col-2 card border-0 rounded-0">
                  <div className="card-body ">
                    <div className="justify-content-center align-items-center d-flex pt-5 ">
                      <h2>
                        <b>Top Offers</b>
                      </h2>
                    </div>
                    <div className="d-flex justify-content-center">
                      <div className="btn btn-info">VIEW ALL</div>
                    </div>
                  </div>
                  <div className="card-footer bg-info rounded-0">
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                  </div>
                </div>
                <div className="col-10">
                  <MultiCarousel {...setting}>
                    {ProductLine1.map((elem) => {
                      const { text, image, price } = elem;
                      return (
                        <div className="card border-0 mx-2">
                          <div className="card-body my-5 text-center">
                            <img
                              src={image}
                              className="img-fluid"
                              alt="menupic"
                            ></img>
                          </div>
                          <div
                            className="text-center bg-white"
                            style={{ fontSize: "14px" }}
                          >
                            <div className="font-weight-bold">{text}</div>
                            <h5 className="text-success ">Buy Now!!</h5>
                            <div>{price}</div>
                          </div>
                        </div>
                      );
                    })}
                  </MultiCarousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid mb-2">
        <div className="row pr-2">
          {ProductLine5.map((image) => (
            <div className="col-3 border-0">
              <div className="card my-1 shadow-sm">
                <img src={image} className="img-fluid" alt="menupic"></img>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
