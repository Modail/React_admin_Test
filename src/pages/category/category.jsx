import React, { Component } from "react";
import { Card, Table, Button, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Space } from "antd";
import { reqList } from "../../api/reqIndex";

export default class Category extends Component {
  state = {
    listdata: [],
    sublistdata: [],
    parentId: "0",
    parentName: "",
    showstatus: 0, //对话框的显示状态 ，0 都不显示，1添加显示，2删除显示
  };

  initColumn = () =>
    (this.columns = [
      {
        title: "分类名称",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "操作",
        width: 200,
        render: (listdata) => (
          <Space size="middle">
            <a onClick={this.showDel}>删除商品 </a>
            {/*向事件回调函数传递参数，先定义一个匿名函数外包，再调用定义的函数*/}
            {this.state.parentId === "0" ? (
              <a
                onClick={() => {
                  this.showSublist(listdata);
                }}
              >
                查看子分类
              </a>
            ) : null}
          </Space>
        ),
      },
    ]); //初始化列

  showSublist = (listdata) => {
    this.setState({ parentId: listdata._id, parentName: listdata.name }, () => {
      this.initList(); //标准的setState参数为更新参数，以及回调函数(状态更新完成后才调用)
    });
  }; //获得二级分类

  showlist = () => {
    this.setState({ parentId: "0", parentName: "", sublistdata: [] });
  }; //返回一级分类 因为初始化保留了一级分类数组没必要再发请求获取，这是更新对应状态即可

  handleCancel = () => {
    this.setState({ showstatus: 0 });
  }; //取消对话框的显示

  showAdd = () => {
    this.setState({ showstatus: 1 });
  }; //添加对话框的显示
  showDel = () => {
    this.setState({ showstatus: 2 });
  }; //删除对话框的显示

  addList = () => {
    console.log("add");
  }; //添加分类的函数

  delList = () => {
    console.log("delete");
  }; //删除分类的函数

  initList = async () => {
    const { parentId } = this.state;
    try {
      console.log(parentId);
      const { data } = await reqList(parentId); //await后获得的是promise处理的结果，解构赋值获得response.data,即返回数据
      //console.log(data);
      if (data.status === 0) {
        if (parentId === "0") {
          const listdata = data.data;
          this.setState({ listdata: listdata });
        } else {
          const sublistdata = data.data;
          const parentName = data.name;
          this.setState({
            sublistdata: sublistdata,
          });
        }
      } else {
        console.log("获取失败");
      } //异步获取axios请求数据
    } catch (err) {
      console.log(err);
    }
  };
  componentWillMount() {
    this.initColumn();
  } //第一次渲染提供数据
  componentDidMount() {
    this.initList();
  } //异步获取数据
  render() {
    const {
      listdata,
      sublistdata,
      parentId,
      parentName,
      showstatus,
    } = this.state;
    const title =
      parentId === "0" ? (
        "一级分类"
      ) : (
        <span>
          <a onClick={this.showlist}>一级分类</a>
          ---
          <span>{parentName}</span>
        </span>
      );
    const card = {
      title: title,
      extra: (
        <Button type="primary" icon={<PlusOutlined />} onClick={this.showAdd} />
      ),
    };
    return (
      <>
        <Card title={card.title} extra={card.extra} style={{ width: "100%" }}>
          <Table
            dataSource={parentId === "0" ? listdata : sublistdata}
            columns={this.columns}
            rowkey="_id"
            bordered
            pagination={{ pageSize: 6, showSizeChanger: false }}
          />
        </Card>

        <Modal
          title="添加分类"
          visible={showstatus === 1}
          onOk={this.addList}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
        <Modal
          title="删除分类"
          visible={showstatus === 2}
          onOk={this.delList}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </>
    );
  }
}
