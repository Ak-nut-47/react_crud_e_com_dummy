import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const SideBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // ----------url controlling sidebar------------------
  const initialGender = searchParams.getAll("gender");
  const initialCategory = searchParams.getAll("category");
  const initialOrder = searchParams.get("order");
  //------------------all states-------------------------------
  const [gender, setGender] = useState(initialGender || []);
  const [category, setCategory] = useState(initialCategory || []);
  const [order, setOrder] = useState(initialOrder || "");
  // -------------------------------------useEffect----------------------
  useEffect(() => {
    let params = {
      gender,
      category,
    };
    order && (params.order = order);
    setSearchParams(params);
  }, [gender, category, order]);
  // ----------------------------------------------------------handleCategory
  const handleCategory = (e) => {
    const { value } = e.target;

    let newCategory = [...category];
    if (newCategory.includes(value)) {
      newCategory = newCategory.filter((el) => el !== value);
    } else {
      newCategory.push(value);
    }
    setCategory(newCategory);
  };
  // ----------------------------------------------------------handleGender-------------
  const handleGender = (e) => {
    const { value } = e.target;

    let newGender = [...gender];
    if (newGender.includes(value)) {
      newGender = newGender.filter((el) => el !== value);
    } else {
      newGender.push(value);
    }
    setGender(newGender);
  };
  // -------------------------------------handleSort--------------------------------

  const handleSort = (e) => {
    const { value } = e.target;
    setOrder(value);
  };
  // ----------------------------------------------
  return (
    <div>
      <h3>Filter by Gender</h3>
      <div>
        <input
          type="checkbox"
          value={"male"}
          onChange={handleGender}
          checked={gender.includes("male")}
        />
        <label>Men</label>
      </div>
      <div>
        <input
          type="checkbox"
          value={"female"}
          onChange={handleGender}
          checked={gender.includes("female")}
        />
        <label>Women</label>
      </div>
      <div>
        <input
          type="checkbox"
          value={"kids"}
          onChange={handleGender}
          checked={gender.includes("kids")}
        />
        <label>Kids</label>
      </div>
      <br />
      <h3>Filter by Category </h3>
      <div>
        <input
          type="checkbox"
          value={"top-wear"}
          onChange={handleCategory}
          checked={category.includes("top-wear")}
        />
        <label>Top Wear</label>
      </div>
      <div>
        <input
          type="checkbox"
          value={"bottom-wear"}
          onChange={handleCategory}
          checked={category.includes("bottom-wear")}
        />
        <label>Bottom Wear </label>
      </div>
      <div>
        <input
          type="checkbox"
          value={"shoes"}
          onChange={handleCategory}
          checked={category.includes("shoes")}
        />
        <label>Shoes</label>
      </div>
      <br />
      <h3>Sort By Price</h3>
      <div onChange={handleSort}>
        <input
          type="radio"
          name="order"
          value={"asc"}
          defaultChecked={order === "asc"}
        />
        <label>Ascending</label>
        <input
          type="radio"
          name="order"
          value={"desc"}
          defaultChecked={order === "desc"}
        />
        <label>Descending</label>
      </div>
    </div>
  );
};

export default SideBar;
