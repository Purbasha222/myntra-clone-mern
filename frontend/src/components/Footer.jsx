


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
