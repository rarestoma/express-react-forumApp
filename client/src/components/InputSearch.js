import { useEffect, useState, useRef } from "react";
import { useFuzzyQuestions } from "../queries/questions";

const InputSearch = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const {
    data: questions,
    isLoading,
    refetch,
  } = useFuzzyQuestions(searchInput);
  const typingTimeout = useRef(null);

  const handleInputChange = (event) => {
    const searchValue = event.target.value;
    setInputValue(searchValue);

    // Clear the previous typing timeout
    clearTimeout(typingTimeout.current);

    // Set a new typing timeout
    typingTimeout.current = setTimeout(() => {
      setSearchInput(searchValue);
    }, 500);
  };

  useEffect(() => {
    // Trigger the query when searchInput changes
    if (searchInput !== "") {
      refetch(searchInput);
    }
  }, [searchInput, refetch]);

  useEffect(() => {
    // Log when new questions are fetched
    if (questions) {
      console.log("New set of questions:", questions);
    }
  }, [questions]);

  return (
    <div className="relative my-1">
      <span className="absolute ml-4 leading-none -translate-y-1/2 top-1/2 text-muted">
        {isLoading ? (
          "..."
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        )}
      </span>
      <input
        id="table-search"
        className="placeholder:text-secondary-dark pr-4 pl-12 text-stone-500 bg-white border border-solid border-stone-200 text-[0.95rem] block w-[150px] py-3 font-medium leading-normal bg-clip-padding appearance-none rounded-2xl focus:border-secondary-dark outline-none"
        placeholder="Search questions"
        type="text"
        disabled={isLoading}
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default InputSearch;
