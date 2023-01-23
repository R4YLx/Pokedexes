interface IPokemon {
  id?: number
  name: string
  height?: number
  order?: number
  weight?: number
  moves?: PokemonMove[]
  sprites?: {
    front_default: string
  }
  stats?: PokemonStat[]
  types?: PokemonType[]
  url?: string
}

interface PokemonMove {
  name: string
  url: string
}

interface PokemonStat {
  base_stat: number
  effort: number
  stat: {
    name: string
    url: string
  }
}

interface PokemonType {
  slot: number
  type: {
    name: string
    url: string
  }
}
