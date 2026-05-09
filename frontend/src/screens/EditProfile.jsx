import React, { useState } from "react";
import ProfileSidebar from "../components/ProfileSidebar";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../redux/SLice/authSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const email = useSelector((state) => state.auth.email);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = () => {
    if (!name || !gender) {
      toast.error("Both fields are mandatory!");
      return;
    }
    dispatch(updateProfile({ name, gender }));
    toast.success("Changes saved successfully!");
    navigate("/profile");
  };
  return (
    <div className="p-15">
      <div className="max-w-275 mx-auto px-4 py-8 pb-16 flex gap-7 items-start">
        <ProfileSidebar />
        <main className="flex-1 flex flex-col gap-4">
          <p className="text-xl font-bold">Edit Profile</p>
          <div className="flex flex-col items-start gap-3">
            <label className="font-semibold">Your Name</label>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="p-2 border border-gray-300 rounded-sm w-full outline-none"
            />
            <label className="font-semibold">Your Email</label>
            <input
              type="text"
              placeholder="Your email"
              value={email}
              readOnly
              className="p-2 border border-gray-300 rounded-sm w-full outline-none cursor-not-allowed"
            />
            <label className="font-semibold">Your Gender</label>
            <select
              name="Gender"
              value={gender}
              onChange={(event) => setGender(event.target.value)}
              className="p-2 border border-gray-300 rounded-sm w-full outline-none"
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <input
              type="submit"
              value="Submit"
              onClick={handleSubmit}
              className="border border-myntra-studio text-myntra-studio text-[13px] font-bold tracking-widest uppercase px-5 py-2.5 transition-colors duration-150 hover:bg-[#282c3f] hover:text-white cursor-pointer"
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default EditProfile;
