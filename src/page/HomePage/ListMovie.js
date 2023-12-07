import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "antd";
import { https } from "../../service/config";
import { NavLink } from "react-router-dom";
const { Meta } = Card;
export default function ListMovie() {
  const [movieArr, setmovieArr] = useState([]);
  useEffect(() => {
    // axios({
    //   url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP09",
    //   method: "GET",
    //   headers: {
    //     TokenCybersoft:
    //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1NCIsIkhldEhhblN0cmluZyI6IjE0LzA1LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxNTY0NDgwMDAwMCIsIm5iZiI6MTY4NzcxMjQwMCwiZXhwIjoxNzE1NzkyNDAwfQ.cy8EAM6hrKh2o6c9THZW5lrKeOEmQXIDgFVyIf7K_rU",
    //   },
    // })
    https
      .get("/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP09")
      .then((res) => {
        console.log("🙂 ~ useEffect ~ res:", res.data.content);
        setmovieArr(res.data.content);
      })
      .catch((err) => {
        console.log("🙂 ~ useEffect ~ err:", err);
      });
  }, []);
  return (
    // container != container bootstrap
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 container">
      {movieArr.map((item, index) => {
        // key = index;
        return (
          <Card
            style={{ width: "100%" }}
            className=""
            hoverable
            cover={<img alt="example" src={item.hinhAnh} />}
          >
            <Meta title={item.tenPhim} description="www.instagram.com" />
            <NavLink
              to={`/detail/${item.maPhim}`}
              className="px-5 py-2 rounded border-2 border-red-500 block text-center"
            >
              Xem chi tiết
            </NavLink>
          </Card>
        );
      })}
    </div>
  );
}
