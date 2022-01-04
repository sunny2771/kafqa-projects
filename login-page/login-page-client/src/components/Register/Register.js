import React, { useState } from "react";
import "./Register.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Register = () => {
  const history = useHistory();

  const [user, setUser] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reEnterPassword, setReEnterPassword] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      password !== reEnterPassword
    ) {
      alert("required all field");
    } else {
      axios
        .post("http://localhost:4000/register", {
          name: name,
          email: email,
          password: password,
          reEnterPassword: reEnterPassword,
        })
        .then((response) => {
          alert(response.data.Message);
          history.push("/login");
        });
    }
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          onSubmitHandler(e);
        }}
        className="register"
      >
        <h2>Register</h2>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="Password"
          placeholder=" Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="Password"
          placeholder="Re-enter Password"
          value={reEnterPassword}
          onChange={(e) => setReEnterPassword(e.target.value)}
        />
        <input id="button" type="submit" value="Register" />
        <div>or</div>
        <div
          className="button"
          onClick={() => {
            history.push("/login");
          }}
        >
          Login
        </div>
      </form>
    </div>
  );
};

export default Register;
