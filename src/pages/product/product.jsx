import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/details";
import Update from "./pages/update";

export default class Product extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/product" component={Home} /*完全匹配路由*/></Route>
        <Route path="/product/detail" component={Detail}></Route>
        <Route path="/product/update" component={Update}></Route>
      </Switch>
    );
  }
}
