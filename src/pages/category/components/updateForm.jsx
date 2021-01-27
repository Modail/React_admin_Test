import React, { Component } from "react";
import { Form, Input } from "antd";

export default class Updateform extends Component {
  render() {
    const rowlistName = this.props.rowlistdata.name;
    return (
      //通过定义ref获得当前dom元素
      <Form ref={this.props.getUpdataRef}>
        <Form.Item name="updateinput" label="输入名称">
          <Input placeholder={"当前分类名为：" + rowlistName} />
        </Form.Item>
      </Form>
    );
  }
}
//遗留问题 render显示的是上一次的rowlistName
