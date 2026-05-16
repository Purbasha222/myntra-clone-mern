import { useSelector } from "react-redux";
import ProfileSidebar from "../components/ProfileSidebar";
import { useNavigate } from "react-router-dom";

const gridCards = [
  {
    title: "Orders",
    subtitle: "Check your order status",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-10 h-10"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    title: "Collections & Wishlist",
    subtitle: "All your curated product collections",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-10 h-10"
      >
        <rect x="3" y="3" width="8" height="8" rx="1" />
        <rect x="13" y="3" width="8" height="8" rx="1" />
        <rect x="3" y="13" width="8" height="8" rx="1" />
        <rect x="13" y="13" width="8" height="8" rx="1" />
      </svg>
    ),
  },
  {
    title: "Myntra Credit",
    subtitle: "Manage all your refunds & gift cards",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-10 h-10"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: "MynCash",
    subtitle: "Your wallet & cashback",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-10 h-10"
      >
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
  },
  {
    title: "Saved Cards",
    subtitle: "Your saved payment cards",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-10 h-10"
      >
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2 10h20M7 15h3M14 15h3" />
      </svg>
    ),
  },
  {
    title: "Saved UPI",
    subtitle: "Your linked UPI accounts",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-10 h-10"
      >
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M8 12h8M12 8v8" />
      </svg>
    ),
  },
];

export default function Profile() {
  const email = useSelector((state) => state.auth.email);
  const name = useSelector((state) => state.auth.name);
  const linkRoutes = {
    Orders: "/orders",
    "Collections & Wishlist": "/wishlist",
  };
  const navigate = useNavigate();

  return (
    <div className="p-15">
      <div className="max-w-275 mx-auto px-4 py-8 pb-16 flex gap-7 items-start">
        <ProfileSidebar />
        <main className="flex-1 flex flex-col gap-4">
          <div className="bg-white px-8 py-7 flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="w-22.5 h-22.5 rounded-full bg-[#c2c2c2] flex items-center justify-center shrink-0 overflow-hidden">
                <svg viewBox="0 0 24 24" fill="#f5f5f6" className="w-14 h-14">
                  <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                </svg>
              </div>
              <span className="text-[15px] text-[#282c3f]">
                {name || email}
              </span>
            </div>

            <button
              onClick={() => navigate("/profile/edit")}
              className="border border-[#282c3f] text-[#282c3f] text-[13px] font-bold tracking-widest uppercase px-5 py-2.5 transition-colors duration-150 hover:bg-[#282c3f] hover:text-white cursor-pointer"
            >
              EDIT PROFILE
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {gridCards.map((card) => (
              <div
                key={card.title}
                onClick={() =>
                  linkRoutes[card.title] && navigate(linkRoutes[card.title])
                }
                className="bg-white py-8 px-6 flex flex-col items-center gap-2.5 cursor-pointer transition-shadow duration-200 hover:shadow-md"
              >
                <div className="text-[#282c3f]">{card.icon}</div>
                <p className="text-[15px] font-bold text-[#282c3f] text-center">
                  {card.title}
                </p>
                <p className="text-[12px] text-[#94969f] text-center">
                  {card.subtitle}
                </p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
