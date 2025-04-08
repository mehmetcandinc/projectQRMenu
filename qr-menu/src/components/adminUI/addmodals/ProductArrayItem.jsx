import React from "react";

const ProductArrayItem = ({ pro, editClick, deleteClick }) => {
  const handleEditClick = () => {
    editClick(pro);
  };
  const handleDeleteClick = () => {
    deleteClick(pro);
  };
  return (
    <ul className="flex items-center gap-0.5 text-[20px]">
      <li>
        {pro.productName}= {pro.priceType}
        {pro.price}
      </li>
      <li>
        <button
          type="button"
          className="btn-container active:scale-95 cursor-pointer p-0.5"
          onClick={handleEditClick}
        >
          Edit
        </button>
        <button
          type="button"
          className="btn-container active:scale-95 cursor-pointer p-0.5"
          onClick={handleDeleteClick}
        >
          Delete
        </button>
      </li>
    </ul>
  );
};

export default ProductArrayItem;
