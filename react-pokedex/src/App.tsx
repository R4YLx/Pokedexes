import Fuse from 'fuse.js'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Pokedex from './components/Pokedex/Pokedex'
import { useGetAllPokemon } from './hooks/useGetAllPokemon'

function App() {
  const [searchParams, setSearchParams] = useSearchParams({ query: '' })
  const query = searchParams.get('query')
  const [searchResults, setSearchResults] = useState<IPokemon[] | undefined>(
    undefined
  )
  const { data: allPokemon } = useGetAllPokemon()

  const searchOptions = {
    threshold: 0.45,
    includeScore: true,
    keys: ['name']
  }

  const fuse = allPokemon ? new Fuse(allPokemon, searchOptions) : undefined

  function onSearch(query: string) {
    setSearchParams({ query: query })
  }

  useEffect(() => {
    if (query) {
      const result = fuse?.search(query).map((item) => item.item)
      setSearchResults(result)
    }
  }, [query])

  console.log('searchResults', searchResults)

  console.log('allPokemon', allPokemon)

  return (
    <div className="h-full">
      <Pokedex onSearch={onSearch} />
    </div>
  )
}

export default App
