import React, { useState, useEffect } from "react";
import Input from "../login/input";
import { Link, Redirect } from "react-router-dom";
import { RegisterApi } from "../../container/api/auth";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
export default function RegisterUser() {
  const [cred, setCred] = useState({ name: "", email: "", password: " " });
  const [res, setRes] = useState({});
  const submitHandle = () => {
    console.log(cred);
    RegisterApi(cred, setRes);
  };

  useEffect(() => {
    console.log(res.data);
    console.log(res);
    if (res.statusText == "OK") {
      toast.success("Registration successful! You can now login", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    if (res.data)
      toast.error(res.data, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
  }, [res]);

  if (res && res.statusText === "OK") return <Redirect to="/login" />;

  return (
    <form class="form-signin">
      <img class="mb-4" src="logo128.png" alt="" width="100%" height="72" />
      <h1 class="h3 mb-3 font-weight-normal">Registration</h1>

      <Input
        name="name"
        labelfor="inputName"
        label="name"
        type="text"
        id="inputName"
        placeholder="Full Name"
        required=""
        setCred={setCred}
      />
      <Input
        name="email"
        labelfor="inputEmail"
        label="Email address"
        type="email"
        id="inputEmail"
        placeholder="Email address"
        required=""
        autofocus=""
        setCred={setCred}
      />
      <Input
        name="password"
        labelfor="inputPassword"
        label="Password"
        type="password"
        id="inputPassword"
        placeholder="Password"
        required=""
        setCred={setCred}
      />

      <div class="checkbox mb-3">
        <label>
          <div class="checkbox mb-3">
            Already Registered? <Link to="/login">Click here to login</Link>
          </div>
        </label>
      </div>
      <button
        class="btn btn-lg btn-primary btn-block"
        onClick={(e) => {
          e.preventDefault();
          submitHandle();
        }}
      >
        Register
      </button>
    </form>
  );
}
