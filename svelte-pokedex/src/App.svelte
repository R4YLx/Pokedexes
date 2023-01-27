<script lang="ts">
import { Router, Route } from 'svelte-navigator'
import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query'
import Pokedex from '@components/Pokedex/Pokedex.svelte'
import HomePage from '@pages/HomePage.svelte'
import PokemonPage from '@pages/PokemonPage.svelte'
import SearchPage from '@pages/SearchPage.svelte'

const queryClient = new QueryClient()
</script>

<QueryClientProvider client="{queryClient}">
  <div class="h-full md:max-w-3xl md:m-auto md:py-8">
    <Pokedex>
      <Router>
        <Route path="/" component="{HomePage}" />
        <Route path="/pokemon/:id" component="{PokemonPage}" />
        <Route path="/search" component="{SearchPage}" />
      </Router>
    </Pokedex>
  </div>
</QueryClientProvider>
