import { createQuery } from '@tanstack/solid-query'
import { getPokemon } from '../services/PokemonAPI'

export const useGetPokemon = (id: string) => {
  return createQuery<IPokemon>(
    () => ['pokemon'],
    () => getPokemon(id)
  )
}
