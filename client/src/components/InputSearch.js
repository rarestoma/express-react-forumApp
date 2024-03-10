const fuzzySearch = () => {
  console.log("test");
};

const InputSearch = () => {
  return (
    <input
      id="table-search"
      className="placeholder:text-secondary-dark pr-4 pl-12 text-stone-500 bg-white border border-solid border-stone-200 text-[0.95rem] block w-[150px] py-3 font-medium leading-normal bg-clip-padding appearance-none rounded-2xl focus:border-secondary-dark outline-none"
      placeholder="Search questions"
      type="text"
      onChange={fuzzySearch}
    />
  );
};

export default InputSearch;
