import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addProducts } from "../redux/productReducer/action";

const initialState = {
  name: "",
  image: "",
  brand: "",
  price: "",
  category: "",
  gender: "",
};
const Admin = () => {
  const [products, setProducts] = useState(initialState);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducts({ ...products, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(products);
    dispatch(addProducts(products));
    setProducts(initialState);
  };
  return (
    <DIV>
      <form onSubmit={handleSubmit}>
        <h1>Add Product</h1>
        <input
          type="text"
          name="name"
          value={products.name}
          placeholder="Product Name"
          onChange={handleChange}
        />

        <input
          type="text"
          name="image"
          value={products.image}
          placeholder="Product Image"
          onChange={handleChange}
        />

        <input
          type="text"
          name="brand"
          value={products.brand}
          placeholder="Product Brand"
          onChange={handleChange}
        />

        <input
          type="number"
          name="price"
          value={products.price}
          placeholder="Price"
          onChange={handleChange}
        />

        <select
          name="category"
          value={products.category}
          onChange={handleChange}
        >
          <option value="">Select Category</option>
          <option value="top-wear">Top Wear</option>
          <option value="bottom-wear">Bottom Wear</option>
          <option value="shoes">Shoes</option>
        </select>

        <select name="gender" value={products.gender} onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="male">Men</option>
          <option value="female">Woman</option>
          <option value="kids">Kids</option>
        </select>
        <button type="submit">Add Product</button>
      </form>
    </DIV>
  );
};
const DIV = styled.div`
  width: 400px;
  margin: auto;
  border: 1px solid #c9c9c9;
  padding: 25px;
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  input {
    height: 40px;
  }
  select {
    height: 40px;
  }
  button {
    width: 50%;
    height: 35px;
    cursor: pointer;
    border: none;
  }
`;
export default Admin;
