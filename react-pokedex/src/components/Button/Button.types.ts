import { VariantProps } from 'cva'
import { buttonStyles } from './Button'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {}
