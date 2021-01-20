import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./left-Nav.sass";
import logo from "../../assets/images/tou.jpg";
import { Menu } from "antd";
import menuList from "../../config/menuconfig";

const { SubMenu } = Menu;

export default class LeftNav extends Component {
  getMenuNodes = (menuList) => {
    return menuList.map((item) => {
      if (!item.children) {
        return (
          <Menu.Item key={item.key} icon={item.icon}>
            <Link to={item.key}>{item.title}</Link>
          </Menu.Item>
        );
      } else {
        return (
          <SubMenu key={item.key} icon={item.icon} title={item.title}>
            {this.getMenuNodes(item.children)}
          </SubMenu>
        );
      }
    }); //用数组map动态渲染页面，有子项是选择使用递归
    /*getMenuNodes =(menuList) =>{
       return menuList.reduce
    } 
    */
  };
  render() {
    return (
      <div className="left_Nav">
        <header className="left_Nav_header">
          <img alt="" src={logo} className="logo" />
          <h1>测试后台</h1>
        </header>
        <div className="menu_container">
          <Menu
            style={{ width: 200 }}
            defaultSelectedKeys={["/home"]}
            defaultOpenKeys={["product"]}
            theme="dark"
            mode="inline"
          >
            {this.getMenuNodes(menuList)}
            {/* <Menu.Item key="/home" icon={<MailOutlined />}>
              <Link to="/home">首页</Link>
            </Menu.Item>

            <SubMenu key="sub2" icon={<AppstoreOutlined />} title="商品">
              <Menu.Item key="/product">
                <Link to="/product">商品管理</Link>
              </Menu.Item>
              <Menu.Item key="/category">
                <Link to="/category">分类管理</Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="/user">
              <Link to="/user">用户管理</Link>
            </Menu.Item>
            <Menu.Item key="/role">
              <Link to="/role">角色管理</Link>
            </Menu.Item>

            <SubMenu key="sub5" icon={<SettingOutlined />} title="图表">
              <Menu.Item key="/bar">
                <Link to="/bar">饼状图</Link>
              </Menu.Item>
              <Menu.Item key="/line">
                <Link to="/line">线性图</Link>
              </Menu.Item>
              <Menu.Item key="/pie">
                <Link to="/pie">饼状图</Link>
              </Menu.Item>
            </SubMenu> //最初的想法，但这样导致代码不美观，也没有可阅读性，用函数去遍历渲染是最好的方法*/}
          </Menu>
        </div>
      </div>
    );
  }
}
