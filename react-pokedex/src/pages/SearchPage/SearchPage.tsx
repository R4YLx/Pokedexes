import { Link } from 'react-router-dom'
import { capitalizeFirstLetter } from '@utils/helpers'
import { SearchPageProps } from './SearchPage.types'

const SearchPage = ({ data, searchQuery }: SearchPageProps) => {
  if (!data?.length) {
    return <p className="m-2">No results of {searchQuery}</p>
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
