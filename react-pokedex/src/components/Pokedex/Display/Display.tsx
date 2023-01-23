import { DisplayProps } from './Display.types'

const Display = ({ children }: DisplayProps) => {
  return (
    <div className="bg-slate-300 border border-black min-h-[50%] m-6 rounded-bl-3xl rounded-tr-3xl flex">
      <div className="bg-white border border-black m-6 basis-full">
        {children}
      </div>
    </div>
  )
}

export default Display
