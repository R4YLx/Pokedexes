<script lang="ts">
import { Router, Route, navigate } from 'svelte-navigator'
import Pokedex from '@components/Pokedex/Pokedex.svelte'
import HomePage from '@pages/HomePage.svelte'
import PokemonPage from '@pages/PokemonPage.svelte'
import SearchPage from '@pages/SearchPage.svelte'
import { createQuery } from '@tanstack/svelte-query'
import { getAllPokemon } from '@services/PokemonAPI'

const data = createQuery({
  queryKey: ['pokemons'],
  queryFn: () => getAllPokemon()
})

const url = new URL(window.location.href)
let query: string

function handleMessage(e) {
  navigate('/search')
  query = e.detail.query
  url.searchParams.set('query', e.detail.query)
  window.history.replaceState(null, '', url)
}
</script>

<div class="h-full md:max-w-3xl md:m-auto md:py-8">
  <Router>
    <Pokedex on:search="{handleMessage}">
      <Route path="/" primary="{false}">
        <HomePage query="{data}" />
      </Route>

      <Route path="/pokemon/:id" primary="{false}">
        <PokemonPage />
      </Route>

      <Route path="/search" primary="{false}">
        <SearchPage query="{query}" />
      </Route>
    </Pokedex>
  </Router>
</div>
