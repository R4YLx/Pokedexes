import axios from 'axios'

axios.defaults.baseURL = 'https://pokeapi.co/api/v2/'

// get all 151 pokemons
export async function getAllPokemon(): Promise<IPokemon[]> {
  const result = await axios.get(`pokemon?limit=151`)

  return result.data.results
}
