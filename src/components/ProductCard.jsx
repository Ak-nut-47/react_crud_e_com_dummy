import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteProduct, getProducts } from "../redux/productReducer/action";
import { Link } from "react-router-dom";
const ProductCard = ({ id, name, price, brand, category, image, gender }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteProduct(id)).then(() => dispatch(getProducts({})));
  };

  return (
    <DIV>
      <img src={image} alt="" />
      <h3>{name}</h3>
      <h3>Price : {price}</h3>
      <p>Brand : {brand}</p>
      <p>Category : {category}</p>
      <p>Gender : {gender}</p>
      <button onClick={handleDelete}>Delete</button>
      <button>
        <Link to={`/edit/${id}`}>Edit</Link>
      </button>
    </DIV>
  );
};

export default ProductCard;

const DIV = styled.div`
  border: 1px solid #a9a9a9;
  img {
    width: 40%;
  }
`;
