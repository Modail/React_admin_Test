import React, { Component } from "react";
import { Form, Input } from "antd";

export default class AddUserform extends Component {
  render() {
    return (
      <Form layout="vertical" ref={this.props.getAddrolesRef}>
        <Form.Item label="用户名称:">
          <Input placeholder="请输入想添加的用户的名称" />
        </Form.Item>
        <Form.Item label="用户邮箱:">
          <Input placeholder="请输入常用邮箱" />
        </Form.Item>
        <Form.Item label="用户电话">
          <Input placeholder="请输入在使用的电话号码" />
        </Form.Item>
        <Form.Item label="所属角色">
          <Input placeholder="请输入角色名称" />
        </Form.Item>
      </Form>
    );
  }
}
