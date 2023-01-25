import type { Component } from 'solid-js'
import { useGetAllPokemon } from './hooks/useGetAllPokemon'

const App: Component = () => {
  const { data } = useGetAllPokemon()

  console.log('data', data)

  return (
    <div>
      <h1 class="text-3xl font-bold underline">Hello world!</h1>
    </div>
  )
}

export default App
