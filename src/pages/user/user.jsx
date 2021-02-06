import React, { Component } from "react";
import { Card, Table, Button, Modal } from "antd";
import { reqUser } from "../../api/reqIndex";
export default class User extends Component {
  state = {
    userList: [],
  };
  initColumns = () => {
    return (this.columns = [
      {
        title: "用户名",
        dataIndex: "username",
      },
      {
        title: "邮箱",
        dataIndex: "email",
      },
      {
        title: "电话",
        dataIndex: "phone",
      },

      {
        title: "所属对象",
        dataIndex: "role_id",
      },
      {
        title: "操作",
        render: () => {
          return (
            <span>
              <a href>更新</a>&nbsp;&nbsp;
              <a href>删除</a>
            </span>
          );
        },
      },
    ]);
  };
  initUserList = async () => {
    const result = await reqUser();

    if (result.status === 0) {
      this.setState({ userList: result.data.users });
    } else {
      console.log("获取失败");
    }
  };
  componentDidMount() {
    this.initColumns();
    this.initUserList();
  }
  render() {
    const { userList } = this.state;
    const title = <Button type="primary">添加用户</Button>;
    return (
      <Card title={title}>
        <Table columns={this.columns} dataSource={userList}></Table>
      </Card>
    );
  }
}
