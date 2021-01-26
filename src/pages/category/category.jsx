import React, { Component } from "react";
import { Card, Table, Button, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Space } from "antd";
import { reqList, reqListUpdate } from "../../api/reqIndex";
import Addform from "./components/addForm";
import Updateform from "./components/updateForm";

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listdata: [],
      sublistdata: [],
      parentId: "0",
      parentName: "",
      showstatus: 0, //对话框的显示状态 ，0 都不显示，1添加显示，2删除显示
    };
  }

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
            <a href onClick={() => this.showUpdate(listdata)}>
              修改商品{" "}
            </a>
            {/*向事件回调函数传递参数，先定义一个匿名函数外包，再调用定义的函数*/}
            {this.state.parentId === "0" ? (
              <a href onClick={() => this.showSublist(listdata)}>
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
    this.updateform.resetFields();
  }; //取消对话框的显示

  showAdd = () => {
    this.setState({ showstatus: 1 });
  }; //添加对话框的显示

  showUpdate = (listdata) => {
    //保存状态对象
    this.rowlistName = listdata.name; //listdat在column中为对象传入

    this.setState({ showstatus: 2 });
  }; //删除对话框的显示

  addList = () => {
    console.log("add");
  }; //添加分类的函数

  getUpdataRef = (updateform) => {
    this.updateform = updateform;
  }; //获得updateform实例
  UpdateList = async () => {
    //1.发送请求更新
    const categoryName = this.updateform.getFieldValue("updateinput");
    const categoryId = this.rowlistdata._id;
    try {
      const result = await reqListUpdate(categoryId, categoryName);
      console.log(result);
      if (result.status === 0) {
        this.initList(); //2.成功的话更新列表
      } else {
        console.log("更新失败");
      }
    } catch (err) {
      console.log(err);
    }
    this.updateform.resetFields();
    //3.关闭对话框
    this.setState({ status: 0 });
    //这里更新了状态，ref会重新加载，即调用这个函数ref调用两次，console出来的结果为undefined
  }; //修改分类的函数

  initList = async () => {
    const { parentId } = this.state;
    try {
      const result = await reqList(parentId); //await后获得的是promise处理的结果，在axios拦截器返回成功的data，避免了不必要的代码冗余

      if (result.status === 0) {
        if (parentId === "0") {
          const listdata = result.data;
          this.setState({ listdata: listdata });
        } else {
          const sublistdata = result.data;
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

  componentDidMount() {
    this.initColumn();
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
          <button onClick={this.showlist}>一级分类</button>
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
          width="500px"
          visible={showstatus === 1}
          onOk={this.addList}
          onCancel={this.handleCancel}
        >
          <Addform />
        </Modal>
        <Modal
          title="修改分类"
          width="500px"
          visible={showstatus === 2}
          onOk={this.UpdateList}
          onCancel={this.handleCancel}
        >
          <Updateform
            rowlistName={this.rowlistName}
            getUpdataRef={this.getUpdataRef}
          />
        </Modal>
      </>
    );
  }
}
