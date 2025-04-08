import { useEffect, useState } from "react";
import ProductList from "./components/userUI/ProductList";
import AdminModal from "./components/userUI/AdminModal";
import AdminModalOpen from "./components/adminUI/AdminModalOpen";
import AdminProductList from "./components/adminUI/AdminProductList";
import AddModal from "./components/adminUI/addmodals/AddModal";
import EditOpenModal from "./components/adminUI/EditOpenModal";
//NUMARALANDIRILABİLİR İLK MODAL 1 İKİNCİ MODAL 2 KAYDETMEK 3 KAYDEDİP ÇIKMAK 4

function App() {
  const [header, setHeader] = useState(
    () => localStorage.getItem("header") || ""
  );
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem("products");
    console.log("savedProducts", savedProducts);

    return savedProducts ? JSON.parse(savedProducts) : [];
  });

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);
  useEffect(() => {
    localStorage.setItem("header", header);
  }, [header]);

  const [admin, setAdmin] = useState({
    username: "Mcan",
    password: "123",
  });
  const [adminCheck, setAdminCheck] = useState(false);
  const [isOpenAdminModal, setIsOpenAdminModal] = useState(false);
  const [error, setError] = useState(null);
  const [isOpenAddModal, setIsOpenAddModal] = useState(false);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [selectedProduct, setselectedProduct] = useState(null);
  const adminCorrect = (isAdmin) => {
    if (
      isAdmin.username === admin.username &&
      isAdmin.password === admin.password
    ) {
      setAdminCheck(true);
      setError(null);
      setIsOpenAdminModal(false);
    } else setError("Yanlış Giriş Yaptınız!");
  };
  const addList = (newProduct) => {
    setProducts((prevProduct) => [
      ...prevProduct,
      {
        id: Math.random(),
        ...newProduct,
      },
    ]);
  };
  const editList = (updateProduct) => {
    setProducts((prevProduct) =>
      prevProduct.map((pro) =>
        pro.id === updateProduct.id ? updateProduct : pro
      )
    );
  };
  const editClick = (product) => {
    setIsOpenEditModal(true);
    setselectedProduct(product);
  };
  const deleteClick = (product) => {
    setProducts((prevProducts) =>
      prevProducts.filter((pro) => pro.id !== product.id)
    );
  };

  if (!adminCheck)
    return (
      <>
        <div className="flex justify-center  py-0.5">
          <button
            onClick={() => setIsOpenAdminModal(true)}
            className="text-[40px] btn-container cursor-pointer bg-white/50 px-1 mt-1 active:scale-95"
          >
            <span className="text-[#0e432f]"> Log In </span>
          </button>
        </div>
        <AdminModal
          openCheck={isOpenAdminModal}
          closeModal={() => setIsOpenAdminModal(false)}
          adminCorrect={adminCorrect}
          adminCheck={adminCheck}
          setAdminCheck={setAdminCheck}
          error={error}
          setError={setError}
        />
        <ProductList products={products} header={header} />
        {/* <p className="text-center">☺☻♥♦♣♠♂♀♪♫☼↕↨⌂</p> */}
      </>
    );
  return (
    <>
      <div className="flex justify-center  pb-1">
        <button
          onClick={() => setIsOpenAddModal(true)}
          className="text-[40px] btn-container cursor-pointer bg-white/50 px-1 mt-1 active:scale-95"
        >
          <span className="text-[#0e432f]">+Add </span>
        </button>
      </div>

      <AdminModalOpen
        openCheck={isOpenAdminModal}
        closeModal={() => setIsOpenAdminModal(false)}
        closeAdmin={() => setAdminCheck(false)}
      />
      <AddModal
        openCheck={isOpenAddModal}
        closeAddModal={() => setIsOpenAddModal(false)}
        addList={addList}
      />

      <AdminProductList
        products={products}
        header={header}
        setHeader={setHeader}
        editClick={editClick}
        deleteClick={deleteClick}
      />
      <EditOpenModal
        openCheck={isOpenEditModal}
        closeModal={() => setIsOpenEditModal(false)}
        editList={editList}
        product={selectedProduct}
        editProduct={editClick}
      />
      <div className="flex justify-center  py-0.5">
        <button
          onClick={() => setIsOpenAdminModal(true)}
          className="text-[40px] btn-container cursor-pointer bg-white/50 px-1 mt-1 active:scale-95"
        >
          <span className="text-[#0e432f]">Log Out </span>
        </button>
      </div>
      {/* <p className="text-center">☺☻♥♦♣♠♂♀♪♫☼↕↨⌂</p> */}
    </>
  );
}

export default App;
