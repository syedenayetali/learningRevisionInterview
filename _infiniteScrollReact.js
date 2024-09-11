import React, { useState, useEffect } from "react";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCountries(page);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [page]);

  const fetchCountries = async (page) => {
    setLoading(true);
    const response = await fetch(`https://api.worldbank.org/v2/country?format=json&per_page=10&page=${page}`);
    const data = await response.json();
    setCountries((prev) => [...prev, ...data[1]]); // Append new countries
    setLoading(false);
  };

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight * 0.8 && !loading) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div>
      <h1>Country List</h1>

      {countries.map((country) => (
        <div key={country.id} style={{ height: "80px", width: "500px", margin: "5px", backgroundColor: "gray", borderRadius: "5px", padding: "5px" }}>
          {country.name}
        </div>
      ))}

      {loading && <p>Loading...</p>}
    </div>
  );
};

export default App;
