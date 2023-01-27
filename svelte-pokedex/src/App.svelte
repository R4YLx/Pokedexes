<script lang="ts">
import Pokedex from '@components/Pokedex/Pokedex.svelte'
import HomePage from '@pages/HomePage.svelte'
import PokemonPage from '@pages/PokemonPage.svelte'
import SearchPage from '@pages/SearchPage.svelte'
import { Router, Route } from 'svelte-routing'

export let url = ''
</script>

<div class="h-full md:max-w-3xl md:m-auto md:py-8">
  <Pokedex>
    <Router url="{url}">
      <Route path="/" component="{HomePage}" />
      <Route path="/pokemon/:id" component="{PokemonPage}" />
      <Route path="/search" component="{SearchPage}" />
    </Router>
  </Pokedex>
</div>
