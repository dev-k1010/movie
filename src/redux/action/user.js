import { message } from "antd";
import { SET_INFO } from "../constant/user";
import { https } from "../../service/config";

export let loginAction = (values, navigate) => {
  return (dispatch) => {
    https
      .post("/api/QuanLyNguoiDung/DangNhap", values)
      .then((res) => {
        message.success("Login thành công");
        let dataJson = JSON.stringify(res.data.content);
        localStorage.setItem("USER_INFO", dataJson);
        // console.log(res);
        dispatch({
          type: SET_INFO,
          //   Lấy data từ Api về
          payload: res.data.content,
        });
        navigate("/");
      })
      .catch((err) => {
        message.error("Login thất bại");
      });
  };
};
