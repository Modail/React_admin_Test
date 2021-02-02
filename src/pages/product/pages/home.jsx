import React, { Component } from "react";
import { Card, Table, Select, Input, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { reqProduct } from "../../../api/reqIndex";
const Option = Select.Option;
export default class ProductHome extends Component {
  state = {
    total: 0, //商品总数
    productdata: [],
  };

  initColumns = () => {
    this.columns = [
      {
        title: "商品名称",
        dataIndex: "name",
      },
      {
        title: "商品描述",
        dataIndex: "desc",
      },
      {
        title: "价格",
        dataIndex: "price",
        render: (price) => {
          return "￥" + price;
        },
      },
      {
        title: "状态",
        dataIndex: "status",
        render: (status) => {
          return (
            <span>
              <Button type="primary">下架</Button>
              <span>在售</span>
            </span>
          );
        },
      },
      {
        title: "操作",
        render: (productdata) => {
          return (
            <span>
              <a href>详情</a>
              <a href>修改</a>
            </span>
          );
        },
      },
    ];
  };
  initProductdata = async (pageNum) => {
    const result = await reqProduct(pageNum, 6);
    if (result.status === 0) {
      this.setState({
        total: result.data.total,
        productdata: result.data.list,
      });
    }
  };
  componentDidMount() {
    this.initColumns();
    this.initProductdata();
  }
  render() {
    const { total, productdata } = this.state;
    console.log(productdata);
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

    const extra = (
      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={() => {
          this.props.history.push("product/update");
        }}
      >
        添加商品
      </Button>
    );

    return (
      <Card title={title} extra={extra} style={{ width: "100% " }}>
        <Table
          dataSource={productdata}
          columns={this.columns}
          bordered
          pagination={{
            total: total,
            pageSize: 6,
            onChange: this.initProductdata,
            showSizeChanger: false,
          }}
        />
      </Card>
    );
  }
}
