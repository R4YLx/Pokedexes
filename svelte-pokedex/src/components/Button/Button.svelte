<script lang="ts">
import { cva, type VariantProps } from 'cva'

const buttonStyles = cva(
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

interface ButtonProps extends VariantProps<typeof buttonStyles> {}

export let intent: ButtonProps['intent']
export let bgColor: ButtonProps['bgColor']
export let size: ButtonProps['size']
</script>

<button on:click class="{buttonStyles({ intent, bgColor, size })}"
  ><slot /></button>
