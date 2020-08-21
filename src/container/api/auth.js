import axios from "axios";
import apiAddress from "../apiAddr";

// RegisterAPI
function RegisterApi({ name, email, password }, setRes) {
  axios({
    method: "POST",
    url: `${apiAddress}/user/register`,
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    timeout: 5000,
    data: {
      name,
      email,
      password,
    },
  })
    .then(function (response) {
      // handle success
      setRes(response);
    })
    .catch(function (error) {
      // handle error
      setRes(error.response);
    });
}
// LoginAPI
function LoginApi({ email, password }, setRes) {
  axios({
    method: "POST",
    url: `${apiAddress}/user/login`,
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    timeout: 5000,
    data: {
      email,
      password,
    },
  })
    .then(function (response) {
      // handle success
      setRes(response);
    })
    .catch(function (error) {
      // handle error
      setRes(error.response);
    });
}
// Signout API
function LogoutApi(token, setRes) {
  axios({
    method: "POST",
    url: `${apiAddress}/user/logout`,
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
      auth_token: token,
    },
    timeout: 5000,
    data: {},
  })
    .then(function (response) {
      // handle success
      setRes(response);
    })
    .catch(function (error) {
      // handle error
      setRes(error.response);
    });
}
export { RegisterApi, LoginApi, LogoutApi };
