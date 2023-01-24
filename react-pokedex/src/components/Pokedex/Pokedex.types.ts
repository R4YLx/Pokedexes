export interface PokedexProps {
  className?: string
  onSearch(query: string): void
  children: JSX.Element
}
