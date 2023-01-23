import Display from './Display/Display'
import BlueIndicator from './Indicators/BlueIndicator'
import SmallerIndicator from './Indicators/SmallerIndicator'
import { PokedexProps } from './Pokedex.types'

const Pokedex = ({ className }: PokedexProps) => {
  return (
    <div
      className={`bg-pokedex-dark-red border border-black h-full rounded-3xl ${className}`}
    >
      {/* Indicator container */}
      <div className="p-5 flex gap-4">
        <BlueIndicator />

        <SmallerIndicator intent={'red'} />

        <SmallerIndicator intent={'yellow'} />

        <SmallerIndicator intent={'green'} />
      </div>

      <Display />
    </div>
  )
}

export default Pokedex
