import React, { useState } from "react";
import ProfileSidebar from "../components/ProfileSidebar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../config.js";
import { logout } from "../redux/SLice/authSlice";

const DeleteAccount = () => {
  const email = useSelector((state) => state.auth.email);
  const name = useSelector((state) => state.auth.name);
  const token = useSelector((state) => state.auth.token);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDeleteConfirm = async () => {
    const res = await fetch(`${BASE_URL}/auth/profile/delete-account`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.ok) {
      dispatch(logout());
      navigate("/login");
    }
  };

  return (
    <div className="p-15">
      {showModal === true && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          />
          <div className="relative bg-white rounded-md shadow-xl p-8 w-[380px] flex flex-col items-center gap-4 z-10">
            <p className="text-gray-500 text-sm text-center">
              Are you sure you want to delete account?
            </p>
            <div className="flex gap-3 mt-2 w-full">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 border border-[#282c3f] text-[#282c3f] text-[13px] font-bold tracking-widest uppercase py-2.5 hover:bg-gray-100 transition-colors cursor-pointer"
              >
                GO BACK
              </button>
              <button
                onClick={handleDeleteConfirm}
                className="flex-1 bg-myntra-kids text-white text-[13px] font-bold tracking-widest uppercase py-2.5 hover:bg-myntra-kids transition-colors cursor-pointer"
              >
                DELETE ACCOUNT
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-275 mx-auto px-4 py-8 pb-16 flex gap-7 items-start">
        <ProfileSidebar />
        <main className="flex-1 flex flex-col gap-4">
          <p className="text-xl font-bold">Delete Account</p>
          <div className="flex flex-col items-start gap-3">
            <p className="font-semibold">{name}</p>
            <p className="font-semibold">{email}</p>
            <button
              onClick={() => setShowModal(true)}
              className="bg-myntra-kids text-white px-4 py-2 font-bold cursor-pointer rounded-md"
            >
              Delete Account
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DeleteAccount;
