export interface PokedexProps {
  className?: string
  onSearch(query: string): void
  renderedPokemonList: JSX.Element
}
