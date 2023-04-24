import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_PRODUCT_SUCCESS } from "../redux/actionTypes";
import { getProducts } from "../redux/productReducer/action";
import ProductCard from "./ProductCard";
import styled from "styled-components";
import { useLocation, useSearchParams } from "react-router-dom";
const ProductList = () => {
  const [searchParams] = useSearchParams([]);
  const dispatch = useDispatch();
  const products = useSelector((store) => store.productReducer.products);
  const location = useLocation();

  let obj = {
    params: {
      gender: searchParams.getAll("gender"),
      category: searchParams.getAll("category"),
      _sort: searchParams.get("order") && "price",
      _order: searchParams.get("order"),
    },
  };

  useEffect(() => {
    dispatch(getProducts(obj));
  }, [location.search]);
  return (
    <DIV>
      {products.length > 0 &&
        products.map((el) => {
          return <ProductCard key={el.id} {...el} />;
        })}
    </DIV>
  );
};
const DIV = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 20px;
`;
export default ProductList;
