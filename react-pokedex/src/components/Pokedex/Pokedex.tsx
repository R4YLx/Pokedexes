import { HomeIcon, ArrowUturnLeftIcon } from '@heroicons/react/24/outline'
import Button from '../Button'
import DPad from '../DPad'
import SearchForm from '../SearchForm'
import Display from './Display'
import BlueIndicator from './Indicators/BlueIndicator'
import SmallerIndicator from './Indicators/SmallerIndicator'
import { PokedexProps } from './Pokedex.types'

const Pokedex = ({ className, onSearch }: PokedexProps) => {
  return (
    <div
      className={`bg-gradient-to-br  from-pokedex-dark-red via-red-700 to-pokedex-dark-red border border-black h-full rounded-3xl ${className}`}
    >
      {/* Wrapper */}
      <div className="grid grid-rows-6 h-full p-5">
        {/* Indicator container */}
        <div className="flex gap-4 mb-2">
          <BlueIndicator />
          <SmallerIndicator intent={'red'} />
          <SmallerIndicator intent={'yellow'} />
          <SmallerIndicator intent={'green'} />
        </div>

        <Display className="mb-8 row-span-3" />

        {/* Button container */}
        <div className="grid grid-cols-2 items-center mt-8">
          <div className="flex items-center gap-4">
            <Button intent="rounded" bgColor="grey" size="md">
              <HomeIcon className="h-8 w-8" />
            </Button>

            <Button bgColor="blue">
              <ArrowUturnLeftIcon className="h-6 w-6" />
            </Button>
          </div>

          <DPad className="justify-self-end" />
        </div>

        <SearchForm onSearch={onSearch} />
      </div>
    </div>
  )
}

export default Pokedex
