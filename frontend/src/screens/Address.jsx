import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addAddress,
  editAddress,
  removeAddress,
  selectAddress,
} from "../redux/SLice/orderSlice";
import AddressForm from "../components/AddressForm";
import PriceSummary from "../components/PriceSummary";

const Address = () => {
  const [editIndex, setEditIndex] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const addresses = useSelector((state) => state.order.addresses);
  const selectedAddressIndex = useSelector(
    (state) => state.order.selectedAddressIndex,
  );

  const dispatch = useDispatch();

  return (
    <div className="grid grid-cols-[3fr_2fr] gap-10 px-50 py-10">
      {/* LEFT */}
      <div className="border-r border-gray-300 pr-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Select Delivery Address</h2>
          <button
            onClick={() => setShowForm(true)}
            className="border px-2 py-2 font-semibold rounded-md cursor-pointer"
          >
            ADD NEW ADDRESS
          </button>
        </div>

        {addresses.length > 0 && (
          <p className="text-xs text-gray-500 mb-2">DEFAULT ADDRESS</p>
        )}

        {addresses.map((addr, i) => (
          <div
            key={i}
            className={`border rounded-md p-4 mb-3 ${selectedAddressIndex === i ? "border-gray-300 shadow-lg" : ""}`}
          >
            <div className="flex items-center gap-2 mb-1">
              <input
                type="radio"
                checked={selectedAddressIndex === i}
                onChange={() => dispatch(selectAddress(i))}
              />
              <p className="font-bold">{addr.name}</p>
              <span className="rounded-md border border-myntra-beauty text-myntra-beauty text-xs font-semibold px-2 py-0.5">
                {addr.type}
              </span>
            </div>
            <p className="text-sm text-gray-600">
              {addr.address}, {addr.city}, {addr.state} - {addr.pincode}
            </p>
            <div className="flex gap-1 mt-1">
              <span className="text-gray-700">Mobile:</span>
              <p className="font-bold">{addr.phone}</p>
            </div>
            <p className="text-sm text-gray-500 mt-1">
              • Pay on Delivery available
            </p>
            <div className="flex gap-3 mt-3">
              <button
                onClick={() => dispatch(removeAddress(i))}
                className="border px-3 py-1 rounded-md font-semibold text-sm cursor-pointer"
              >
                REMOVE
              </button>
              <button
                className="border px-3 py-1 rounded-md font-semibold text-sm cursor-pointer"
                onClick={() => {
                  setEditIndex(i);
                  setShowForm(true);
                }}
              >
                EDIT
              </button>
            </div>
          </div>
        ))}

        {/* Add New Address form */}
        <div className="border border-gray-300 shadow-lg rounded-md p-4 mt-3">
          <button
            onClick={() => {
              setShowForm(!showForm);
              setEditIndex(null);
            }}
            className="text-pink-600 font-semibold cursor-pointer"
          >
            + Add New Address
          </button>
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
        </div>
      </div>

      {/* RIGHT - price summary */}
      <PriceSummary />
    </div>
  );
};

export default Address;
