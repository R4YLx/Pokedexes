import { PokedexProps } from './Pokedex.types'

const Pokedex = ({ className }: PokedexProps) => {
  return (
    <div
      className={`bg-pokedex-dark-red border border-black h-full rounded-3xl ${className}`}
    >
      {/* Indicator container */}
      <div className="p-5 flex gap-4">
        {/* Blue glass indicator */}
        <div className="bg-pokedex-blue w-20 h-20 rounded-full border-[5px] border-white relative">
          {/* Reflection on indicator */}
          <div className="bg-pokedex-light-blue h-6 w-6  absolute top-2 left-4 rounded-full"></div>
        </div>

        {/* Red indicator */}
        <div className="bg-gradient-radial from-red-500 via-pokedex-red to-red-500 w-6 h-6 rounded-full drop-shadow-lg"></div>

        {/* Yellow indicator */}
        <div className="bg-gradient-radial from-yellow-300 via-yellow-500 to-yellow-300 w-6 h-6 rounded-full drop-shadow-lg"></div>

        {/* Green indicator */}
        <div className="bg-gradient-radial from-green-400 via-green-600 to-green-from-green-400 w-6 h-6 rounded-full drop-shadow-lg"></div>
      </div>

      <div className="bg-slate-300 border border-black min-h-[50%] m-6 rounded-bl-3xl rounded-tr-3xl flex">
        <div className="bg-white border border-black m-6 basis-full"></div>
      </div>
    </div>
  )
}

export default Pokedex
