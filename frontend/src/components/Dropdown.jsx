// import React, { useState } from "react";

// const Dropdown = () => {
//   const menuData = {
//     WOMEN: {
//       "Indian & Fusion Wear": [
//         "Kurtas & Suits",
//         "Kurtis, Tunics & Tops",
//         "Sarees",
//         "Ethnic Wear",
//         "Leggings, Salwars & Churidars",
//         "Skirts & Palazzos",
//         "Dress Materials",
//         "Lehenga Choli",
//         "Dupattas & Shawls",
//         "Jackets",
//       ],
//       "Western Wear": [
//         "Dresses",
//         "Tops",
//         "Tshirts",
//         "Jeans",
//         "Trousers & Capris",
//         "Shorts & Skirts",
//         "Co-ords",
//         "Playsuits",
//         "Jumpsuits",
//         "Shrugs",
//         "Sweaters & Sweatshirts",
//         "Jackets & Coats",
//         "Blazers & Waistcoats",
//       ],
//       Maternity: [],
//       "Lingerie & Sleepwear": [
//         "Bra",
//         "Briefs",
//         "Shapewear",
//         "Sleepwear & Loungewear",
//         "Swimwear",
//         "Camisoles & Thermals",
//       ],
//       Gadgets: ["Smart Wearables", "Fitness Gadgets", "Headphones", "Speakers"],
//       "Sunglasses & Frames": [],
//       Footwear: [
//         "Flats",
//         "Casual Shoes",
//         "Heels",
//         "Boots",
//         "Sports Shoes & Floaters",
//       ],
//       Jewellery: ["Fashion Jewellery", "Fine Jewellery", "Earrings"],
//       "Sports & Active Wear": [
//         "Clothing",
//         "Footwear",
//         "Sports Accessories",
//         "Sports Equipment",
//       ],
//       "Beauty & Personal Care": [
//         "Makeup",
//         "Skincare",
//         "Premium Beauty",
//         "Lipsticks",
//         "Fragrances",
//       ],
//       Backpacks: [],
//       "Handbags, Bags & Wallets": [],
//       "Luggages & Trolleys": [],
//       "Belts, Scarves & More": [],
//       "Watches & Wearables": [],
//       "Plus Size": [],
//     },
//     MEN: {
//       "Indian & Fusion Wear": ["Kurtas & Suits", "Sherwanis", "Nehru Jackets"],
//       "Western Wear": [
//         "Shirts",
//         "T-Shirts",
//         "Jeans",
//         "Trousers",
//         "Shorts",
//         "Jackets & Coats",
//       ],
//       Footwear: ["Casual Shoes", "Formal Shoes", "Sneakers", "Sandals"],
//       Accessories: ["Watches", "Belts", "Wallets", "Sunglasses"],
//     },
//     KIDS: {
//       "Boys Clothing": ["T-Shirts", "Shirts", "Shorts", "Jeans", "Ethnic Wear"],
//       "Girls Clothing": ["Dresses", "Tops", "Ethnic Wear", "Jeans"],
//       Footwear: ["Casual Shoes", "School Shoes", "Sandals"],
//     },
//   };

//   const currentMenu = menuData[activeMenu] || {};

//   return <div>hello</div>;
// };

// export default Dropdown;

const Dropdown = ({ activeMenu, setActiveMenu }) => {
  const menuData = {
    WOMEN: {
      "Indian & Fusion Wear": [
        "Kurtas & Suits",
        "Kurtis, Tunics & Tops",
        "Sarees",
        "Ethnic Wear",
        "Leggings, Salwars & Churidars",
        "Skirts & Palazzos",
        "Dress Materials",
        "Lehenga Choli",
        "Dupattas & Shawls",
        "Jackets",
      ],
      "Western Wear": [
        "Dresses",
        "Tops",
        "Tshirts",
        "Jeans",
        "Trousers & Capris",
        "Shorts & Skirts",
        "Co-ords",
        "Playsuits",
        "Jumpsuits",
        "Shrugs",
        "Sweaters & Sweatshirts",
        "Jackets & Coats",
        "Blazers & Waistcoats",
      ],
      Maternity: [],
      "Lingerie & Sleepwear": [
        "Bra",
        "Briefs",
        "Shapewear",
        "Sleepwear & Loungewear",
        "Swimwear",
        "Camisoles & Thermals",
      ],
      Gadgets: ["Smart Wearables", "Fitness Gadgets", "Headphones", "Speakers"],
      "Sunglasses & Frames": [],
      Footwear: [
        "Flats",
        "Casual Shoes",
        "Heels",
        "Boots",
        "Sports Shoes & Floaters",
      ],
      Jewellery: ["Fashion Jewellery", "Fine Jewellery", "Earrings"],
      "Sports & Active Wear": [
        "Clothing",
        "Footwear",
        "Sports Accessories",
        "Sports Equipment",
      ],
      "Beauty & Personal Care": [
        "Makeup",
        "Skincare",
        "Premium Beauty",
        "Lipsticks",
        "Fragrances",
      ],
      Backpacks: [],
      "Handbags, Bags & Wallets": [],
      "Luggages & Trolleys": [],
      "Belts, Scarves & More": [],
      "Watches & Wearables": [],
      "Plus Size": [],
    },
    MEN: {
      "Indian & Fusion Wear": ["Kurtas & Suits", "Sherwanis", "Nehru Jackets"],
      "Western Wear": [
        "Shirts",
        "T-Shirts",
        "Jeans",
        "Trousers",
        "Shorts",
        "Jackets & Coats",
      ],
      Footwear: ["Casual Shoes", "Formal Shoes", "Sneakers", "Sandals"],
      Accessories: ["Watches", "Belts", "Wallets", "Sunglasses"],
    },
    KIDS: {
      "Boys Clothing": ["T-Shirts", "Shirts", "Shorts", "Jeans", "Ethnic Wear"],
      "Girls Clothing": ["Dresses", "Tops", "Ethnic Wear", "Jeans"],
      Footwear: ["Casual Shoes", "School Shoes", "Sandals"],
    },
  };

  const currentMenu = menuData[activeMenu] || {};
  const categories = Object.keys(currentMenu);

  if (!activeMenu || categories.length === 0) return null;

  return (
    <div
      className="fixed top-20 left-40 w-270 bg-white shadow-xl z-40 p-8"
      onMouseLeave={() => setActiveMenu(null)}
    >
      <div className="grid grid-cols-5 gap-8 h-100 overflow-y-auto [&::-webkit-scrollbar]:hidden">
        {categories.map((category) => (
          <div key={category}>
            <h3 className="text-pink-500 font-semibold text-sm mb-3 cursor-pointer hover:underline">
              {category}
            </h3>
            <ul className="flex flex-col gap-1.5">
              {currentMenu[category].map((item) => (
                <li
                  key={item}
                  className="text-sm text-gray-600 hover:text-pink-500 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
