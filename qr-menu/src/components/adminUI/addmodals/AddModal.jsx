import React, { useState } from "react";
import AddInEditProductArray from "./AddInEditProductArray";
import ProductArrayList from "./ProductArrayList";

const AddProductModal = ({ openCheck, closeAddModal, addList }) => {
  const [formData, setFormData] = useState({
    headerIcon: "",
    header: "",
    product: [],
  });
  const [productArray, setProductArray] = useState([]);
  const [newProduct, setNewProduct] = useState({
    productName: "",
    priceType: "",
    price: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updateFormData = {
      ...formData,
      product: productArray,
    };
    addList(updateFormData);
    setFormData({
      headerIcon: "",
      header: "",
      product: [],
    });
    setProductArray([]);
    closeAddModal();
  };
  /*ADD PRODUCTS*/
  const addProduct = (newProduct) => {
    setProductArray((prevProduct) => [
      ...prevProduct,
      {
        id: Math.random(),
        ...newProduct,
      },
    ]);
  };
  const handleProductChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };
  const handleProductSubmit = (e) => {
    e.preventDefault();
    addProduct(newProduct);
    setNewProduct({
      productName: "",
      priceType: "",
      price: "",
    });
  };
  /*ADD INSIDE EDİT & DELETE PRODUCS*/
  const [isEditProduct, setIsEditProduct] = useState(false);
  const [isOpenProductModal, setisOpenProductModal] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const editProduct = (updateProduct) => {
    setProductArray((prevProducts) =>
      prevProducts.map((product) =>
        product.id === updateProduct.id ? updateProduct : product
      )
    );
  };

  const editClick = (pro) => {
    setIsEditProduct(true);
    setSelectedProduct(pro);
  };

  const deleteClick = (pro) => {
    setProductArray((prevData) =>
      prevData.filter((product) => product.id !== pro.id)
    );
  };

  if (!openCheck) return null;
  return (
    <>
      <div className="fixed btn-container p-2 sm:p-5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md  shadow-lg max-w-24">
        <h4 className="text-[60px]"> Add Header</h4>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center p-0 m-0 text-[30px]"
        >
          <label className="mb-0.5">
            <span className="text-[40px]"> Header Icon:</span>
            <span className="text-white text-[50px] sm:text-[70px] border-t border-l border-r bg-[#0e432f] rounded-t-4xl flex items-center justify-center">
              {formData.headerIcon}
            </span>
            <select
              className="border rounded-b-xs bg-[#0e432f] sm:text-[50px] text-center"
              name="headerIcon"
              value={formData.headerIcon}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select Header Icon
              </option>
              <option value="">None</option>
              <option value="♠">Beer Icon</option>
              <option value="⌂">Beer Icon 2</option>
              <option value="♂">Coffee Icon</option>
              <option value="♫">Coffee Icon 2</option>
              <option value="♣">Cola Icon</option>
              <option value="♦">Hamburger Icon</option>
              <option value="↨">Hot Dog Icon</option>
              <option value="☺">Meat Icon</option>
              <option value="♀">Plastic Cup Icon</option>
              <option value="♪">Plate Spoon Fork Icon</option>
              <option value="↕">Salad Icon</option>
              <option value="☼">Sandwich Icon</option>
              <option value="♥">Soup Icon</option>
              <option value="☻">Wine Icon</option>
            </select>
          </label>
          <label>
            Header:
            <input
              type="text"
              name="header"
              className="bg-gray-50 rounded-xs text-[#0e432f] pl-0.5"
              value={formData.header}
              onChange={handleChange}
            />
          </label>
          <div className="flex flex-row items-center justify-center py-2 gap-1">
            <button
              type="button"
              className="btn-container active:scale-95 cursor-pointer p-0.5 sm:p-1"
              onClick={() => setisOpenProductModal("open")}
            >
              Add Product
            </button>
            <button
              type="button"
              className="btn-container active:scale-95 cursor-pointer p-0.5 sm:p-1"
              onClick={closeAddModal}
            >
              Cancel
            </button>
          </div>
          <button
            type="submit"
            className="btn-container active:scale-95 cursor-pointer p-1 text-[#0e432f] bg-white animate-pulse"
          >
            Complete the Add
          </button>
        </form>
        {isOpenProductModal && (
          <div className="fixed btn-container p-2 sm:p-6 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#0e432f]/90 backdrop-blur-md  shadow-lg max-w-24">
            <div className="flex flex-col items-center p-0 m-0 text-[30px]">
              <form className="" onSubmit={handleProductSubmit}>
                <ProductArrayList
                  productArray={productArray}
                  editClick={editClick}
                  deleteClick={deleteClick}
                />
                <div className="flex flex-col gap-0.5">
                  <label>
                    Product Name:
                    <input
                      type="text"
                      name="productName"
                      className="bg-gray-50 rounded-xs text-[#0e432f] pl-0.5"
                      value={newProduct.productName}
                      onChange={handleProductChange}
                    />
                  </label>
                  <label>
                    Price Type:
                    <input
                      type="text"
                      name="priceType"
                      className="bg-gray-50 rounded-xs text-[#0e432f] pl-0.5"
                      size={1}
                      value={newProduct.priceType}
                      onChange={handleProductChange}
                    />
                  </label>
                  <label>
                    Price:
                    <input
                      type="text"
                      name="price"
                      className="bg-gray-50 rounded-xs text-[#0e432f] pl-0.5"
                      value={newProduct.price}
                      onChange={handleProductChange}
                    />
                  </label>
                </div>
                <div className="flex mt-1 gap-1">
                  <button
                    className="btn-container active:scale-95 cursor-pointer p-0.5 sm:p-1"
                    type="submit"
                  >
                    Add Product
                  </button>
                  <button
                    className="btn-container active:scale-95 cursor-pointer p-1 text-[#0e432f] bg-white animate-pulse"
                    type="button"
                    onClick={() => setisOpenProductModal(null)}
                  >
                    Save & Back
                  </button>
                </div>
              </form>
              <AddInEditProductArray
                editProduct={editProduct}
                isEditProduct={isEditProduct}
                closeEdit={() => setIsEditProduct(false)}
                pro={selectedProduct}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AddProductModal;
