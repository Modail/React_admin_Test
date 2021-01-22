import React, { Component } from "react";
import { Card, Table, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { dataSource, columns } from "../../config/tableconfig";

export default class Category extends Component {
  render() {
    const card = {
      title: "商品管理",
      extra: <Button type="primary" shape="circle" icon={<SearchOutlined />} />,
    };
    return (
      <Card title={card.title} extra={card.extra} style={{ width: "100%" }}>
        <Table dataSource={dataSource} columns={columns} />
      </Card>
    );
  }
}
