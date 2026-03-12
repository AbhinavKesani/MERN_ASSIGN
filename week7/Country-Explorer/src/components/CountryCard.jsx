function CountryCard({ country }) {

  return (
    <div className="p-4 shadow-md rounded-lg bg-white text-center">

      <img
        src={country.flags.png}
        alt={country.name.common}
        className="w-full h-32 object-cover mb-3"
      />

      <h2 className="text-xl font-bold">{country.name.common}</h2>

      <p><b>Capital:</b> {country.capital?.[0]}</p>
      <p><b>Population:</b> {country.population.toLocaleString()}</p>
      <p><b>Region:</b> {country.region}</p>

    </div>
  );
}

export default CountryCard;