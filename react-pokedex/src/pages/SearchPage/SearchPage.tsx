import { Link } from 'react-router-dom'
import { capitalizeFirstLetter } from '@utils/helpers'
import { SearchPageProps } from './SearchPage.types'

const SearchPage = ({ data }: SearchPageProps) => {
  if (!data) {
    return null
  }

  return (
    <ul className="m-2">
      {data.map((pokemon) => (
        <Link key={pokemon.name} to={`/pokemon/${pokemon.name}`}>
          <li className="cursor-pointer hover:bg-green-700 p-2">
            {capitalizeFirstLetter(pokemon.name)}
          </li>
        </Link>
      ))}
    </ul>
  )
}

export default SearchPage
