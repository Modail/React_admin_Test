import React, { Component } from "react";
import { Card, Table, Button, Modal } from "antd";
import { reqUser } from "../../api/reqIndex";
import AddUserform from "./components/addUserform";
export default class User extends Component {
  state = {
    userList: [],
    roleList: [],
    showstatus: 0,
  };
  initRolesName = (roleList) => {
    return roleList.reduce((pre, item) => {
      pre[item._id] = item.name;
      return pre;
    }, {});
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
        render: (role_id) => {
          return this.RolesName[role_id];
        },
      },
      {
        title: "操作",
        render: () => {
          return (
            <span>
              <a
                href
                onClick={() => {
                  this.setState({ showstatus: 2 });
                }}
              >
                更新
              </a>
              &nbsp;&nbsp;
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
      const { users, roles } = result.data;
      this.setState({ roleList: roles, userList: users });
      this.RolesName = this.initRolesName(roles);
      console.log(this.RolesName);
    } else {
      console.log("获取失败");
    }
  };
  addUser = () => {
    this.setState({ showstatus: 0 });
  };
  handleCancelAdd = () => {
    this.setState({ showstatus: 0 });
  };
  componentDidMount() {
    this.initColumns();
    this.initUserList();
  }
  render() {
    const { userList, showstatus } = this.state;

    const title = (
      <Button
        type="primary"
        onClick={() => {
          this.setState({ showstatus: 1 });
        }}
      >
        添加用户
      </Button>
    );
    return (
      <Card title={title}>
        <Table columns={this.columns} dataSource={userList}></Table>
        <Modal
          title={showstatus === 1 ? "添加用户" : "更新用户"}
          width="500px"
          visible={showstatus === 1 || showstatus === 2}
          onOk={this.addUser}
          onCancel={this.handleCancelAdd}
        >
          <AddUserform />
        </Modal>
      </Card>
    );
  }
}
