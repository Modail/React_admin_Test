import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import ProductHome from "./pages/home";
import ProductDetails from "./pages/details";
import ProductUpdate from "./pages/update";

export default class Product extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/product" component={ProductHome} /*完全匹配路由*/ />
        <Route path="/product/details" component={ProductDetails} />
        <Route path="/product/update" component={ProductUpdate} />
      </Switch>
    );
  }
}
