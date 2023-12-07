import React, { useEffect, useState } from "react";
import { https } from "../../../service/config";
import { Tabs, Tooltip } from "antd";
import ItemMovie from "./ItemMovie";

export default function TabMovie() {
  const [tabMovie, settabMovie] = useState([]);
  useEffect(() => {
    https
      .get("/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01")
      .then((res) => {
        settabMovie(res.data.content);
      })
      .catch((err) => {});
  }, []);
  console.log(tabMovie);
  const onChange = (key) => {
    console.log(key);
  };
  const items = tabMovie.map((heThong, index) => {
    return {
      key: index,
      label: <img className="w-16" src={heThong.logo} alt="" />,
      children: (
        <Tabs
          style={{
            height: 600,
          }}
          tabPosition="left"
          items={heThong.lstCumRap.map((cumRap) => {
            {
              return {
                key: cumRap.diaChi,
                label: (
                  <div className="w-60">
                    <Tooltip title={cumRap.diaChi}>
                      <p>{cumRap.tenCumRap}</p>
                    </Tooltip>
                  </div>
                ),
                children: (
                  <div
                    style={{
                      height: 600,
                    }}
                    className="space-y-5 overflow-y-scroll"
                  >
                    {cumRap.danhSachPhim.map((phim, index) => {
                      return <ItemMovie data={phim} key={phim.maPhim} />;
                    })}
                  </div>
                ),
              };
            }
          })}
        />
      ),
    };
  });
  console.log("🙂 ~ items ~ items:", items);
  return (
    <div>
      <Tabs
        tabPosition="left"
        defaultActiveKey="1"
        items={items}
        onChange={onChange}
      />
    </div>
  );
}
// {
//   key:
//   label:
//   children:
//
