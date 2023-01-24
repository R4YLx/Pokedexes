import { useState } from 'react'

const useRenderPokemons = () => {
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

  function RenderPokemonList() {
    return (
      <ul className="m-2">
        {data &&
          data.map((pokemon) => (
            <li key={pokemon.name} className="cursor-pointer">
              {pokemon.name}
            </li>
          ))}
      </ul>
    )
  }

  return {
    data,
    allOrSearchedPokemons,
    RenderPokemonList
  }
}

export default useRenderPokemons
