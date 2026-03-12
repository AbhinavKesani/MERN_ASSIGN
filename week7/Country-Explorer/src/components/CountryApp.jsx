import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import CountryList from "./CountryList";

function CountryApp() {

  const [countries, setCountries] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // FETCH COUNTRIES
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags"
        );

        if (!res.ok) throw new Error("Failed to fetch");

        const data = await res.json();

        setCountries(data);
        setFiltered(data);
        setLoading(false);

      } catch (err) {
        setError("Could not load countries");
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  // SEARCH FUNCTION
  const handleSearch = (query) => {
    const result = countries.filter(country =>
      country.name.common.toLowerCase().includes(query.toLowerCase())
    );
    setFiltered(result);
  };

  return (
    <div className="p-8">

      <h1 className="text-4xl text-center font-bold mb-6 text-blue-600">
        🌍 Country Explorer
      </h1>

      <SearchBar onSearch={handleSearch} />

      {loading && <p className="text-center mt-6">Loading countries...</p>}

      {error && <p className="text-center text-red-500 mt-6">{error}</p>}

      {!loading && !error && <CountryList countries={filtered} />}

    </div>
  );
}

export default CountryApp;