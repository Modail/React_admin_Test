import React, { Component } from "react";
import { Card, Table, Select, Input, Button } from "antd";
const Option = Select.Option;
export default class ProductHome extends Component {
  render() {
    const title = (
      <span>
        <Select style={{ width: 200 }} defaultValue="1">
          <Option value="1">按名称搜索</Option>
          <Option value="2">按描述搜索</Option>
        </Select>
        <Input placeholder="关键字" style={{ width: 300 }} />
        <Button> 搜索</Button>
      </span>
    );

    const extra = <Button style={{ border: "1px" }}>添加商品</Button>;
    const columns = {};
    return (
      <Card title={title} extra={extra} style={{ width: "100% " }}>
        <Table columns={columns}></Table>
      </Card>
    );
  }
}
