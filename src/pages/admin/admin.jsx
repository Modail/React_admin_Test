import React, { Component } from "react";
import { Layout } from "antd";
import { Switch, Redirect, Route } from "react-router-dom";
import LeftNav from "../../components/left-Nav/left-Nav";
import Home from "../home/home";
import Category from "../category/category";
import Product from "../product/product";
import User from "../user/user";
import Role from "../role/role";
import Bar from "../chart/bar";
import Line from "../chart/line";
import Pie from "../chart/pie";

const { Header, Footer, Sider, Content } = Layout;

export default class Admin extends Component {
  render() {
    return (
      <Layout style={{ height: "100%" }}>
        <Sider>
          <LeftNav></LeftNav>
        </Sider>
        <Layout>
          <Header>Header</Header>
          <Content>
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/category" component={Category} />
              <Route path="/product" component={Product} />
              <Route path="/user" component={User} />
              <Route path="/role" component={Role} />
              <Route path="/bar" component={Bar} />
              <Route path="/line" component={Line} />
              <Route path="/pie" component={Pie} />
            </Switch>
            <Redirect to="/home"></Redirect>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    );
  }
}
