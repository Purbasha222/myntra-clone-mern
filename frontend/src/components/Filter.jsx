import { useNavigate } from "react-router-dom";

const Filter = ({ setSortOrder }) => {
  const navigate = useNavigate();
  const linkRoutes = [
    {
      title: "Men",
      link: "/categories/men",
    },
    {
      title: "Women",
      link: "/categories/women",
    },
    {
      title: "Kids",
      link: "/categories/kids",
    },
    {
      title: "Home",
      link: "/categories/home",
    },
    {
      title: "Beauty",
      link: "/categories/beauty",
    },
    {
      title: "Genz",
      link: "/categories/genz",
    },
  ];

  const sortOptions = [
    { title: "Price: Low to High", value: "asc" },
    { title: "Price: High to Low", value: "desc" },
  ];

  return (
    <div className="border border-gray-200">
      <div className="flex flex-col gap-1.5 w-70 p-5">
        {linkRoutes.map((item) => (
          <div key={item.title} className="flex gap-3">
            <input
              type="radio"
              name="Categories"
              id={item.title}
              onClick={() => navigate(item.link)}
              className="cursor-pointer"
            />
            <label htmlFor={item.title}>{item.title}</label>
          </div>
        ))}
      </div>
      <hr className="border-gray-200" />
      <div className="flex flex-col gap-1.5 w-70 p-5">
        <p className="font-bold text-sm uppercase tracking-widest mb-2">
          Sort By Price
        </p>
        {sortOptions.map((option) => (
          <div key={option.value} className="flex gap-3">
            <input
              type="radio"
              name="Sort"
              id={option.value}
              value={option.value}
              onChange={(e) => setSortOrder(e.target.value)}
              className="cursor-pointer"
            />
            <label htmlFor={option.value}>{option.title}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
