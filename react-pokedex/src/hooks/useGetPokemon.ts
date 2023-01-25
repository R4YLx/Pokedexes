import { useQuery } from '@tanstack/react-query'
import { getPokemon } from '@services/PokemonAPI'

export const useGetPokemon = (id: string) => {
  return useQuery<IPokemon>(['pokemon'], () => getPokemon(id))
}
