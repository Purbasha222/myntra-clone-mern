import React from "react";
import { useEffect } from "react";
import { BASE_URL } from "../config.js";
import { useSelector } from "react-redux";
import { useState } from "react";
import AdminSidebar from "../components/AdminSidebar.jsx";

const AdminUsers = () => {
  const token = useSelector((state) => state.admin.token);
  const [users, setUsers] = useState(null);
  const [modalUserId, setModalUserId] = useState(null);
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch(`${BASE_URL}/api/admin/getAllUsers`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setUsers(data.users);
    };
    fetchUsers();
  }, []);
  const handleDeleteUser = async (id) => {
    await fetch(`${BASE_URL}/api/admin/deleteUser/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    setUsers(users.filter((user) => user._id !== id));
    setModalUserId(null);
  };
  return (
    <div className="p-15">
      {modalUserId !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setModalUserId(null)}
          ></div>
          <div className="relative bg-white rounded-md shadow-xl p-8 w-[380px] flex flex-col items-center gap-4 z-10">
            <p className="text-[#282c3f] font-bold text-lg text-center">
              Delete User
            </p>
            <p className="text-gray-500 text-sm text-center">
              Are you sure you want to delete this user? This action cannot be
              undone.
            </p>
            <div className="flex gap-3 mt-2 w-full">
              <button
                onClick={() => setModalUserId(null)}
                className="flex-1 border border-[#282c3f] text-[#282c3f] text-[13px] font-bold tracking-widest uppercase py-2.5 hover:bg-gray-100 transition-colors cursor-pointer"
              >
                GO BACK
              </button>
              <button
                onClick={() => handleDeleteUser(modalUserId)}
                className="flex-1 bg-myntra-kids text-white text-[13px] font-bold tracking-widest uppercase py-2.5 hover:bg-myntra-kids transition-colors cursor-pointer"
              >
                DELETE USER
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="max-w-275 mx-auto px-4 py-8 pb-16 flex gap-7 items-start">
        <div className="sticky top-0 shrink-0">
          <AdminSidebar />
        </div>
        <div className="flex-1 overflow-y-auto max-h-screen no-scrollbar">
          <p className="text-xl font-bold">All Users</p>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left border-b border-gray-300 ">
                <th className="py-3">Email</th>
                <th className="py-3">Verified</th>
                <th className="py-3">Joined</th>
                <th className="py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users.map((user) => (
                  <tr key={user._id} className="border-b border-gray-300">
                    <td className="py-3">{user.email}</td>
                    <td className="py-3">{user.isVerified ? "Yes" : "No"}</td>
                    <td className="py-3">
                      {new Date(user.createdAt).toDateString()}
                    </td>
                    <td className="py-3">
                      <button
                        className="text-myntra-men font-bold text-xs uppercase cursor-pointer"
                        onClick={() => setModalUserId(user._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminUsers;
