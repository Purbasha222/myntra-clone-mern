import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { BASE_URL } from "../config.js";
import AdminSidebar from "../components/AdminSidebar.jsx";
import AdminModal from "../components/AdminModal.jsx";

const AdminProducts = () => {
  const token = useSelector((state) => state.admin.token);
  const [products, setProducts] = useState(null);
  const [newProduct, setNewProduct] = useState(null);
  const [editProduct, setEditProduct] = useState(null);
  const [modalProductId, setModalProductId] = useState(null);
  const [originalProduct, setOriginalProduct] = useState(null);
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(`${BASE_URL}/api/admin/getAllProducts`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const handleDeleteProduct = async (id) => {
    await fetch(`${BASE_URL}/api/admin/deleteProduct/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    setProducts(products.filter((product) => product._id !== id));
    setModalProductId(null);
  };

  const handleEditProduct = async (id) => {
    await fetch(`${BASE_URL}/api/admin/updateProduct/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editProduct),
    });
    setProducts(products.map((p) => (p._id === id ? editProduct : p)));
    setEditProduct(null);
  };

  const handleAddProduct = async () => {
    if (
      !newProduct.title ||
      !newProduct.brand ||
      !newProduct.price ||
      !newProduct.category ||
      !newProduct.stock ||
      !newProduct.thumbnail
    ) {
      alert("Please fill all fields!");
      return;
    }
    const res = await fetch(`${BASE_URL}/api/admin/addProduct`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });
    const data = await res.json();
    setProducts([...products, data.product]);
    setNewProduct(null);
  };

  return (
    <div className="p-15">
      <AdminModal
        modalProductId={modalProductId}
        setModalProductId={setModalProductId}
        handleDeleteProduct={handleDeleteProduct}
        editProduct={editProduct}
        setEditProduct={setEditProduct}
        handleEditProduct={handleEditProduct}
        newProduct={newProduct}
        setNewProduct={setNewProduct}
        handleAddProduct={handleAddProduct}
         originalProduct={originalProduct}
      />
      <div className="max-w-275 mx-auto px-4 py-8 pb-16 flex gap-7 items-start">
        <div className="sticky top-0 shrink-0">
          <AdminSidebar />
        </div>
        <div className="flex-1 overflow-y-auto max-h-screen no-scrollbar">
          <div className="flex justify-between">
            <p className="text-xl font-bold">All Products</p>
            <button
              className="p-2 border border-myntra-studio rounded-sm uppercase font-bold text-myntra-studio cursor-pointer"
              onClick={() =>
                setNewProduct({
                  title: "",
                  brand: "",
                  price: "",
                  category: "",
                  stock: "",
                  thumbnail: "",
                })
              }
            >
              Add Product
            </button>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-center border-b border-gray-300">
                <th className="py-3">Image</th>
                <th className="py-3">Title</th>
                <th className="py-3">Brand</th>
                <th className="py-3">Category</th>
                <th className="py-3">Price</th>
                <th className="py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {products &&
                products.map((product) => (
                  <tr key={product._id} className="border-b border-gray-300">
                    <td className="py-3 border-r border-gray-300">
                      <img
                        src={product.thumbnail}
                        className="w-12 h-12 object-cover"
                      />
                    </td>
                    <td className="py-3 text-center border-r border-gray-300">
                      {product.title}
                    </td>
                    <td className="py-3 text-center border-r border-gray-300">
                      {product.brand}
                    </td>
                    <td className="py-3 text-center border-r border-gray-300">
                      {product.category}
                    </td>
                    <td className="py-3 text-center border-r border-gray-300">
                      {product.price}
                    </td>
                    <td className="py-5 flex justify-center items-center gap-3">
                      <button
                        className="text-blue-500 font-bold text-xs uppercase cursor-pointer"
                        onClick={() => {
                          setEditProduct(product);
                          setOriginalProduct(product);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className="text-myntra-men font-bold text-xs uppercase cursor-pointer"
                        onClick={() => setModalProductId(product._id)}
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

export default AdminProducts;
