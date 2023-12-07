import { Tooltip } from "antd";
import moment from "moment/moment";
import React from "react";

export default function ItemMovie({ data }) {
  console.log("🙂 ~ ItemMovie ~ data:", data);
  return (
    // <Tooltip>
    <div className="flex space-x-5">
      <img className="w-32 h-48" src={data.hinhAnh} alt="" />

      <div>
        <h2 className="text-2xl">{data.tenPhim}</h2>
        <div className="grid grid-cols-4 gap-4">
          {data.lstLichChieuTheoPhim.slice(0, 16).map((lichChieu) => {
            return (
              <span
                className="text-red-500 font-medium border-red-600 border rounded px-2"
                key={lichChieu.maLichChieu}
              >
                {moment(lichChieu.ngayChieuGioChieu).format("DD-MM-YY ~ hh:mm")}
              </span>
            );
          })}
        </div>
      </div>
    </div>
    // </Tooltip>
  );
}
