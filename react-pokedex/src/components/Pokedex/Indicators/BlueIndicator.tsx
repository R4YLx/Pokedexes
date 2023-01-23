const BlueIndicator = () => {
  return (
    <div className="bg-pokedex-blue w-20 h-20 rounded-full border-[5px] border-white drop-shadow-xl relative">
      {/* Reflection on indicator */}
      <div className="bg-pokedex-light-blue h-6 w-6  absolute top-2 left-4 rounded-full"></div>
    </div>
  )
}

export default BlueIndicator
