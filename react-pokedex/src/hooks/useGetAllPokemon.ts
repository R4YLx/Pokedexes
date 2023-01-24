import { useQuery } from '@tanstack/react-query'
import { getAllPokemon } from '../services/PokemonAPI'

export const useGetAllPokemon = () => {
  return useQuery<IPokemon[]>(['pokemons'], getAllPokemon)
}
