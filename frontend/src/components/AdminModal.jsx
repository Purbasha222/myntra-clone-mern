import React from "react";

const AdminModal = ({
  modalProductId,
  setModalProductId,
  handleDeleteProduct,
  editProduct,
  setEditProduct,
  handleEditProduct,
  newProduct,
  setNewProduct,
  handleAddProduct,
  originalProduct,
}) => {
  const product = editProduct || newProduct;
  const setProduct = editProduct ? setEditProduct : setNewProduct;
  const isUnchanged =
    JSON.stringify(editProduct) === JSON.stringify(originalProduct);
  const isAddDisabled =
    newProduct &&
    (!newProduct.title ||
      !newProduct.brand ||
      !newProduct.price ||
      !newProduct.category ||
      !newProduct.stock ||
      !newProduct.thumbnail);

  return (
    <div>
      {modalProductId !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setModalProductId(null)}
          ></div>
          <div className="relative bg-white rounded-md shadow-xl p-8 w-[380px] flex flex-col items-center gap-4 z-10">
            <p className="text-[#282c3f] font-bold text-lg text-center">
              Delete Product
            </p>
            <p className="text-gray-500 text-sm text-center">
              Are you sure you want to delete this product? This action cannot
              be undone.
            </p>
            <div className="flex gap-3 mt-2 w-full">
              <button
                onClick={() => setModalProductId(null)}
                className="flex-1 border border-[#282c3f] text-[#282c3f] text-[13px] font-bold tracking-widest uppercase py-2.5 hover:bg-gray-100 transition-colors cursor-pointer"
              >
                GO BACK
              </button>
              <button
                onClick={() => handleDeleteProduct(modalProductId)}
                className="flex-1 bg-myntra-kids text-white text-[13px] font-bold tracking-widest uppercase py-2.5 hover:bg-myntra-kids transition-colors cursor-pointer"
              >
                DELETE PRODUCT
              </button>
            </div>
          </div>
        </div>
      )}

      {product && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setProduct(null)}
          ></div>
          <div className="relative bg-white rounded-md shadow-xl p-8 w-[500px] flex flex-col gap-4 z-10">
            <p className="text-[#282c3f] font-bold text-lg">
              {editProduct ? "Edit Product" : "Add Product"}
            </p>
            <label htmlFor="">Title</label>
            <input
              value={product.title}
              onChange={(e) =>
                setProduct({ ...product, title: e.target.value })
              }
              className="border p-2 outline-none text-sm"
              placeholder="Title"
            />
            <label htmlFor="">Brand</label>
            <input
              value={product.brand}
              onChange={(e) =>
                setProduct({ ...product, brand: e.target.value })
              }
              className="border p-2 outline-none text-sm"
              placeholder="Brand"
            />
            <label htmlFor="">Price</label>
            <input
              value={product.price}
              onChange={(e) =>
                setProduct({ ...product, price: e.target.value })
              }
              className="border p-2 outline-none text-sm"
              placeholder="Price"
              type="number"
            />
            <label htmlFor="">Category</label>
            <input
              value={product.category}
              onChange={(e) =>
                setProduct({ ...product, category: e.target.value })
              }
              className="border p-2 outline-none text-sm"
              placeholder="Category"
            />
            <label htmlFor="">Stock</label>
            <input
              value={product.stock}
              onChange={(e) =>
                setProduct({ ...product, stock: e.target.value })
              }
              className="border p-2 outline-none text-sm"
              placeholder="Stock"
              type="number"
            />
            <label htmlFor="">Thumbnail</label>
            <input
              value={product.thumbnail}
              onChange={(e) =>
                setProduct({ ...product, thumbnail: e.target.value })
              }
              className="border p-2 outline-none text-sm"
              placeholder="Thumbnail URL"
            />
            <div className="flex gap-3">
              <button
                onClick={() => setProduct(null)}
                className="flex-1 border border-[#282c3f] text-[#282c3f] text-[13px] font-bold tracking-widest uppercase py-2.5 cursor-pointer"
              >
                CANCEL
              </button>
              <button
                disabled={editProduct ? isUnchanged : isAddDisabled}
                onClick={() =>
                  editProduct
                    ? handleEditProduct(editProduct._id)
                    : handleAddProduct()
                }
                className={`flex-1 text-white text-[13px] font-bold tracking-widest uppercase py-2.5 ${(editProduct ? isUnchanged : isAddDisabled) ? "bg-pink-300 cursor-not-allowed" : "bg-myntra-studio cursor-pointer"}`}
              >
                {editProduct ? "SAVE" : "ADD"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminModal;
