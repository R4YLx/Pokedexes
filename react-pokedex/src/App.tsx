import { useMemo } from 'react'
import {
  createSearchParams,
  Route,
  Routes,
  useNavigate,
  useSearchParams
} from 'react-router-dom'
import Fuse from 'fuse.js'
import Pokedex from '@components/Pokedex'
import { useGetAllPokemon } from '@hooks/useGetAllPokemon'
import HomePage from '@pages/HomePage'
import PokemonPage from '@pages/PokemonPage'
import SearchPage from '@pages/SearchPage'

function App() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('query')

  const { data: allPokemon } = useGetAllPokemon()
  const navigate = useNavigate()

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
    navigate({
      pathname: '/search',
      search: `?${createSearchParams({
        query: query
      })}`
    })
  }

  // Keeps searched results on re-render
  const searchResults = useMemo(() => {
    if (query) {
      // if query exists, results will return hits
      const result = fuse?.search(query).map((item) => item.item)
      return result
    }
  }, [query, allPokemon])

  return (
    <div className="h-full md:max-w-3xl md:m-auto md:py-8">
      <Pokedex onSearch={onSearch}>
        <Routes>
          <Route path="/" element={<HomePage data={allPokemon} />} />
          <Route path="/pokemon/:id" element={<PokemonPage />} />
          <Route path="/search" element={<SearchPage data={searchResults} />} />
        </Routes>
      </Pokedex>
    </div>
  )
}

export default App
