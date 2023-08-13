// Home.jsx
import { useEffect, useState } from "react";
import CountryCard from "../components/CountryCard";
import Header from "../components/Header";

function Home() {
  const [state, setState] = useState({
    isFetched: false,
    data: [],
    error: false
  });
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setState({
          data: data,
          isFetched: true,
          error: false
        });
      })
      .catch((err) => {
        setState({
          isFetched: true,
          data: [],
          error: true
        });
      });
  }, []);

  const filteredCountries = state.data.filter(
    (country) =>
      country.name.common.toLowerCase().includes(search.toLowerCase()) &&
      (filter ? country.region === filter : true)
  );

//   Dark mode 
const [darkMode, setDarkMode] = useState(false);
const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`App ${darkMode ? "bg-gray-800" : ""}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <div className="container mx-auto w-3/4 py-8 flex justify-between">
        <input
          type="text"
          placeholder="Search for a country..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="py-2 px-4 rounded"
        />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="py-2 px-4 rounded"
        >
          <option value="">Filter by Region</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
        </select>
      </div>
      <ul className={`container mx-auto grid grid-cols-4 py-8 w-3/4 gap-y-8 gap-x-16 items-start divide-y divide-gray-200 ${darkMode ? 'bg-gray-800' : ''}`}>
        {filteredCountries.map((country) => (
          <CountryCard
            key={country.name.common}
            title={country.name.common}
            flag={country.flags.png}
            population={country.population}
            reg={country.region}
            cap={country.capital}
            darkMode={darkMode}
          />
        ))}
      </ul>
    </div>
  );
}
export default Home;

