import React from "react";
// import ProductItem from "../userUI/ProductItem";
import AdminProductItem from "./AdminProductItem";

const ProductList = ({
  products,
  header,
  setHeader,
  editClick,
  deleteClick,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setHeader(header);
  };
  return (
    <div className="container group max-w-screen-lg mx-auto px-1">
      <div className="flex justify-center m-1">
        <form className="text-[30px]" onSubmit={handleSubmit}>
          <input
            type="text"
            className="bg-gray-50 rounded-xs text-[#0e432f] pl-0.5 mr-0.5"
            onChange={(e) => setHeader(e.target.value)}
            value={header}
          />
          <button
            className="text-[#0e432f] focus:bg-amber-400 btn-container cursor-pointer bg-white/50 px-1 mt-1 active:scale-95"
            type="submit"
          >
            Change Header
          </button>
        </form>
      </div>
      <h1 className="text-center main-header-font">{header}</h1>
      {products.map((pr) => (
        <AdminProductItem
          key={pr.id}
          pr={pr}
          editClick={editClick}
          deleteClick={deleteClick}
        />
      ))}
    </div>
  );
};

export default ProductList;
