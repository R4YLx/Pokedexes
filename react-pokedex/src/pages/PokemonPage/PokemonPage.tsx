import { useParams } from 'react-router-dom'
import Card from '@components/Card'
import { useGetPokemon } from '@hooks/useGetPokemon'

const PokemonPage = () => {
  const { id } = useParams()

  if (!id) {
    return null
  }

  const { data } = useGetPokemon(id)

  return (
    <div className="m-4">
      <Card data={data} />
    </div>
  )
}

export default PokemonPage
