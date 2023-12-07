import React from "react";
import { Button, Checkbox, Form, Input, message } from "antd";
import { https } from "../../service/config";
import { useDispatch } from "react-redux";
import { SET_INFO } from "../../redux/constant/user";
import { useNavigate } from "react-router-dom";
import { loginAction } from "../../redux/action/user";
const FormLogin = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const onFinishV2 = (values) => {
    https
      // values đưa dữ liệu từ input lên cho data
      .post("/api/QuanLyNguoiDung/DangNhap", values)
      .then((res) => {
        // Đẩy data xuống localStorage để khi load trang không bị mât thông tin đăng nhập
        let dataJson = JSON.stringify(res.data.content);
        localStorage.setItem("USER_INFO", dataJson);
        // console.log(res);
        message.success("Đăng nhập thành công");
        dispatch({
          type: SET_INFO,
          //   Lấy data từ Api về
          payload: res.data.content,
        });
        // Chuyển trang khi đăng nhập thành công
        // đẩy thông tin lên redux
      })
      .catch((err) => {
        // console.log(err);
        message.error("Đăng nhập thất bại");
      });
    console.log("Success:", values);
  };
  const onFinish = (values) => {
    dispatch(loginAction(values,navigate));
    // navigate("/");
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  // API

  return (
    <Form
      className="w-1/2"
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="taiKhoan"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="matKhau"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button
          className="bg-blue-500 hover:text-white hover:border-transparent"
          htmlType="submit"
        >
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormLogin;
