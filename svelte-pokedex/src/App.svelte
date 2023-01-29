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
  <Router>
    <div class="h-full md:max-w-3xl md:m-auto md:py-8">
      <Pokedex>
        <Route path="/" primary="{false}">
          <HomePage />
        </Route>

        <Route path="/pokemon/:id" primary="{false}">
          <PokemonPage />
        </Route>

        <Route path="/search" primary="{false}">
          <SearchPage />
        </Route>
      </Pokedex>
    </div>
  </Router>
</QueryClientProvider>
