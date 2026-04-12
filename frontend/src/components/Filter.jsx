const Filter = () => {
  return (
    <div className="border border-gray-200">
      <div className="flex flex-col gap-1.5 w-70 p-5">
        <div className="flex gap-3">
          <input type="radio" name="Categories" id="Men" />
          <label htmlFor="Men">Men</label>
        </div>

        <div className="flex gap-3">
          <input type="radio" name="Categories" id="Women" />
          <label htmlFor="Women">Women</label>
        </div>

        <div className="flex gap-3">
          <input type="radio" name="Categories" id="Kids" />
          <label htmlFor="Kids">Kids</label>
        </div>

        <div className="flex gap-3">
          <input type="radio" name="Categories" id="Home" />
          <label htmlFor="Home">Home</label>
        </div>

        <div className="flex gap-3">
          <input type="radio" name="Categories" id="Beauty" />
          <label htmlFor="Beauty">Beauty</label>
        </div>

        <div className="flex gap-3">
          <input type="radio" name="Categories" id="Genz" />
          <label htmlFor="Genz">Genz</label>
        </div>
      </div>
      <hr className="border-gray-200" />
    </div>
  );
};

export default Filter;
