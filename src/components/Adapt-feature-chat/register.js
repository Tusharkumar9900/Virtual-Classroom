import React, { useState } from "react";
import "../auth/register.css";
import axios from "axios";
import { Alert } from "react-bootstrap";
import Reg from "../img/register2.svg";
import Profile from "../img/profile.svg";

export default function Register(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [show, setShow] = useState(false);

  const registerUser = (e) => {
    e.preventDefault();
    const data = {
      name: username,
      email,
      password
    };
    axios
      .post("http://localhost:5000/api/auth/register", data)
      .then((res) => {
        sessionStorage.setItem("email", res.data.user.email);
        sessionStorage.setItem("name", res.data.user.name);
        props.setName(res.data.user.name);
        props.setEmail(res.data.user.email);
        props.setLogin(true);
      })
      .catch((err) => {
        setMsg(err.response.data.msg);
        setShow(true);
      });
  };

  // Error message component
  const AlertDismissible = () => {
    if (show) {
      return (
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          <p>{msg}</p>
        </Alert>
      );
    }
    return null;
  };

  return (
    <div className="register">
      <div className="forms-container">
        <img src={Reg} className="register-image" alt="register"></img>
        <div className="forms-container-div">
          <form className="sign-in-form">
            <AlertDismissible />
            <img
              className="login-profile"
              src={Profile}
              alt="profile-girl"
            ></img>
            <h2 className="title">Register</h2>
            <div className="input-register">
              <i class="fas fa-user"></i>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input-register">
              <i class="fas fa-user"></i>
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-register">
              <i class="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className="old-user"
              onClick={() => {
                props.setregorlog(false);
              }}
            >
              Already have an Account?
            </button>
            <input
              className="submit-register"
              type="submit"
              value="Register"
              onClick={(e) => registerUser(e)}
            ></input>
          </form>
        </div>
      </div>
    </div>
  );
}
