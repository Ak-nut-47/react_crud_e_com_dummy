import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getProducts } from "../redux/productReducer/action";
import { useDispatch } from "react-redux";
const Navbar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  let ref = useRef();
  const paramObj = {
    params: {
      q: query && query,
    },
  };

  useEffect(() => {
    if (ref.current) {
      clearTimeout(ref.current);
    }
    ref.current = setTimeout(() => {
      dispatch(getProducts(paramObj));
    }, 1000);
  }, [query]);

  return (
    <NAVBAR>
      <h1>Product List</h1>
      <Link to={"/"}>Home</Link>

      <Link to={"/add-product"}>Admin Page</Link>
      <Link to={"/login"}>Login</Link>
      <Link to={"/edit/1"}>Edit Page</Link>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setQuery(e.target.value)}
      />
    </NAVBAR>
  );
};

const NAVBAR = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  background-color: #538353;
  margin-bottom: 25px;
  a {
    text-decoration: none;
    font-size: larger;
    color: white;
  }
`;

export default Navbar;
