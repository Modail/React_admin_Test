import React, { Component } from "react";
import { Form, Input } from "antd";

export default class Updateform extends Component {
  render() {
    const rowlistName = this.props.rowlistName;
    console.log(rowlistName);
    return (
      //通过定义ref获得当前dom元素
      <Form ref={this.props.getUpdataRef}>
        <Form.Item name="updateinput" label="输入名称">
          <Input placeholder="请输入分类名称" defaultValue={rowlistName} />
        </Form.Item>
      </Form>
    );
  }
}
//遗留问题 render显示的
