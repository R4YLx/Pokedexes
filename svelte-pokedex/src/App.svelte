<script lang="ts">
import { Router, Route, navigate } from 'svelte-navigator'
import Fuse from 'fuse.js'
import Pokedex from '@components/Pokedex'
import HomePage from '@pages/HomePage.svelte'
import PokemonPage from '@pages/PokemonPage.svelte'
import SearchPage from '@pages/SearchPage.svelte'
import { createQuery } from '@tanstack/svelte-query'
import { getAllPokemon } from '@services/PokemonAPI'

const query = createQuery<IPokemon[]>({
  queryKey: ['pokemons'],
  queryFn: () => getAllPokemon()
})

$: allPokemon = $query.data

// Options for Fuse.js search
const searchOptions = {
  threshold: 0.5,
  includeScore: true,
  keys: ['name']
}

const url = new URL(window.location.href)
let searchResults: IPokemon[]

// Initializing search func
$: fuse = allPokemon ? new Fuse(allPokemon, searchOptions) : undefined

function handleMessage(e) {
  navigate('/search')
  searchResults = fuse?.search(e.detail.query).map((item) => item.item)
  url.searchParams.set('query', e.detail.query)
  window.history.replaceState(null, '', url)
}

$: console.log('searchResults ', searchResults)
</script>

<div class="h-full md:max-w-3xl md:m-auto md:py-8">
  <Router>
    <Pokedex on:search="{handleMessage}">
      <Route path="/" primary="{false}">
        <HomePage data="{allPokemon}" />
      </Route>

      <Route path="/pokemon/:id" primary="{false}">
        <PokemonPage />
      </Route>

      <Route path="/search" primary="{false}">
        <SearchPage query="{searchResults}" />
      </Route>
    </Pokedex>
  </Router>
</div>
