import axios from 'axios'

axios.defaults.baseURL = 'https://pokeapi.co/api/v2/'

export async function getPokemon(name: string): Promise<IPokemon> {
  const result = await axios.get(`pokemon/${name}`)

  return result.data
}

// get evolution chain

// get species

// get all 151 pokemons
export async function getAllPokemon(): Promise<IPokemon> {
  const result = await axios.get(`pokemon`)

  return result.data
}
