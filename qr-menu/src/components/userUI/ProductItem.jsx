import React from "react";

const ProductItem = ({ pr }) => {
  return (
    <div key={pr.id} className="">
      <div className="flex gap-0.5 py-2.5">
        <h2 className="sm:text-center">{pr.headerIcon}</h2>
        <h2 className="sm:text-center">{pr.header}</h2>
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

export default ProductItem;
