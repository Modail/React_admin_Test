import React, { Component } from "react";
import { Form, Input } from "antd";

export default class Addrolesform extends Component {
  render() {
    return (
      <Form layout="vertical" ref={this.props.getAddrolesRef}>
        <Form.Item label="输入名称" name="addrolesinput">
          <Input placeholder="请输入想添加的角色的名称" />
        </Form.Item>
      </Form>
    );
  }
}
