import { useEffect, useMemo } from 'react'
import { Route, Routes, useSearchParams } from 'react-router-dom'
import Fuse from 'fuse.js'
import Pokedex from './components/Pokedex/Pokedex'
import { useGetAllPokemon } from './hooks/useGetAllPokemon'
import usePokemon from './hooks/usePokemons'
import HomePage from './pages/HomePage'

function App() {
  const [searchParams, setSearchParams] = useSearchParams({ query: '' })
  const query = searchParams.get('query')
  const { data: allPokemon } = useGetAllPokemon()

  // Options for Fuse.js search
  const searchOptions = {
    threshold: 0.5,
    includeScore: true,
    keys: ['name']
  }

  // Initializing search func
  const fuse = allPokemon ? new Fuse(allPokemon, searchOptions) : undefined

  // Callback func for search
  function onSearch(query: string) {
    setSearchParams({ query: query })
  }

  // Keeps searched results on re-render
  const searchResults = useMemo(() => {
    if (query) {
      // if query exists, results will return hits
      const result = fuse?.search(query).map((item) => item.item)
      return result
    }
  }, [query, allPokemon])

  const { allOrSearchedPokemons, data } = usePokemon()

  useEffect(() => {
    // Shows all Pokemon or searched ones
    allOrSearchedPokemons(allPokemon, searchResults)
  }, [allPokemon, searchResults])

  return (
    <div className="h-full">
      <Pokedex onSearch={onSearch}>
        <Routes>
          <Route path="/" element={<HomePage data={data} />} />
        </Routes>
      </Pokedex>
    </div>
  )
}

export default App
