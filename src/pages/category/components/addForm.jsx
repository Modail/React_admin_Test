import React, { Component } from "react";
import { Form, Select, Input } from "antd";

const Option = Select.Option;
export default class Addform extends Component {
  render() {
    return (
      <Form layout="vertical">
        <Form.Item label="选择分类">
          <Select defaultValue="一级分类">
            <Option>一级分类</Option>
          </Select>
        </Form.Item>
        <Form.Item label="输入名称">
          <Input placeholder="请输入添加分类的名称" />
        </Form.Item>
      </Form>
    );
  }
}
