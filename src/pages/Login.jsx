import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { login } from "../redux/authReducer/action";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const auth = useSelector((store) => store.authReducer.isAuth);
  const err = useSelector((store) => store.authReducer.isError);

  const handleLogin = () => {
    const userData = { email, password };
    dispatch(login(userData)).then(() => navigate(location.state));
  };
  return (
    <WRAPPER auth={auth} error={err}>
      <h2>{auth && !err ? "Login Successfull" : "Login To Continue"}</h2>
      <input
        type="email"
        name=""
        id=""
        value={email}
        placeholder="User Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        name=""
        id=""
        value={password}
        placeholder="User Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={handleLogin}>Log In</button>
    </WRAPPER>
  );
};

export default Login;

const WRAPPER = styled.div`
  padding: 30px 10px;
  border: 1px solid #a9a9a9;
  background-color: #a7dff3;
  input {
    padding: 10px;
    border: ${({ error }) => (error ? "1px solid red" : "1px solid grey")};
  }
  button {
    background-color: teal;
    color: white;
    padding: 10px;
  }
  button:hover {
    background-color: #0a9f9f;
    color: #e9e7e7;
    cursor: pointer;
  }
  h2 {
    color: ${({ auth }) => (auth ? "green" : "red")};
  }
`;
