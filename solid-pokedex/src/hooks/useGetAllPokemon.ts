import { createQuery } from '@tanstack/solid-query'
import { getAllPokemon } from '@services/PokemonAPI'

export const useGetAllPokemon = () => {
  return createQuery<IPokemon[]>(() => ['pokemons'], getAllPokemon)
}
