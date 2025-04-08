import React, { useEffect, useState } from "react";

const AddInEditProductArray = ({
  editProduct,
  isEditProduct,
  closeEdit,
  pro,
}) => {
  const [arrayFormData, setArrayFormData] = useState({
    productName: "",
    priceType: "",
    price: "",
  });

  useEffect(() => {
    if (pro) setArrayFormData(pro);
  }, [pro]);

  const handleArrayChange = (e) => {
    const { name, value } = e.target;
    setArrayFormData((prevArr) => ({
      ...prevArr,
      [name]: value,
    }));
  };
  const handleArraySubmit = (e) => {
    e.preventDefault();
    editProduct(arrayFormData);
    closeEdit();
  };
  if (!isEditProduct) return null;
  return (
    <form
      className="fixed btn-container p-2 sm:p-4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#0e432f]/90 backdrop-blur-md  shadow-lg max-w-24"
      onSubmit={handleArraySubmit}
    >
      <div className="flex flex-col items-center justify-center mb-0.5">
        <label className="flex flex-col items-center justify-center">
          Product Name:
          <input
            type="text"
            name="productName"
            size={5}
            className="bg-gray-50 rounded-xs text-[#0e432f] pl-0.5"
            onChange={handleArrayChange}
            value={arrayFormData.productName}
          />
        </label>
        <label className="flex flex-col items-center justify-center">
          Price Type:
          <input
            type="text"
            name="priceType"
            size={5}
            className="bg-gray-50 rounded-xs text-[#0e432f] pl-0.5"
            onChange={handleArrayChange}
            value={arrayFormData.priceType}
          />
        </label>
        <label className="flex flex-col items-center justify-center">
          Price:
          <input
            type="text"
            name="price"
            size={5}
            className="bg-gray-50 rounded-xs text-[#0e432f] pl-0.5"
            onChange={handleArrayChange}
            value={arrayFormData.price}
          />
        </label>
      </div>
      <div className="flex gap-0.5 items-center justify-center">
        <button
          className="btn-container active:scale-95 cursor-pointer p-0.5"
          type="submit"
        >
          Save Product
        </button>
        <button
          className="btn-container active:scale-95 cursor-pointer p-0.5"
          type="button"
          onClick={closeEdit}
        >
          Close Product
        </button>
      </div>
    </form>
  );
};

export default AddInEditProductArray;
