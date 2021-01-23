import React, { Component } from "react";
import { Form, Input, Button, notification } from "antd";
import "./login.sass";
import logo from "../../assets/images/tou.jpg";
//import { reqLogin } from "../../api/reqIndex";
export default class Login extends Component {
  render() {
    const onFinish = (values) => {
      window.history.replaceState(
        "http://localhost:3000/login",
        "",
        "http://localhost:3000"
      );
      console.log(values);
      setTimeout(() => {
        window.location.reload();
      }, 2000); //先使用没请求的跳转，因为代理没弄好

      //   const { username, password } = values;
      //   reqLogin({ username, password }).then(function (response) {
      //   window.history.replaceState(
      //     "http://localhost:3000/login",
      //     "",
      //     "http://localhost:3000/"
      //   );
      //   window.location.reload();
      //   console.log(response);
      // })
      // .catch(function (error) {
      //   console.log(error);
      // });
    };
    const onFinishFailed = () => {
      notification.open({
        description: "请输入合法的用户名和密码",
      });
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
                  message: "请输入用户名",
                },
                {
                  min: 4,
                  message: "用户名至少为4位",
                },
                {
                  max: 12,
                  message: "用户名至多为12位",
                },
                {
                  pattern: /^[\u4E00-\u9FA5A-Za-z0-9_]+$/,
                  message: "用户名必须由数字、大小写字母和下划线组成",
                }, //声明式校验
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="密码"
              name="password"
              rules={[
                { required: true, message: "请输入密码" },
                {
                  validator: (_, value) => {
                    if (value.length < 4 && value) {
                      return Promise.reject("密码必须大于4位");
                    } else if (value.length > 12 && value) {
                      return Promise.reject("密码必须小于12位");
                    } else if (
                      !/^[\u4E00-\u9FA5A-Za-z0-9_]+$/.test(value) &&
                      value
                    ) {
                      return Promise.reject(
                        "密码必须由数字、大小写字母、下划线组成"
                      );
                    } else {
                      return Promise.resolve();
                    }
                  },
                }, //自定义校验
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item>
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
