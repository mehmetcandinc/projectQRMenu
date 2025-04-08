import React from "react";
import ProductArrayItem from "./ProductArrayItem";

const ProductArrayList = ({ productArray, editClick, deleteClick }) => {
  return (
    <>
      {productArray &&
        productArray.map((pro) => (
          <ProductArrayItem
            key={pro.id}
            pro={pro}
            editClick={editClick}
            deleteClick={deleteClick}
          />
        ))}
    </>
  );
};

export default ProductArrayList;
