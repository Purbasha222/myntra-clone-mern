import { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../redux/SLice/productSlice";

const Products = () => {
  const { category } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filtered = products.filter((item) => item.category === category) || [];

  return (
    <div className="grid grid-cols-5 p-20 gap-y-8">
      {filtered.map((item, index) => (
        <ProductCard item={item} key={index} />
      ))}
    </div>
  );
};

export default Products;
