import React, { Component } from "react";
import { Form, Select, Input } from "antd";

const Option = Select.Option;
export default class Addform extends Component {
  render() {
    const { listdata, parentId } = this.props;
    return (
      <Form layout="vertical" ref={this.props.getAddRef}>
        <Form.Item label="选择分类" name="addselect">
          <Select defaultValue={parentId}>
            <Option value="0">一级分类</Option>
            {listdata.map((item) => {
              return <Option value={item._id}>{item.name}</Option>;
            })}
          </Select>
        </Form.Item>
        <Form.Item label="输入名称" name="addinput">
          <Input placeholder="请输入添加分类的名称" />
        </Form.Item>
      </Form>
    );
  }
}
