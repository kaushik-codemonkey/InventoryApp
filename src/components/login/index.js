import React from "react";
import Input from "./input";
export default function Login() {
  return (
    <form class="form-signin">
      <img class="mb-4" src="logo128.png" alt="" width="100%" height="72" />
      <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
      <Input
        labelfor="inputEmail"
        label="Email address"
        type="email"
        id="inputEmail"
        placeholder="Email address"
        required=""
        autofocus=""
      />
      <Input
        labelfor="inputPassword"
        label="Password"
        type="password"
        id="inputPassword"
        placeholder="Password"
        required=""
      />
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">
        Sign in
      </button>
    </form>
  );
}
