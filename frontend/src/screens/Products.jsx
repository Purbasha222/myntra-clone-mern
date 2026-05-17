import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../redux/SLice/productSlice";
import Filter from "../components/Filter";
import Sort from "../components/Sort";

const Products = () => {
  const { category } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const filtered = products.filter((item) => item.category === category) || [];
  const [sortOrder, setSortOrder] = useState("");
  const sorted = [...filtered].sort((a, b) => {
    if (sortOrder === "asc") return a.price - b.price;
    if (sortOrder === "desc") return b.price - a.price;
    return 0;
  });

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="flex justify-between">
      <Filter setSortOrder={setSortOrder} />
      <div className="grid grid-cols-5 p-10 gap-y-8 gap-7">
        {sorted.map((item, index) => (
          <ProductCard item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Products;
