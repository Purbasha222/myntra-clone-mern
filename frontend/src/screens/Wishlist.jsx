import { useSelector } from "react-redux";
import WishlistCard from "../components/WishlistCard";

const Wishlist = () => {
  const wishlistItems = useSelector((state) => state.product.wishlist);

  return (
    <div>
      {wishlistItems.map((item, index) => (
        <WishlistCard item={item} key={index} />
      ))}
    </div>
  );
};

export default Wishlist;
