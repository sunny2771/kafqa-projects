import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = ({ setMyuser }) => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginForm = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      alert("Please Enter All The Fields.");
    } else {
      axios
        .post("http://localhost:4000/login", {
          email: email,
          password: password,
        })
        .then((res) => {
          alert(res.data.Message);
          setMyuser(res.data.user);
          history.push("/");
        });
    }
  };

  return (
    <form
      onSubmit={(e) => {
        loginForm(e);
      }}
    >
      <div className="login">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input id="button" type="submit" value="login" />
        <div>or</div>
        <div
          className="button"
          onClick={() => {
            history.push("/register");
          }}
        >
          Register
        </div>
      </div>
    </form>
  );
};

export default Login;
