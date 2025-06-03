const countries = [
    {
      name: "Brasil",
      flag: "https://flagcdn.com/w320/br.png",
      population: "213 milhões",
      capital: "Brasília",
      continent: "América do Sul",
      language: "Português",
      area: "8.516.000 km²"
    },
    {
      name: "Japão",
      flag: "https://flagcdn.com/w320/jp.png",
      population: "125 milhões",
      capital: "Tóquio",
      continent: "Ásia",
      language: "Japonês",
      area: "377.975 km²"
    },
    {
      name: "Canadá",
      flag: "https://flagcdn.com/w320/ca.png",
      population: "38 milhões",
      capital: "Ottawa",
      continent: "América do Norte",
      language: "Inglês e Francês",
      area: "9.985.000 km²"
    },
    {
      name: "França",
      flag: "https://flagcdn.com/w320/fr.png",
      population: "67 milhões",
      capital: "Paris",
      continent: "Europa",
      language: "Francês",
      area: "551.695 km²"
    },
    {
      name: "Austrália",
      flag: "https://flagcdn.com/w320/au.png",
      population: "26 milhões",
      capital: "Camberra",
      continent: "Oceania",
      language: "Inglês",
      area: "7.692.000 km²"
    },
    {
      name: "Egito",
      flag: "https://flagcdn.com/w320/eg.png",
      population: "110 milhões",
      capital: "Cairo",
      continent: "África",
      language: "Árabe",
      area: "1.010.000 km²"
    },
    {
      name: "Alemanha",
      flag: "https://flagcdn.com/w320/de.png",
      population: "83 milhões",
      capital: "Berlim",
      continent: "Europa",
      language: "Alemão",
      area: "357.022 km²"
    },
    {
      name: "Índia",
      flag: "https://flagcdn.com/w320/in.png",
      population: "1,428 bilhões",
      capital: "Nova Délhi",
      continent: "Ásia",
      language: "Hindi, Inglês e outros",
      area: "3.287.000 km²"
    },
    {
      name: "África do Sul",
      flag: "https://flagcdn.com/w320/za.png",
      population: "60 milhões",
      capital: "Cidade do Cabo (legislativa)",
      continent: "África",
      language: "11 idiomas oficiais",
      area: "1.221.000 km²"
    },
    {
      name: "Estados Unidos",
      flag: "https://flagcdn.com/w320/us.png",
      population: "332 milhões",
      capital: "Washington, D.C.",
      continent: "América do Norte",
      language: "Inglês",
      area: "9.834.000 km²"
    }
  ];
  
  function Main() {
    return (
      <main className="main">
        {countries.map((country) => (
          <div className="card" key={country.name}>
            <img src={country.flag} alt={`Bandeira de ${country.name}`} />
            <h2>{country.name}</h2>
            <p><strong>População:</strong> {country.population}</p>
            <p><strong>Capital:</strong> {country.capital}</p>
            <p><strong>Continente:</strong> {country.continent}</p>
            <p><strong>Idioma:</strong> {country.language}</p>
            <p><strong>Área:</strong> {country.area}</p>
          </div>
        ))}
      </main>
    );
  }
  
  export default Main;
  