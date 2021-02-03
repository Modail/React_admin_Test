import React, { Component } from "react";
import { Card, Button, Table } from "antd";
import { reqRoles } from "../../api/reqIndex";

export default class Role extends Component {
  state = {
    roles: [],
  };
  initColumns = () => {
    this.columns = [
      {
        title: "角色名称",
        dataIndex: "name",
      },
      {
        title: "创建时间",
        dataIndex: "create_time",
      },
      {
        title: "授权时间",
        dataIndex: "auth_time",
      },
      {
        title: "授权人",
        dataIndex: "auth_name",
      },
    ];
  };
  getColumns = async () => {
    const result = await reqRoles();

    if (result.status === 0) {
      const roles = result.data;
      this.setState({ roles });
    } else {
      console.log("huoqushibai");
    }
  };
  componentDidMount() {
    this.getColumns();
  }

  render() {
    const title = (
      <span>
        <Button type="primary">创建角色</Button>
        <Button type="primary">设置角色权限</Button>
      </span>
    );
    const { roles } = this.state;
    return (
      <Card title={title}>
        <Table
          dataSource={roles}
          rowKey="_id"
          columns={this.columns}
          bordered
        />
      </Card>
    );
  }
}
