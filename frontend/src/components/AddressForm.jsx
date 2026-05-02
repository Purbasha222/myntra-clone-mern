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
    <div className="flex flex-col gap-3 mt-4">
      <input
        placeholder="Full Name"
        required
        className="border p-2"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        placeholder="Phone"
        required
        className="border p-2"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />
      <input
        placeholder="Pincode"
        required
        className="border p-2"
        value={form.pincode}
        onChange={(e) => setForm({ ...form, pincode: e.target.value })}
      />
      <input
        placeholder="City"
        required
        className="border p-2"
        value={form.city}
        onChange={(e) => setForm({ ...form, city: e.target.value })}
      />
      <input
        placeholder="State"
        required
        className="border p-2"
        value={form.state}
        onChange={(e) => setForm({ ...form, state: e.target.value })}
      />
      <input
        placeholder="Address"
        required
        className="border p-2"
        value={form.address}
        onChange={(e) => setForm({ ...form, address: e.target.value })}
      />
      <div className="flex gap-3">
        {["HOME", "WORK", "OTHER"].map((t) => (
          <button
            key={t}
            onClick={() => setForm({ ...form, type: t })}
            className={`border px-3 py-1 text-sm ${form.type === t ? "border-pink-500 text-pink-600" : ""}`}
          >
            {t}
          </button>
        ))}
      </div>
      <button
        onClick={() => onSave(form)}
        className="bg-pink-600 text-white p-2 font-bold"
      >
        SAVE ADDRESS
      </button>
    </div>
  );
};

export default AddressForm;
