import { useState } from "react";

const AddressForm = ({ onSave, initialData }) => {
  const [form, setForm] = useState(
    initialData || {
      name: "",
      phone: "",
      pincode: "",
      city: "",
      state: "",
      address: "",
      type: "HOME",
    },
  );

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSave(form);
      }}
    >
      <div className="flex flex-col gap-3 mt-4">
        <input
          placeholder="Full Name"
          required
          className="border border-gray-300 p-2 outline-none"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          placeholder="Phone"
          required
          className="border border-gray-300 p-2 outline-none"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
        <input
          placeholder="Pincode"
          required
          className="border border-gray-300 p-2 outline-none"
          value={form.pincode}
          onChange={(e) => setForm({ ...form, pincode: e.target.value })}
        />
        <input
          placeholder="City"
          required
          className="border border-gray-300 p-2 outline-none"
          value={form.city}
          onChange={(e) => setForm({ ...form, city: e.target.value })}
        />
        <input
          placeholder="State"
          required
          className="border border-gray-300 p-2 outline-none"
          value={form.state}
          onChange={(e) => setForm({ ...form, state: e.target.value })}
        />
        <input
          placeholder="Address"
          required
          className="border border-gray-300 p-2 outline-none"
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
        />
        <div className="flex gap-3">
          {["HOME", "WORK", "OTHER"].map((t) => (
            <button
              key={t}
              onClick={() => setForm({ ...form, type: t })}
              type="button"
              className={`border border-gray-300 px-3 py-1 text-sm ${form.type === t ? "border-pink-500 text-pink-600" : ""}`}
            >
              {t}
            </button>
          ))}
        </div>
        <button
          type="submit"
          className="bg-pink-600 text-white p-2 font-bold cursor-pointer"
        >
          SAVE ADDRESS
        </button>
      </div>
    </form>
  );
};

export default AddressForm;
