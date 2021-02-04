import React, { Component } from "react";
import { Form, Input, Tree } from "antd";

export default class AddrolesRightform extends Component {
  render() {
    const { menu, name } = this.props.role;
    console.log(menu);
    return (
      <Form layout="vertical">
        <Form.Item label="角色名称" name="addrolesRightinput">
          <Input value={name} />
        </Form.Item>
        <Form.Item>
          <Tree checkable treeData={menu} />
        </Form.Item>
      </Form>
    );
  }
}
