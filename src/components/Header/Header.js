import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userReducer } from "../../redux/reducer/reducer";

export default function Header() {
  // useNavigate dùng để điều hướng trang, không gây reload
  let navigate = useNavigate();

  let user = useSelector((state) => state.userReducer.user);
  let renderMenu = () => {
    if (user) {
      return (
        <>
          <span>{user.hoTen}</span>
          <button
            className="theme"
            onClick={() => {
              window.location.href = "/";
              localStorage.removeItem("USER_INFO");
            }}
          >
            Log out
          </button>
        </>
      );
    } else {
      return (
        <button
          className="theme"
          onClick={() => {
            window.location.href = "/login";
          }}
        >
          Log in
        </button>
      );
    }
  };
  return (
    <div>
      <div className="container h-20 flex items-center justify-between">
        <span
          onClick={() => {
            navigate("/");
          }}
          className="font-medium text-red-500 text-3xl animate-pulse"
        >
          CyberFlix
        </span>
        <div className="space-x-5">{renderMenu()}</div>
      </div>
    </div>
  );
}
