import { useDispatch, useSelector } from "react-redux";
import WishlistCard from "../components/WishlistCard";
// import { useEffect } from "react";
// import { fetchWishlist } from "../redux/SLice/wishlistSlice";

const Wishlist = () => {
  // const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
  console.log(wishlistItems, "taylor swift");

  // useEffect(() => {
  //   dispatch(fetchWishlist());
  // }, [dispatch]);

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
