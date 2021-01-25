import React, { Component } from "react";
import { Form, Input } from "antd";

export default class Updateform extends Component {
  render() {
    const rowlistName = this.props.rowlistdata.name;
    return (
      <Form>
        <Form.Item label="输入名称">
          <Input value={rowlistName} />
        </Form.Item>
      </Form>
    );
  }
}
