import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchProducts, setCart } from "../redux/SLice/productSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

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
        <p className="text-yellow-500 font-medium">⭐ {item.rating}</p>
        {item.price && (
          <p className="text-xl font-semibold text-gray-900">₹{item.price}</p>
        )}
        <p className="text-sm text-gray-500 mt-2">{item.description}</p>
        <button onClick={() => dispatch(setCart(item))}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;
