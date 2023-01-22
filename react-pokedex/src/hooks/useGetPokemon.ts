import { useQuery } from '@tanstack/react-query'
import { getPokemon } from '../services/PokemonAPI'

export const useGetPokemon = (name: string) => {
  return useQuery<IPokemon>(['pokemon', name], () => getPokemon(name))
}
