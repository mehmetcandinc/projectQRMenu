const AdminModalOpen = ({ openCheck, closeModal, closeAdmin }) => {
  if (!openCheck) return null;
  return (
    <div className="fixed btn-container p-5 sm:p-6 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md  shadow-lg max-w-24">
      <h4 className="text-[55px]">Admin Log Out?</h4>
      <form className="flex flex-col items-center p-0 m-0 text-[30px]">
        <div className="flex flex-row items-center justify-center py-2 gap-1">
          <button
            type="button"
            className=" btn-container active:scale-95 cursor-pointer p-0.5 sm:p-1 whitespace-nowrap"
            onClick={closeAdmin}
          >
            Log Out
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

export default AdminModalOpen;
