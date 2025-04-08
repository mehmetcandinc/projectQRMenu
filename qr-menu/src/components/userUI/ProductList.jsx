import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ products, header }) => {
  return (
    <>
      <div className="container group max-w-screen-lg mx-auto px-1">
        {!header && (
          <div>
            <h1 className="text-[40px] text-center pt-0.5 main-header-font">
              Click "Log In"
            </h1>
            <h1 className="text-[50px] text-center p-1 main-header-font">
              Give Your MENU NAME, Add CATEGORIES & Choose Your PRODUCT. Start
              Using NOW.
            </h1>
          </div>
        )}
        <h1 className="text-center main-header-font ">{header}</h1>
        {products.map((pr) => (
          <ProductItem key={pr.id} pr={pr} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
