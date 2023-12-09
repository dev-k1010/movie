import React from "react";
import { useSelector } from "react-redux";
import { RingLoader } from "react-spinners";

export default function Spinner() {
  let isLoading = useSelector((state) => state.spinnerReducer.isLoading);
  console.log("🙂 ~ Spinner ~ isLoading:", isLoading);
  return isLoading ? (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "black",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <RingLoader size={100} speedMultiplier={2} color="#36d7b7" />;
    </div>
  ) : (
    <></>
  );
}
// API 3 trạng thái
// bật 1 tắt 2
