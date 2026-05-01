import { useDispatch, useSelector } from "react-redux";
import WishlistCard from "../components/WishlistCard";
import { useNavigate } from "react-router-dom";
import EmptyWishlist from "../assets/shopping-bags-heart.jpg";
// import { useEffect } from "react";
// import { fetchWishlist } from "../redux/SLice/wishlistSlice";

const Wishlist = () => {
  // const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
  const navigate = useNavigate();
  console.log(wishlistItems, "taylor swift");

  // useEffect(() => {
  //   dispatch(fetchWishlist());
  // }, [dispatch]);


  return (
    <>
      {wishlistItems.length > 0 ? (
        <div className="grid grid-cols-5 p-10 gap-y-8 gap-7">
          {wishlistItems.map((item, index) => (
            <WishlistCard item={item} key={index} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center p-20">
          <p className="font-bold text-2xl">YOUR WISHLIST IS EMPTY</p>
          <p className="text-gray-500 mt-2">
            Add items that you like to your wishlist. Review them anytime and
            easily move them to bag.
          </p>
          <img
            src={EmptyWishlist}
            alt=""
            height={300}
            width={300}
            className="mt-2"
          />
          <button
            onClick={() => navigate("/")}
            className="p-2 border border-myntra-genz mt-2 cursor-pointer"
          >
            <p className="font-semibold text-lg text-myntra-genz">
              CONTINUE SHOPPING
            </p>
          </button>
        </div>
      )}
    </>
  );
};

export default Wishlist;
