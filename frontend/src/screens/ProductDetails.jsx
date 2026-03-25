import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchProducts, setCart } from "../redux/SLice/productSlice";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { GoHeart } from "react-icons/go";
import toast from "react-hot-toast";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const cartItems = useSelector((state) => state.product.cart);
  const alreadyInCart = cartItems.find((item) => item.id === Number(id));

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const item = products.find((product) => product.id === Number(id));

  if (!item) {
    return (
      <div className="flex items-center justify-center h-64 text-gray-500">
        Product not found.
      </div>
    );
  }

  return (
    <div className="flex gap-5 p-6">
      <div className="flex flex-col gap-2 w-72 shrink-0 bg-gray-100 p-2 rounded">
        {item.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${item.brand} - view ${index + 1}`}
            className="w-full object-cover rounded"
          />
        ))}
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-lg font-bold text-gray-800">{item.brand}</p>
        <span className="text-gray-600">{item.title}</span>
        <p className="text-sm text-gray-500">{item.description}</p>
        <p className="text-yellow-500 font-medium">⭐ {item.rating}</p>
        {item.price && (
          <p className="text-xl font-semibold text-gray-900">₹{item.price}</p>
        )}
        <div>
          <button
            onClick={() => {
              if (alreadyInCart) {
                toast.error("Already in cart!");
              } else {
                toast.success("Product added to cart!");
                dispatch(setCart(item));
              }
            }}
            className="flex items-center border cursor-pointer p-2"
          >
            <HiOutlineShoppingBag /> Add to Bag
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
