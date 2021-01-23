import React, { Component } from "react";
import { Card, Table, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Space } from "antd";
import { reqList } from "../../api/reqIndex";

export default class Category extends Component {
  state = {
    data: [],
    title: "",
  };
  initColumn = () => {
    this.columns = [
      {
        title: "分类名称",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "操作",
        dataIndex: "operation",
        width: 200,
        key: "operation",
        render: () => (
          <Space size="middle">
            <a>删除商品 </a>
            <a>查看子分类</a>
          </Space>
        ),
      },
    ];
  };
  getTitle = () => {
    window.location.pathname === "/category"
      ? this.setState({ title: "一级分类" })
      : this.setState({ title: "一级分类->子分类" });
  };
  initList = async () => {
    await reqList("0").then(function (response) {
      const data = response.data;
      this.setState({ data: data });
    });
  };
  componentWillMount() {
    this.getTitle();
    this.initColumn();
  } //第一次渲染提供数据
  componentDidMount() {
    this.initList();
  } //异步获取数据
  render() {
    const { data, title } = this.state;
    const card = {
      title: title,
      extra: <Button type="primary" shape="circle" icon={<SearchOutlined />} />,
    };
    return (
      <Card title={card.title} extra={card.extra} style={{ width: "100%" }}>
        <Table dataSource={data} columns={this.columns} bordered />
      </Card>
    );
  }
}
