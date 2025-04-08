import React from "react";

const AdminProductItem = ({ pr, editClick, deleteClick }) => {
  const handleEditClick = () => {
    editClick(pr);
  };
  const handleDeleteClick = () => {
    deleteClick(pr);
  };
  return (
    <div key={pr.id} className="">
      <div className="flex gap-0.5 py-2.5">
        <h2 className="sm:text-center">{pr.headerIcon}</h2>
        <h2 className="sm:text-center">{pr.header}</h2>
      </div>
      <div className="flex items-center justify-center mb-2 gap-0.5">
        <button
          type="button"
          className="btn-container active:scale-95 cursor-pointer p-0.5 sm:p-1 text-[40px] bg-white/50 text-[#0e432f]"
          onClick={handleEditClick}
        >
          Edit
        </button>
        <button
          type="button"
          className="btn-container active:scale-95 cursor-pointer p-0.5 sm:p-1 text-[40px] bg-white/50 text-[#0e432f]"
          onClick={handleDeleteClick}
        >
          Delete
        </button>
      </div>
      {pr.product.map((pro) => (
        <ul
          key={pro.id}
          className="flex justify-between sm:px-4 text-xs sm:text-sm"
        >
          <li>{pro.productName}</li>
          <li>
            {pro.priceType}
            {pro.price}
          </li>
        </ul>
      ))}
    </div>
  );
};

export default AdminProductItem;
