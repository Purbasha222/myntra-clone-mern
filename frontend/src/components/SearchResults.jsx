import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

const SearchResults = () => {
  const products = useSelector((state) => state.product.products);
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q") || "";
  const filtered = products.filter((product) =>
    product.title.toLowerCase().includes(q.toLowerCase()),
  );
  console.log(filtered);
  return (
    <div>
      {filtered.map((product) => (
        <p key={product.id}>{product.title}</p>
      ))}
    </div>
  );
};

export default SearchResults;
