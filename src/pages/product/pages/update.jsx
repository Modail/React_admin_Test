import React, { Component } from "react";
import { Card, Input, Form, Button, Cascader } from "antd";
import PicturesWall from "../component/pictures-wall";
import RichTextEditor from "../component/richTextedit";

const { TextArea } = Input;
export default class ProductUpdate extends Component {
  render() {
    const title = (
      <span>
        <a href>添加商品</a>
      </span>
    );
    const options = [
      {
        value: "zhejiang",
        label: "Zhejiang",
        children: [
          {
            value: "hangzhou",
            label: "Hangzhou",
            children: [
              {
                value: "xihu",
                label: "West Lake",
              },
            ],
          },
        ],
      },
      {
        value: "jiangsu",
        label: "Jiangsu",
        children: [
          {
            value: "nanjing",
            label: "Nanjing",
            children: [
              {
                value: "zhonghuamen",
                label: "Zhong Hua Men",
              },
            ],
          },
        ],
      },
    ];
    return (
      <Card title={title}>
        <Form style={{ width: 450 }}>
          <Form.Item label="商品名称" required>
            <Input placeholder="请输入商品名称" />
          </Form.Item>
          <Form.Item label="商品描述" required>
            <TextArea
              placeholder="请输入商品描述"
              autoSize={{ minRows: 3, maxRows: 6 }}
            />
          </Form.Item>
          <Form.Item label="商品价格" required>
            <Input
              type="number"
              placeholder="请输入商品价格"
              addonAfter={<span>元</span>}
            />
          </Form.Item>
          <Form.Item label="商品分类" required>
            <Cascader options={options} placeholder="Please select" />
          </Form.Item>
          <Form.Item label="商品图片" required>
            <PicturesWall />
          </Form.Item>
          <Form.Item label="商品详情" required>
            <RichTextEditor />
          </Form.Item>
          <Button type="primary">提交</Button>
        </Form>
      </Card>
    );
  }
}
