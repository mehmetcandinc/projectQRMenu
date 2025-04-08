import React, { useState } from "react";

const AdminModal = ({
  openCheck,
  closeModal,
  adminCorrect,
  error,
  setError,
}) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    if (error) setError(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    adminCorrect(formData);
    setFormData({
      username: "",
      password: "",
    });
    if (error === false) closeModal();
  };
  if (!openCheck) return null;
  return (
    <div className="fixed btn-container p-3 sm:p-6 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md  shadow-lg max-w-24">
      <h4 className="text-[60px]">Admin Log In</h4>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center p-0 m-0 text-[30px]"
      >
        <label>
          Username:
          <input
            type="text"
            name="username"
            className="bg-gray-50 rounded-xs text-[#0e432f] pl-0.5"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            className="bg-gray-50 rounded-xs text-[#0e432f] pl-0.5"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        {error && (
          <div className="text-red-500 bg-white/40 rounded-b-sm p-0.5">
            {error}
          </div>
        )}
        <div className="flex flex-row items-center justify-center py-2 gap-1">
          <div></div>
          <button
            type="submit"
            className="btn-container active:scale-95 cursor-pointer p-0.5 sm:p-1"
          >
            Log In
          </button>
          <button
            type="button"
            className="btn-container active:scale-95 cursor-pointer p-0.5 sm:p-1"
            onClick={closeModal}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminModal;
