import { HomePageProps } from './HomePage.types'

const HomePage = ({ data }: HomePageProps) => {
  if (!data) {
    return null
  }

  return (
    <ul className="m-2">
      {data.map((pokemon) => (
        <li
          key={pokemon.name}
          className="cursor-pointer hover:bg-green-700 p-2"
        >
          {pokemon.name}
        </li>
      ))}
    </ul>
  )
}

export default HomePage
