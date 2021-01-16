import React, { Component } from "react";
import { Form, Input, Button } from "antd";
import "./login.sass";
import logo from "./images/tou.jpg";

export default class Login extends Component {
  render() {
    const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
    return (
      <div className="login">
        <header className="login-header">
          <img alt="" src={logo} width="40px" height="40px" />
          <h1 className="login-title">后台管理系统</h1>
        </header>
        <section className="login-content">
          <h2 className="form-title">用户登录</h2>
      <Form    
      name="basic"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      >
      <Form.Item
        label="用户"
        name="username"
        rules={[
          {
            required: true,
            message: '请输入用户名',
          },
          {
            min: 4,
            message: '用户名至少为4位',
          },
          {
            max: 12,
            message: '用户名至多为12位',
          },
          {
            pattern: /^[\u4E00-\u9FA5A-Za-z0-9_]+$/,
            message: '用户名必须由数字、大小写字母和下划线组成',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="密码"
        name="password"
        rules={[
          {
            validator:(_,value)=>{
                if(!value)
                {
                  Promise.reject("请输入密码")
                }
                else if (value.length < 4)
                {
                  Promise.reject("密码必须大于4位")
                } 
                else if(value.length > 12)
                {
                  Promise.reject("密码必须小于12位")
                }
                else
                {
                  Promise.resolve()
                }
            }
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item >
        <Button type="primary" htmlType="submit">
          登录
        </Button>
      </Form.Item>
    </Form>
        </section>
      </div>
    );
  }
}
