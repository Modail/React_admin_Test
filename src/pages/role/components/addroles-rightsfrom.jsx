import React, { Component } from "react";
import { Form, Input, Tree } from "antd";
import menuList from "../../../config/menuconfig";

export default class AddrolesRightform extends Component {
  getTreeNodes = (menuList) => {
    const pre = [{ title: "平台权限管理" }];
    menuList.map((item) => {
      const children = [];
      if (item.children) {
        for (let length = item.children.length; length > 0; length--) {
          children.push(item.children[length - 1]);
        }
      } //不能使用jsx时，多定义一个变量进行赋值

      pre.push({
        title: item.title,
        key: item.key,
        children: children,
      });
      return pre;
    });
    return pre;
  };
  render() {
    const { name, menus } = this.props.role;
    const treeData = this.getTreeNodes(menuList);
    console.log(treeData);
    console.log(menus);
    return (
      <Form layout="vertical">
        <Form.Item label="角色名称" name="addrolesRightinput">
          <Input value={name} />
        </Form.Item>
        <Form.Item>
          <Tree
            checkable
            treeData={treeData}
            defaultExpandAll
            defaultSelectedKeys={menus}
          />
        </Form.Item>
      </Form>
    );
  }
}
