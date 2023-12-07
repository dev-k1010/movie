import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { https } from "../../service/config";
import { Rate } from "antd";

export default function DetailPage() {
  const [detail, setDetail] = useState({});
  let { idPhim } = useParams();
  useEffect(() => {
    https
      .get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${idPhim}`)
      .then((res) => {
        console.log("🙂 ~ .then ~ res:", res.data.content);
        setDetail(res.data.content);
      })
      .catch((err) => {
        console.log("🙂 ~ useEffect ~ err:", err);
      });
  }, []);
  return (
    <div className="container flex items-center">
      <img src={detail.hinhAnh} className="w-96" alt="" />
      <div className=" text-center space-y-10 flex-grow">
        <h2 className="text-5xl text-blue-900 animate-bounce">{detail.tenPhim}</h2>
        <Rate
          style={{ fontSize: 20, color: "red" }}
          allowHalf
          count={10}
          value={detail.danhGia}
          className="ml-14"
        />
      </div>
    </div>
  );
}
