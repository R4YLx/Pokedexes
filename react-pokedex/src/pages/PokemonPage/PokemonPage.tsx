import { useParams } from 'react-router-dom'
import { useGetPokemon } from '../../hooks/useGetPokemon'

const PokemonPage = () => {
  const { id } = useParams()

  if (!id) {
    return null
  }

  const { data } = useGetPokemon(id)

  console.log('data', data)

  return <div className="m-2">PokemonPage</div>
}

export default PokemonPage
