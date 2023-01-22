import { useGetAllPokemon } from './hooks/useGetAllPokemon'
import { useGetPokemon } from './hooks/useGetPokemon'

function App() {
  // const { data: pokemon } = useGetPokemon('mew')

  // console.log('pokemon', pokemon)

  // const { data: allPokemon } = useGetAllPokemon()

  // console.log('allPokemon', allPokemon)

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  )
}

export default App
