import { VariantProps } from 'cva'
import { indicatorStyles } from './SmallerIndicator'

export interface SmallerIndicatorProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof indicatorStyles> {}
