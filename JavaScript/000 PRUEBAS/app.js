const getDataService = async () => {
   const data = await getDataPokemonBucle();
  const types = typePokemon(data);
  PrintSelectTypePokemon(types, data);
  listeners(data);
  printGallery(data);
};

