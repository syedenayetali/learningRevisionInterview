import React, { useState, useEffect } from "react";

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [searchTerm]);

  useEffect(() => {
    if (debouncedTerm) {
      fetchResults(debouncedTerm);
    }
  }, [debouncedTerm]);

  const fetchResults = (term) => {
    console.log(`Fetching results for: ${term}`);
    setResults([`${term} Result 1`, `${term} Result 2`, `${term} Result 3`]);
  };

  return (
    <div>
      <h2>Search</h2>
      <input type="text" placeholder="Search for something..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <div>
        <h3>Results</h3>
        <ul>
          {results.map((result, index) => (
            <li key={index}>{result}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchBox;
