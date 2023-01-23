import { cva } from 'cva'
import { ButtonProps } from './Button.types'

export const buttonStyles = cva(
  'p-2 drop-shadow-lg border border-black flex justify-center items-center',
  {
    variants: {
      intent: {
        rounded: ['rounded-full'],
        squared: ['rounded-md']
      },
      bgColor: {
        grey: ['bg-gray-400'],
        yellow: ['bg-yellow-400'],
        blue: ['bg-pokedex-light-blue']
      },
      size: {
        sm: ['min-h-14 min-w-14'],
        md: ['h-16 w-16']
      }
    },
    defaultVariants: {
      intent: 'squared',
      bgColor: 'grey',
      size: 'sm'
    }
  }
)

const Button = ({ intent, bgColor, size, ...rest }: ButtonProps) => {
  return (
    <button className={buttonStyles({ intent, bgColor, size })} {...rest} />
  )
}

export default Button
