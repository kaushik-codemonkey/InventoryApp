import React, { useState, useEffect } from "react";
import Input from "./input";
import { Link } from "react-router-dom";
export default function Login() {
  const [cred, setCred] = useState({ password: "", email: "" });
  useEffect(() => {
    console.log(cred);
  }, [cred]);
  function submitHandle() {
    console.log(cred);
  }
  return (
    <form class="form-signin">
      <img class="mb-4" src="logo128.png" alt="" width="100%" height="72" />
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
