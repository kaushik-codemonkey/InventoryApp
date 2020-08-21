import React, { useState, useEffect } from "react";
import Input from "./input";
import { Link, Redirect } from "react-router-dom";
import { LoginApi } from "../../container/api/auth";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { logoUrl } from "../logo";
export default function Login() {
  const [cred, setCred] = useState({ password: "", email: "" });
  const [res, setRes] = useState({});

  const dispatch = useDispatch();
  useEffect(() => {}, [cred]);
  function submitHandle() {
    LoginApi(cred, setRes);
  }
  useEffect(() => {
    console.log(res);
    if (res.statusText == "OK") {
      toast.success("You have been logged in!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      localStorage.setItem("auth_token", res.data.token);
      localStorage.setItem("uid", res.data.id);
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

  if (res && res.statusText === "OK") return <Redirect to="/home" />;
  return (
    <form class="form-signin">
      <img class="mb-4" src={logoUrl} alt="" width="100%" height="72" />
      <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
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
        Not Registered? <Link to="/register">Click here to register</Link>
      </div>
      <button
        class="btn btn-lg btn-primary btn-block"
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          submitHandle();
        }}
      >
        Sign in
      </button>
    </form>
  );
}
