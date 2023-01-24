import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import Fuse from 'fuse.js'
import Pokedex from './components/Pokedex/Pokedex'
import { useGetAllPokemon } from './hooks/useGetAllPokemon'

function App() {
  const [searchParams, setSearchParams] = useSearchParams({ query: '' })
  const query = searchParams.get('query')
  const { data: allPokemon } = useGetAllPokemon()

  const searchOptions = {
    threshold: 0.5,
    includeScore: true,
    keys: ['name']
  }

  const fuse = allPokemon ? new Fuse(allPokemon, searchOptions) : undefined

  function onSearch(query: string) {
    setSearchParams({ query: query })
  }

  const searchResults = useMemo(() => {
    if (query) {
      const result = fuse?.search(query).map((item) => item.item)
      return result
    }
  }, [query, allPokemon])

  console.log('allPokemon', allPokemon)
  console.log('searchResults', searchResults)

  return (
    <div className="h-full">
      <Pokedex onSearch={onSearch} />
    </div>
  )
}

export default App
