import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Footer from "./components/Footer"

const App = () => {
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }, []);
  return (
    <section>
      <div className="app">
      <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />

          <Redirect to="/" />
        </Switch>
        <Footer/>
      </div>
    </section>
  );
};
export default App;

// {loading ? (
//   <PropagateLoader size={20} color={"#e43c5c"} loading={loading} css={override}/>
// ) : (   )}
