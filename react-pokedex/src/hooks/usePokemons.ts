import { useState } from 'react'

const usePokemons = () => {
  const [data, setData] = useState<IPokemon[] | null>(null)

  function allOrSearchedPokemons(
    allPokemon: IPokemon[] | undefined,
    searchResults: IPokemon[] | undefined
  ) {
    if (searchResults !== undefined) {
      setData(searchResults)
    } else if (allPokemon) {
      setData(allPokemon)
    }
  }

  return {
    allOrSearchedPokemons,
    data
  }
}

export default usePokemons
