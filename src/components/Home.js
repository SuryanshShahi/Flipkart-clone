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
  ProductLine4,
  ProductLine5,
  ProductLine6,
  ProductLine7,
  ProductLine8,
  ProductLine9,
  ProductLine10,
  ProductLine11,
  ProductLine12,
  ProductLine13,
  ProductLine14,
  ProductLine15,
  ProductLine16,
  ProductLine17,
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
const responsive1 = {
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
var setting1 = {
  responsive: responsive1,
};
function Home() {
  return (
    <section id="home">
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
                  <div className="card-body">
                    <div className="justify-content-center align-items-center d-flex pt-5 ">
                      <h2>
                        <b>Top Offers</b>
                      </h2>
                    </div>
                    <br></br>
                    <div className="d-flex justify-content-center">
                      <div
                        className="btn btn-primary rounded-0"
                        style={{ boxShadow: "0px 0px 6px 0px grey" }}
                      >
                        VIEW ALL
                      </div>
                    </div>
                  </div>
                  <div
                    className="card-footer rounded-0"
                    style={{
                      backgroundImage:
                        "url('https://rukminim1.flixcart.com/flap/278/278/image/9844dce6e0987483.jpg?q=90')",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
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
                        <NavLink to="/products">
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
                        </NavLink>
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

      <div className="container-fluid">
        <div className="row pr-2">
          {ProductLine2.map((image) => (
            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
              <div
                className="card mb-2 border-0 rounded-0"
                style={{
                  backgroundColor: "#eee",
                  boxShadow: "rgb(128 128 128 / 28%) 5px 4px 4px -2px",
                }}
              >
                <img
                  src={image}
                  className="img-fluid px-4 py-3 mx-2"
                  alt="menupic"
                ></img>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-2 mr-3 mb-2">
        <div className="container-fluid mx-1 banner2">
          <div className="row">
            <div className="card border-0 shadow-sm rounded-0">
              <div className="row gx-0">
                <div className="col-2 card border-0 rounded-0">
                  <div className="card-body">
                    <div className="justify-content-center align-items-center d-flex pt-5 ">
                      <h2 className="text-center">
                        <b>Today's Fashion Deals</b>
                      </h2>
                    </div>
                    <br></br>

                    <div className="d-flex justify-content-center">
                      <div
                        className="btn btn-primary rounded-0"
                        style={{ boxShadow: "0px 0px 6px 0px grey" }}
                      >
                        VIEW ALL
                      </div>
                    </div>
                  </div>
                  <div
                    className="card-footer rounded-0"
                    style={{
                      backgroundImage:
                        "url('https://rukminim1.flixcart.com/flap/278/278/image/9844dce6e0987483.jpg?q=90')",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
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

      <div className="container-fluid">
        <div className="row pr-2">
          {ProductLine3.map((image) => (
            <div className="col-lg-4 col-md-4 col-12">
              <div
                className="card border-0 mb-2"
                style={{ boxShadow: "rgb(128 128 128 / 28%) 4px 4px 3px -2px" }}
              >
                <img src={image} className="img-fluid" alt="menupic"></img>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-2 mr-3 mb-2">
        <div className="container-fluid mx-1 banner2">
          <div className="row">
            <div
              className="card border-0 rounded-0 pl-3"
              style={{
                backgroundColor: "#fafafa",
                boxShadow: "rgb(128 128 128 / 28%) 0px 0px 6px 1px",
              }}
            >
              <div className="mx-2 px-1">
                <h5 className="font-weight-bold mt-4 ml-2">Featured Brands</h5>
                <MultiCarousel {...setting1}>
                  {ProductLine4.map((image) => (
                    <div className="card border-0 mx-2 my-3">
                      <img
                        src={image}
                        className="img-fluid"
                        alt="menupic"
                      ></img>
                    </div>
                  ))}
                </MultiCarousel>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-2 mr-3 mb-2">
        <div className="container-fluid mx-1 banner2">
          <div className="row">
            <div className="card border-0 shadow-sm rounded-0">
              <div className="row gx-0">
                <div className="col-2 card border-0 rounded-0">
                  <div className="card-body ">
                    <div className="align-items-center d-flex pt-5 ">
                      <h2 className="text-center">
                        <b>Electronics and Accessories</b>
                      </h2>
                    </div>
                    <br></br>

                    <div className="d-flex justify-content-center">
                      <div
                        className="btn btn-primary rounded-0"
                        style={{ boxShadow: "0px 0px 6px 0px grey" }}
                      >
                        VIEW ALL
                      </div>
                    </div>
                  </div>
                  <div
                    className="card-footer rounded-0"
                    style={{
                      backgroundImage:
                        "url('https://rukminim1.flixcart.com/flap/278/278/image/9844dce6e0987483.jpg?q=90')",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
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
            <div className="col-lg-3 col-md-6 col-6">
              <div
                className="card border-0 mb-2"
                style={{ boxShadow: "rgb(128 128 128 / 28%) 4px 4px 3px -2px" }}
              >
                <img src={image} className="img-fluid" alt="menupic"></img>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container-fluid">
        <div className="row pr-2">
          {ProductLine6.map((image) => (
            <div className="col-lg-4 col-md-4 col-12">
              <div
                className="card border-0 mb-2"
                style={{ boxShadow: "rgb(128 128 128 / 28%) 4px 4px 3px -2px" }}
              >
                <img src={image} className="img-fluid" alt="menupic"></img>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-2 mr-3 mb-2">
        <div className="container-fluid mx-1 banner2">
          <div className="row">
            <div className="card border-0 shadow-sm rounded-0">
              <div className="row gx-0">
                <div className="col-2 card border-0 rounded-0">
                  <div className="card-body ">
                    <div className="justify-content-center align-items-center d-flex pt-5 ">
                      <h2 className="text-center">
                        <b>Fashion Brands on Discounts</b>
                      </h2>
                    </div>
                    <br></br>

                    <div className="d-flex justify-content-center">
                      <div
                        className="btn btn-primary rounded-0"
                        style={{ boxShadow: "0px 0px 6px 0px grey" }}
                      >
                        VIEW ALL
                      </div>
                    </div>
                  </div>
                  <div
                    className="card-footer rounded-0"
                    style={{
                      backgroundImage:
                        "url('https://rukminim1.flixcart.com/flap/278/278/image/9844dce6e0987483.jpg?q=90')",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
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

      <div className="container-fluid">
        <div className="row pr-2">
          {ProductLine7.map((image) => (
            <div className="col-lg-4 col-md-4 col-12">
              <div
                className="card border-0 mb-2"
                style={{ boxShadow: "rgb(128 128 128 / 28%) 4px 4px 3px -2px" }}
              >
                <img src={image} className="img-fluid" alt="menupic"></img>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-2 mr-3 mb-2">
        <div className="container-fluid mx-1 banner2">
          <div className="row">
            <div className="card border-0 shadow-sm rounded-0">
              <div className="row gx-0">
                <div className="col-2 card border-0 rounded-0">
                  <div className="card-body ">
                    <div className="justify-content-center align-items-center d-flex pt-5 ">
                      <h2>
                        <b>Trending Deals</b>
                      </h2>
                    </div>
                    <br></br>

                    <div className="d-flex justify-content-center">
                      <div
                        className="btn btn-primary rounded-0"
                        style={{ boxShadow: "0px 0px 6px 0px grey" }}
                      >
                        VIEW ALL
                      </div>
                    </div>
                  </div>
                  <div
                    className="card-footer rounded-0"
                    style={{
                      backgroundImage:
                        "url('https://rukminim1.flixcart.com/flap/278/278/image/7ef615932b565df2.jpg?q=90')",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
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

      <div className="container-fluid">
        <div className="row pr-2">
          {ProductLine8.map((image) => (
            <div className="col-lg-4 col-md-4 col-12">
              <div
                className="card border-0 mb-2"
                style={{ boxShadow: "rgb(128 128 128 / 28%) 4px 4px 3px -2px" }}
              >
                <img src={image} className="img-fluid" alt="menupic"></img>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-2 mr-3 mb-2">
        <div className="container-fluid mx-1 banner2">
          <div className="row">
            <div
              className="card border-0 rounded-0 pl-3"
              style={{
                backgroundColor: "#fafafa",
                boxShadow: "rgb(128 128 128 / 28%) 0px 0px 6px 1px",
              }}
            >
              <div className="mx-2 px-1">
                <h5 className="font-weight-bold mt-4 ml-2">Featured Brands</h5>
                <MultiCarousel {...setting1}>
                  {ProductLine9.map((image) => (
                    <div className="card border-0 mx-2 my-3">
                      <img
                        src={image}
                        className="img-fluid"
                        alt="menupic"
                      ></img>
                    </div>
                  ))}
                </MultiCarousel>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-2 mr-3 mb-2">
        <div className="container-fluid mx-1 banner2">
          <div className="row">
            <div className="card border-0 shadow-sm rounded-0">
              <div className="row gx-0">
                <div className="col-2 card border-0 rounded-0">
                  <div className="card-body ">
                    <div className="justify-content-center align-items-center d-flex pt-5 ">
                      <h2>
                        <b>Home Top Deals</b>
                      </h2>
                    </div>
                    <br></br>

                    <div className="d-flex justify-content-center">
                      <div
                        className="btn btn-primary rounded-0"
                        style={{ boxShadow: "0px 0px 6px 0px grey" }}
                      >
                        VIEW ALL
                      </div>
                    </div>
                  </div>
                  <div
                    className="card-footer rounded-0"
                    style={{
                      backgroundImage:
                        "url('https://rukminim1.flixcart.com/flap/278/278/image/9844dce6e0987483.jpg?q=90')",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
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

      <div className="container-fluid">
        <div className="row pr-2">
          {ProductLine10.map((image) => (
            <div className="col-lg-3 col-md-6 col-6">
              <div
                className="card border-0 mb-2"
                style={{ boxShadow: "rgb(128 128 128 / 28%) 4px 4px 3px -2px" }}
              >
                <img src={image} className="img-fluid" alt="menupic"></img>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-2 mr-3 mb-2">
        <div className="container-fluid mx-1 banner2">
          <div className="row">
            <div className="card border-0 shadow-sm rounded-0">
              <div className="row gx-0">
                <div className="col-2 card border-0 rounded-0">
                  <div className="card-body ">
                    <div className="justify-content-center align-items-center d-flex pt-5 ">
                      <h2 className="text-center">
                        <b>Fashion Best Sellers</b>
                      </h2>
                    </div>
                    <br></br>

                    <div className="d-flex justify-content-center">
                      <div
                        className="btn btn-primary rounded-0"
                        style={{ boxShadow: "0px 0px 6px 0px grey" }}
                      >
                        VIEW ALL
                      </div>
                    </div>
                  </div>
                  <div
                    className="card-footer rounded-0"
                    style={{
                      backgroundImage:
                        "url('https://rukminim1.flixcart.com/flap/278/278/image/9844dce6e0987483.jpg?q=90')",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
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

      <div className="container-fluid">
        <div className="row pr-2">
          {ProductLine11.map((image) => (
            <div className="col-lg-4 col-md-4 col-12">
              <div
                className="card border-0  mb-2"
                style={{ boxShadow: "rgb(128 128 128 / 28%) 4px 4px 3px -2px" }}
              >
                <img src={image} className="img-fluid" alt="menupic"></img>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-2 mr-3 mb-2">
        <div className="container-fluid mx-1 banner2">
          <div className="row">
            <div
              className="card border-0 rounded-0 pl-3"
              style={{
                backgroundColor: "#fafafa",
                boxShadow: "rgb(128 128 128 / 28%) 0px 0px 6px 1px",
              }}
            >
              <div className="mx-2 px-1">
                <h5 className="font-weight-bold mt-4 ml-2">Featured Brands</h5>
                <MultiCarousel {...setting1}>
                  {ProductLine12.map((image) => (
                    <div className="card border-0 mx-2 my-3">
                      <img
                        src={image}
                        className="img-fluid"
                        alt="menupic"
                      ></img>
                    </div>
                  ))}
                </MultiCarousel>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row pr-2">
          {ProductLine13.map((image) => (
            <div className="col-lg-4 col-md-4 col-12">
              <div
                className="card border-0 mb-2"
                style={{ boxShadow: "rgb(128 128 128 / 28%) 4px 4px 3px -2px" }}
              >
                <img src={image} className="img-fluid" alt="menupic"></img>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-2 mr-3 mb-2">
        <div className="container-fluid mx-1 banner2">
          <div className="row">
            <div className="card border-0 shadow-sm rounded-0">
              <div className="row gx-0">
                <div className="col-2 card border-0 rounded-0">
                  <div className="card-body ">
                    <div className="justify-content-center align-items-center d-flex pt-5 ">
                      <h2 className="text-center">
                        <b>Bestselling Furniture</b>
                      </h2>
                    </div>
                    <br></br>

                    <div className="d-flex justify-content-center">
                      <div
                        className="btn btn-primary rounded-0"
                        style={{ boxShadow: "0px 0px 6px 0px grey" }}
                      >
                        VIEW ALL
                      </div>
                    </div>
                  </div>
                  <div
                    className="card-footer rounded-0"
                    style={{
                      backgroundImage:
                        "url('https://rukminim1.flixcart.com/flap/278/278/image/7ef615932b565df2.jpg?q=90')",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
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

      <div className="container-fluid">
        <div className="row pr-2">
          {ProductLine14.map((image) => (
            <div className="col-lg-4 col-md-4 col-12">
              <div
                className="card border-0 mb-2"
                style={{ boxShadow: "rgb(128 128 128 / 28%) 4px 4px 3px -2px" }}
              >
                <img src={image} className="img-fluid" alt="menupic"></img>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-2 mr-3 mb-2">
        <div className="container-fluid mx-1 banner2">
          <div className="row">
            <div className="card border-0 shadow-sm rounded-0">
              <div className="row gx-0">
                <div className="col-2 card border-0 rounded-0">
                  <div className="card-body ">
                    <div className="align-items-center d-flex pt-5 ">
                      <h2 className="text-center">
                        <b>Electronics and Accessories</b>
                      </h2>
                    </div>
                    <br></br>

                    <div className="d-flex justify-content-center">
                      <div
                        className="btn btn-primary rounded-0"
                        style={{ boxShadow: "0px 0px 6px 0px grey" }}
                      >
                        VIEW ALL
                      </div>
                    </div>
                  </div>
                  <div
                    className="card-footer rounded-0"
                    style={{
                      backgroundImage:
                        "url('https://rukminim1.flixcart.com/flap/278/278/image/9844dce6e0987483.jpg?q=90')",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
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

      <div className="container-fluid">
        <div className="row pr-2">
          {ProductLine15.map((image) => (
            <div className="col-lg-3 col-md-6 col-6">
              <div
                className="card border-0 mb-2"
                style={{ boxShadow: "rgb(128 128 128 / 28%) 4px 4px 3px -2px" }}
              >
                <img src={image} className="img-fluid" alt="menupic"></img>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-2 mr-3 mb-2">
        <div className="container-fluid mx-1 banner2">
          <div className="row">
            <div className="card border-0 shadow-sm rounded-0">
              <div className="row gx-0">
                <div className="col-2 card border-0 rounded-0">
                  <div className="card-body ">
                    <div className="align-items-center d-flex pt-5 ">
                      <h2 className="text-center">
                        <b>Beauty , Toys & more</b>
                      </h2>
                    </div>
                    <br></br>

                    <div className="d-flex justify-content-center">
                      <div
                        className="btn btn-primary rounded-0"
                        style={{ boxShadow: "0px 0px 6px 0px grey" }}
                      >
                        VIEW ALL
                      </div>
                    </div>
                  </div>
                  <div
                    className="card-footer rounded-0"
                    style={{
                      backgroundImage:
                        "url('https://rukminim1.flixcart.com/flap/278/278/image/7ef615932b565df2.jpg?q=90')",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
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

      <div className="mx-2 mr-3 mb-2">
        <div className="container-fluid mx-1 banner2">
          <div className="row">
            <div className="card border-0 shadow-sm rounded-0">
              <div className="row gx-0">
                <div className="col-2 card border-0 rounded-0">
                  <div className="card-body ">
                    <div className="align-items-center d-flex pt-5 ">
                      <h2 className="text-center">
                        <b>Home Essentials & more</b>
                      </h2>
                    </div>
                    <br></br>

                    <div className="d-flex justify-content-center">
                      <div
                        className="btn btn-primary rounded-0"
                        style={{ boxShadow: "0px 0px 6px 0px grey" }}
                      >
                        VIEW ALL
                      </div>
                    </div>
                  </div>
                  <div
                    className="card-footer rounded-0"
                    style={{
                      backgroundImage:
                        "url('https://rukminim1.flixcart.com/flap/278/278/image/03b88f469abab3d7.jpg?q=90')",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
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

      <div className="container-fluid ">
        <div className="row pr-2">
          {ProductLine16.map((image) => (
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div
                className="card border-0 mb-2"
                style={{ boxShadow: "rgb(128 128 128 / 28%) 4px 4px 3px -2px" }}
              >
                <img src={image} className="img-fluid" alt="menupic"></img>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container-fluid">
        <div className="row pr-2">
          {ProductLine17.map((image) => (
            <div className="col-lg-3 col-md-6 col-6">
              <div
                className="card border-0 mb-2"
                style={{ boxShadow: "rgb(128 128 128 / 28%) 4px 4px 3px -2px" }}
              >
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
