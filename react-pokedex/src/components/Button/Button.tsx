import { cva } from 'cva'
import { ButtonProps } from './Button.types'

export const buttonStyles = cva(' p-4 drop-shadow-lg border border-black', {
  variants: {
    intent: {
      rounded: ['rounded-full'],
      squared: ['rounded-md']
    },
    bgColor: {
      grey: ['bg-gray-500']
    }
  },
  defaultVariants: {
    intent: 'squared',
    bgColor: 'grey'
  }
})

const Button = ({ intent, bgColor, ...rest }: ButtonProps) => {
  return <button className={buttonStyles({ intent, bgColor })} {...rest} />
}

export default Button
