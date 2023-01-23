import { HomeIcon, ArrowUturnLeftIcon } from '@heroicons/react/24/outline'
import Button from '../Button'
import SearchForm from '../SearchForm'
import Display from './Display'
import BlueIndicator from './Indicators/BlueIndicator'
import SmallerIndicator from './Indicators/SmallerIndicator'
import { PokedexProps } from './Pokedex.types'

const Pokedex = ({ className }: PokedexProps) => {
  return (
    <div
      className={`bg-gradient-to-br  from-pokedex-dark-red via-red-700 to-pokedex-dark-red border border-black h-full rounded-3xl ${className}`}
    >
      {/* Indicator container */}
      <div className="p-5 flex gap-4 mb-2">
        <BlueIndicator />

        <SmallerIndicator intent={'red'} />

        <SmallerIndicator intent={'yellow'} />

        <SmallerIndicator intent={'green'} />
      </div>

      <main className="h-1/2 mx-6">
        <Display className="mb-8" />

        {/* Button container */}
        <div className="mb-8 flex items-center gap-4">
          <Button intent="rounded" bgColor="grey" size="md">
            <HomeIcon className="h-8 w-8" />
          </Button>

          <Button bgColor="blue">
            <ArrowUturnLeftIcon className="h-6 w-6" />
          </Button>
        </div>

        <SearchForm className="" />
      </main>
    </div>
  )
}

export default Pokedex
