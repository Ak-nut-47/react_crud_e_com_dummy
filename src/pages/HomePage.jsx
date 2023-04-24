import React from "react";
import ProductList from "../components/ProductList";
import SideBar from "../components/SideBar";
import styled from "styled-components";
const HomePage = () => {
  return (
    <DIV>
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="productlist">
        <ProductList />
      </div>
    </DIV>
  );
};

export default HomePage;

const DIV = styled.div`
  display: flex;
  .sidebar {
    width: 15%;
    border-right: 5px solid #b9b9b9;
  }
`;
