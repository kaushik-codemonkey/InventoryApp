import axios from "axios";
import apiAddress from "../apiAddr";

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
      console.log(response);
      setRes(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      setRes(error.response);
    });
}

export { RegisterApi };
