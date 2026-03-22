// import React from "react";

// const Footer = () => {
//   return (
//     <div className="flex gap-3 bg-gray-100 w-full px-60">
//       <div className="flex flex-col pt-10 ">
//         <p className="font-bold text-xs text-pretty pb-10">ONLINE SHOPPING</p>
//         <ul>
//           <li>Men</li>
//           <li>Women</li>
//           <li>Kids</li>
//           <li>Home</li>
//           <li>Beauty</li>
//           <li>Genz</li>
//           <li>Gift Cards</li>
//           <li>Myntra Insider</li>
//         </ul>

//         <p className="font-bold text-xs text-pretty mt-5 pb-5">USEFUL LINKS</p>
//         <ul className="pb-20">
//           <li>Blog</li>
//           <li>Careers</li>
//           <li>Site Map</li>
//           <li>Corporate Information</li>
//           <li>WhiteHat</li>
//           <li>Clear Trip</li>
//           <li>Myntra Global</li>
//         </ul>
//       </div>

//       <div>
//         <p className="font-bold text-xs text-pretty mt-10 pb-10">
//           CUSTOMER POLICIES
//         </p>
//         <ul>
//           <li>Contact Us</li>
//           <li>FAQ</li>
//           <li>T&C</li>
//           <li>Terms of Use</li>
//           <li>Track Orders</li>
//           <li>Shipping</li>
//           <li>Cancelation</li>
//           <li>Privacy Policy</li>
//           <li>Grievance Redressal</li>
//           <li>FSSAI Food Safety</li>
//           <li>Connect App</li>
//         </ul>
//       </div>
//       <div>
//         <p className="font-bold text-xs text-pretty mt-10">
//           EXPERIENCE MYNTRA APP ON MOBILE
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Footer;

// Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-wrap gap-10 bg-gray-100 w-full px-10 md:px-20 lg:px-40 py-10">
      {/* Column 1 */}
      <div className="flex flex-col gap-1 min-w-[150px]">
        <p className="font-bold text-xs mb-4 tracking-wider">ONLINE SHOPPING</p>
        <ul className="flex flex-col gap-1 text-sm text-gray-600">
          {[
            "Men",
            "Women",
            "Kids",
            "Home",
            "Beauty",
            "Genz",
            "Gift Cards",
            "Myntra Insider",
          ].map((link) => (
            <li key={link} className="hover:underline cursor-pointer">
              {link}
            </li>
          ))}
        </ul>

        <p className="font-bold text-xs mt-6 mb-4 tracking-wider">
          USEFUL LINKS
        </p>
        <ul className="flex flex-col gap-1 text-sm text-gray-600">
          {[
            "Blog",
            "Careers",
            "Site Map",
            "Corporate Information",
            "WhiteHat",
            "ClearTrip",
            "Myntra Global",
          ].map((link) => (
            <li key={link} className="hover:underline cursor-pointer">
              {link}
            </li>
          ))}
        </ul>
      </div>

      {/* Column 2 */}
      <div className="flex flex-col gap-1 min-w-[150px]">
        <p className="font-bold text-xs mb-4 tracking-wider">
          CUSTOMER POLICIES
        </p>
        <ul className="flex flex-col gap-1 text-sm text-gray-600">
          {[
            "Contact Us",
            "FAQ",
            "T&C",
            "Terms of Use",
            "Track Orders",
            "Shipping",
            "Cancellation",
            "Privacy Policy",
            "Grievance Redressal",
            "FSSAI Food Safety",
            "Connect App",
          ].map((link) => (
            <li key={link} className="hover:underline cursor-pointer">
              {link}
            </li>
          ))}
        </ul>
      </div>

      {/* Column 3 */}
      <div className="flex flex-col min-w-[150px]">
        <p className="font-bold text-xs mb-4 tracking-wider">
          EXPERIENCE MYNTRA APP ON MOBILE
        </p>
        {/* Add app store badge images here */}
      </div>
    </div>
  );
};

export default Footer;
