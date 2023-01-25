import { capitalizeFirstLetter } from '@utils/helpers'
import { CardProps } from './Card.types'
import styles from './Card.module.scss'

const Card = ({ data }: CardProps) => {
  if (!data) {
    return null
  }

  return (
    <div className={`${styles.Root} flex flex-col gap-8`}>
      {/* Image and basic info container */}
      <div className="relative">
        <h1 className="text-xl absolute top-0 bg-white bg-opacity-70 p-2 rounded-md">
          {capitalizeFirstLetter(data.name)}
        </h1>

        <img
          src={data.sprites?.front_default}
          alt={data.name}
          className={`${styles.Root__image} image w-96`}
        />

        <ul className="absolute bottom-0 right-0 bg-white bg-opacity-70 p-2 rounded-md">
          <li className="text-xs">Height: {data.height} dm</li>
          <li className="text-xs">Weight: {data.weight} hg</li>
        </ul>
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-sm">Types:</h2>
          <ul className="flex flex-col">
            {data.types?.map((type, i) => (
              <li key={i} className="text-xs my-1">
                {type.type.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Base stats */}
        <div className="flex flex-col gap-2">
          <h2 className="text-sm">Stats:</h2>
          <ul className="flex flex-col">
            {data.stats?.map((stat, i) => (
              <li key={i} className="text-xs my-1">
                {stat.stat.name}: {stat.base_stat}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-sm">Top 5 moves:</h2>
          <ul className="flex flex-col">
            {data.moves?.slice(0, 5).map((move, i) => (
              <li key={i} className="text-xs my-1">
                {i + 1}.{move.move.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Card
