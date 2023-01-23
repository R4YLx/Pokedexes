import { cva } from 'cva'
import { SmallerIndicatorProps } from './SmallerIndicator.types'

export const indicatorStyles = cva(
  'bg-gradient-radial w-6 h-6 rounded-full drop-shadow-lg',
  {
    variants: {
      intent: {
        red: ['from-red-500 via-pokedex-red to-red-500'],
        yellow: ['from-yellow-300 via-yellow-500 to-yellow-300'],
        green: ['from-green-400 via-green-600 to-green-from-green-400']
      }
    },
    defaultVariants: {
      intent: 'red'
    }
  }
)

const SmallerIndicator = ({ intent, ...rest }: SmallerIndicatorProps) => {
  return <div className={indicatorStyles({ intent })} {...rest}></div>
}

export default SmallerIndicator
