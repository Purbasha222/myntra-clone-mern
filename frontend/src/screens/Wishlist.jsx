import { useSelector } from "react-redux";
import WishlistCard from "../components/WishlistCard";

const Wishlist = () => {
  const wishlistItems = useSelector((state) => state.product.wishlist);

  return (
    <>
      {wishlistItems.length > 0 ? (
        <div className="flex flex-col gap-y-5 p-20">
          {wishlistItems.map((item, index) => (
            <WishlistCard item={item} key={index} />
          ))}
        </div>
      ) : (
        <p>Wishlist is empty</p>
      )}
    </>
  );
};

export default Wishlist;
