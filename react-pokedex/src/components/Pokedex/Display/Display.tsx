import { DisplayProps } from './Display.types'

const Display = ({ children, className }: DisplayProps) => {
  return (
    <div
      className={`bg-slate-300 border border-black min-h-full rounded-bl-3xl rounded-tr-3xl flex ${className}`}
    >
      <div className="bg-green-600 border border-black m-6 basis-full overflow-y-scroll scrollbar-hide">
        {children}
      </div>
    </div>
  )
}

export default Display
