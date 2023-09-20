const Poke_api = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
    const data = await response.json();
    const pokemonList = data.results;
  
    const dummyData = await Promise.all(
      pokemonList.map(async (pokemon, index) => {
        const pokemonResponse = await fetch(pokemon.url);
        const pokemonData = await pokemonResponse.json();
  
        return {
          id: pokemonData.id,
          name: pokemonData.name,
          img: pokemonData.sprites.front_default,
          description: `A wild ${pokemonData.name} appeared!`,
          rating: (Math.random() * 5).toFixed(1),
          price: (Math.random() * 100).toFixed(2),
        };
      })
    );
  
    return dummyData;
  };
  
  Poke_api().then((dummyData) => {
    console.log(dummyData);
  });
  
  export default Poke_api;
  

  
