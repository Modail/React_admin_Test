import React, { Component } from "react";
import { Card, Button, Table, Modal, message } from "antd";
import { reqRoles, reqAddroles } from "../../api/reqIndex";
import Addrolesform from "./components/addrolesform";
import AddrolesRightform from "./components/addroles-rightsfrom";

export default class Role extends Component {
  state = {
    roles: [],
    role: [],
    showstatus: 0,
  };
  initColumns = () => {
    return (this.columns = [
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
    ]);
  }; //大括号写法不能忘了return
  getColumns = async () => {
    const result = await reqRoles();

    if (result.status === 0) {
      const roles = result.data;
      this.setState({ roles });
    } else {
      console.log("huoqushibai");
    }
  };
  onRow = (role) => {
    return {
      onClick: (event) => {
        this.setState({ role });
      },
    };
  };
  Addroles = async () => {
    const roleName = this.Addrolesform.getFieldValue("addrolesinput");
    const result = await reqAddroles(roleName);
    if (result.data.status === 0) {
      message.success("添加成功");
      this.initColumns();
    } else {
      message.error("添加失败");
    }
    this.Addrolesform.resetFields();
    this.setState({ showstatus: 0 });
  };
  handleCancelAdd = () => {
    this.setState({ showstatus: 0 });
  };
  AddrolesRight = () => {
    this.setState({ showstatus: 0 });
  };
  handleCancelri = () => {
    this.setState({ showstatus: 0 });
  };
  getAddrolesRef = (Addrolesform) => {
    this.Addrolesform = Addrolesform;
  };

  componentDidMount() {
    this.initColumns();
    this.getColumns();
  }

  render() {
    const title = (
      <span>
        <Button
          type="primary"
          onClick={() => {
            this.setState({ showstatus: 1 });
          }}
        >
          创建角色
        </Button>
        &nbsp; &nbsp;
        <Button
          type="primary"
          onClick={() => {
            this.setState({ showstatus: 2 });
          }}
        >
          设置角色权限
        </Button>
      </span>
    );
    const { roles, role, showstatus } = this.state;

    return (
      <Card title={title}>
        <Table
          dataSource={roles}
          rowKey="_id"
          columns={this.columns}
          rowSelection={{
            type: "radio",
            selectedRowKeys: [role._id],
            onSelect: (role) => {
              // 选择某个radio时回调
              this.setState({
                role,
              });
            },
          }}
          onRow={this.onRow}
          bordered
        />
        <Modal
          title="添加角色"
          width="500px"
          visible={showstatus === 1}
          onOk={this.Addroles}
          onCancel={this.handleCancelAdd}
        >
          <Addrolesform getAddrolesRef={this.getAddrolesRef} />
        </Modal>
        <Modal
          title="设置角色权限"
          width="500px"
          visible={showstatus === 2}
          onOk={this.AddrolesRight}
          onCancel={this.handleCancelri}
        >
          <AddrolesRightform role={role} />
        </Modal>
      </Card>
    );
  }
}
