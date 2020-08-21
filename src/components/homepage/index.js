import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { LogoutApi } from "../../container/api/auth";
import { Redirect } from "react-router";
export default function InventoryHome() {
  const [res, setRes] = useState({});
  useEffect(() => {
    res.status &&
      toast.success("See you soon...!", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
  }, [res]);
  const clickHandle = () => {
    LogoutApi(localStorage.getItem("auth_token"), setRes);
  };
  if (res.status === 200) return <Redirect to="/" />;
  return (
    <div>
      <h1>
        I Know you are eager to see this page, but, Page is under Construction
        :C
      </h1>
      <button
        onClick={(e) => {
          e.preventDefault();
          clickHandle();
        }}
      >
        Logout
      </button>
    </div>
  );
}
