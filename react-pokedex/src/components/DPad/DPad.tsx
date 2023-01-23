import { DPadProps } from './DPad.types'

const DPad = ({ className }: DPadProps) => {
  return (
    <div className={`relative w-8 h-8 ${className}`}>
      <div className="bg-black w-8 h-8 border border-stone-800 absolute top-0 right-8"></div>
      <div className="bg-black w-8 h-8 border border-stone-800 absolute top-0 right-16"></div>
      <div className="bg-black w-8 h-8 border border-stone-800 absolute -top-8 right-8"></div>
      <div className="bg-black w-8 h-8 border border-stone-800 absolute top-0 left-0"></div>
      <div className="bg-black w-8 h-8 border border-stone-800 absolute top-8 right-8"></div>
    </div>
  )
}

export default DPad
