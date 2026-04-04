import { useEffect, useState } from "react";
import card1 from "../assets/card1.webp";
import card2 from "../assets/card2.webp";
import card3 from "../assets/card3.webp";
import card4 from "../assets/card4.webp";
import card5 from "../assets/card5.webp";
import card6 from "../assets/card6.webp";
import card7 from "../assets/card7.webp";
import card8 from "../assets/card8.webp";

const Slider = () => {
  const sliderImages = [card1, card2, card3, card4, card5, card6, card7, card8];
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = sliderImages.slice(
    startIndex,
    startIndex + itemsPerPage,
  );
  const totalPages = Math.ceil(sliderImages.length / itemsPerPage);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((p) => (p === totalPages ? 1 : p + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [totalPages]);

  return (
    <>
      <h1 className="text-3xl font-bold mt-20 text-center">Top Trendy Deals</h1>
      <div className="flex flex-wrap gap-3 justify-center items-center mt-10 mb-5">
        {currentItems.map((item, index) => (
          <div
            key={index}
            className=" h-90 w-70 flex flex-wrap justify-center items-center rounded-2xl bg-amber-200"
          >
            <img src={item} alt="slider" className="h-85 w-65 rounded-md" />
          </div>
        ))}
      </div>

      <div className="flex gap-2 justify-center mb-20">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`rounded-full transition-all duration-300 
        ${
          currentPage === i + 1 ? "bg-gray-800 w-3 h-3" : "bg-gray-300 w-2 h-2"
        }`}
          />
        ))}
      </div>
    </>
  );
};

export default Slider;
