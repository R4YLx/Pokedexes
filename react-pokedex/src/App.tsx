import Pokedex from './components/Pokedex/Pokedex'
import { useGetAllPokemon } from './hooks/useGetAllPokemon'
import { useGetPokemon } from './hooks/useGetPokemon'

function App() {
  // const { data: pokemon } = useGetPokemon('mew')

  // console.log('pokemon', pokemon)

  // const { data: allPokemon } = useGetAllPokemon()

  // console.log('allPokemon', allPokemon)

  return (
    <div className="h-full">
      <Pokedex />
    </div>
  )
}

export default App
