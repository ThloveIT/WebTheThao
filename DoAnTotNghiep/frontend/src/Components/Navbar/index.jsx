import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faClipboardList,
  faTruck,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const accessToken = localStorage.getItem("access_token");

  return (
    <nav className="bg-gray-800 p-4 fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-gray-400">
            Trang chủ
          </Link>
          <Link to="/product" className="text-white hover:text-gray-400">
            Sản phẩm
          </Link>
        </div>
        <div className="space-x-4">
          {!accessToken && (
            <Link to="/login" className="text-white hover:text-gray-400">
              Đăng nhập
            </Link>
          )}
          {accessToken && (
            <Link to="/userInfo">
              <FontAwesomeIcon
                icon={faUserCircle}
                style={{ color: "white", fontSize: "25px" }}
              />
            </Link>
          )}

          <Link to="/cart">
            {accessToken && (
              <FontAwesomeIcon
                icon={faCartShopping}
                style={{ color: "white", fontSize: "25px", marginLeft: "30px" }}
              />
            )}
          </Link>

          <Link to="/order">
            {accessToken && (
              <FontAwesomeIcon
                icon={faTruck}
                style={{ color: "white", fontSize: "25px", marginLeft: "30px" }}
              />
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
