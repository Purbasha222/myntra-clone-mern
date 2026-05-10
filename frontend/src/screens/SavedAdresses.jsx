import React, { useState } from "react";
import ProfileSidebar from "../components/ProfileSidebar";
import { useDispatch, useSelector } from "react-redux";
import AddressCard from "../components/AddressCard";
import {
  removeAddress,
  editAddress,
  addAddress,
} from "../redux/SLice/orderSlice";
import AddressForm from "../components/AddressForm";

const SavedAdresses = () => {
  const addresses = useSelector((state) => state.order.addresses);
  const dispatch = useDispatch();
  const [editIndex, setEditIndex] = useState(null);
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="p-15">
      <div className="max-w-275 mx-auto px-4 py-8 pb-16 flex gap-7 items-start">
        <ProfileSidebar />
        <main className="flex-1 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <p className="text-xl font-bold">Saved Addresses</p>
            <button
              onClick={() => {
                setShowForm(!showForm);
                setEditIndex(null);
              }}
              className="text-pink-600 font-semibold cursor-pointer"
            >
              + Add New Address
            </button>
          </div>
          {addresses.length === 0 ? (
            <p>No saved Addresses</p>
          ) : (
            <div className="flex flex-col gap-3 w-full">
              {addresses.map((addr, i) => (
                <AddressCard
                  key={i}
                  addr={addr}
                  index={i}
                  showRadio={false}
                  onEdit={(i) => {
                    setEditIndex(i);
                    setShowForm(true);
                  }}
                  onRemove={(i) => dispatch(removeAddress(i))}
                />
              ))}
            </div>
          )}
          {showForm && (
            <AddressForm
              key={editIndex}
              initialData={editIndex !== null ? addresses[editIndex] : null}
              onSave={(data) => {
                if (editIndex !== null) {
                  dispatch(editAddress({ index: editIndex, data }));
                } else {
                  dispatch(addAddress(data));
                }
                setShowForm(false);
                setEditIndex(null);
              }}
            />
          )}
        </main>
      </div>
    </div>
  );
};

export default SavedAdresses;
