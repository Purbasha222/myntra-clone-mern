const AddressCard = ({
  addr,
  index,
  showRadio,
  isSelected,
  onSelect,
  onEdit,
  onRemove,
}) => {
  return (
    <div
      className={`border rounded-md p-4 mb-3 ${isSelected ? "border-gray-300 shadow-lg" : ""}`}
    >
      {showRadio && (
        <input
          type="radio"
          checked={isSelected}
          onChange={() => onSelect(index)}
        />
      )}
      <div className="flex items-center gap-2 mb-1">
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
      <div className="flex gap-3 mt-3">
        <button
          onClick={() => onRemove(index)}
          className="border px-3 py-1 rounded-md font-semibold text-sm cursor-pointer"
        >
          REMOVE
        </button>
        <button
          onClick={() => onEdit(index)}
          className="border px-3 py-1 rounded-md font-semibold text-sm cursor-pointer"
        >
          EDIT
        </button>
      </div>
    </div>
  );
};

export default AddressCard;
