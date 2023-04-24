import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editProduct } from "../redux/productReducer/action";

const EditPage = () => {
  const [price, setPrice] = useState("");
  const { id } = useParams();
  const products = useSelector((store) => store.productReducer.products);
  const dispatch = useDispatch();

  useEffect(() => {
    const data = products.find((el) => el.id === +id);
    setPrice(data.price);
  }, []);

  const handleChange = (e) => {
    setPrice(e.target.value);
  };
  const handleEdit = () => {
    const data = { price };
    dispatch(editProduct(id, data));
  };
  return (
    <div>
      <h2>{id}</h2>
      <input type="number" value={price} onChange={handleChange} />
      <button onClick={handleEdit}>Update</button>
    </div>
  );
};

export default EditPage;
