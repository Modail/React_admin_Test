import React, { Component } from "react";
import { Layout } from "antd";
import { Switch, Redirect, Route } from "react-router-dom";
import LeftNav from "../../components/left-Nav/left-Nav";
import HeaderTop from "../../components/header-Top/header-Top";
import MyFooter from "../../components/footer/footer";
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
      <>
        <Layout style={{ height: "100%" }}>
          <Sider>
            <LeftNav></LeftNav>
          </Sider>
          <Layout>
            <Header style={{ padding: "0" }}>
              <HeaderTop></HeaderTop>
            </Header>
            <Content style={{ padding: "20px" }}>
              <Switch>
                <Redirect from="/" exact to="/home" />
                <Route exact path="/home" component={Home} />
                <Route exact path="/category" component={Category} />
                <Route exact path="/product" component={Product} />
                <Route exact path="/user" component={User} />
                <Route exact path="/role" component={Role} />
                <Route exact path="/bar" component={Bar} />
                <Route exact path="/line" component={Line} />
                <Route exact path="/pie" component={Pie} />
              </Switch>
            </Content>
            <Footer>
              <MyFooter />
            </Footer>
          </Layout>
        </Layout>
      </>
    );
  }
}
