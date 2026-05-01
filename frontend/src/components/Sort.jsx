import React from "react";

const Sort = () => {
  return (
    <div>
      <select name="Sort" id="">
        <option value="Recommended">
          Sort By: <p className="font-bold">Recommended</p>
        </option>
        <option value="Recommended">Recommended</option>
        <option value="What's New">What's New</option>
        <option value="Popularity">Popularity</option>
        <option value="Better Discount">Better Discount</option>
        <option value="High to Low">Price: High to Low</option>
        <option value="Low to High">Price: Low to High</option>
        <option value="Recommended">Recommended</option>
        <option value="Recommended">Recommended</option>
      </select>
    </div>
  );
};

export default Sort;
