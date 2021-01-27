import React, { Component } from "react";
import { formateTime } from "../../utils/formateTime";
import menuList from "../../config/menuconfig.js";
import "./header-top.sass";
import { Modal } from "antd";
const { confirm } = Modal;

export default class HeaderTop extends Component {
  state = {
    currentTime: formateTime(Date.now()),
  };
  getTime() {
    setInterval(() => {
      const currentTime = formateTime(Date.now());
      this.setState({ currentTime });
    }, 1000); //设置定时器定时获取当前时间
  }
  getTitle() {
    //获得当前的location,不知道不使用window行不行
    const pathName = window.location.pathname;
    let title;
    menuList.forEach((item) => {
      if (item.key === pathName) {
        title = item.title;
      } else if (item.children) {
        item.children.forEach((item) => {
          if (item.key === pathName) {
            title = item.title;
          }
        });
      }
    });
    return title;
  }
  Logout = () => {
    return confirm({
      content: "是否退出登录",
      onOk() {
        console.log("OK");
      },
      onCancel() {
        console.log("Cancel");
      },
    }); //使用antd 但是却不怎么理解原理 打算专研下源码复现相关功能
  };
  render() {
    const { currentTime } = this.state;
    this.getTime();
    const title = this.getTitle();
    return (
      <div className="header-container">
        <div className="header-top">
          <span>欢迎，admin</span>
          <a href onClick={this.Logout}>
            退出
          </a>
        </div>
        <div className="header-Bottom">
          <div className="header-Bottom-left"> {title}</div>
          <div className="header-Bottom-right">
            <span>{currentTime}</span>
            <img alt="" src="" />
            <span>晴朗</span>
          </div>
        </div>
      </div>
    );
  }
}
