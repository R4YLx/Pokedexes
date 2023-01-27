<script lang="ts">
import { Link } from 'svelte-navigator'
import { getAllPokemon } from '@services/PokemonAPI'
import { createQuery } from '@tanstack/svelte-query'
import { capitalizeFirstLetter } from '@utils/helpers'

const query = createQuery({
  queryKey: ['pokemons'],
  queryFn: () => getAllPokemon()
})
</script>

<ul class="m-2">
  {#if $query.isLoading}
    <p>Loading...</p>
  {:else if $query.isSuccess}
    {#each $query.data as pokemon, i}
      <Link to="{`/pokemon/${pokemon.name}`}">
        <li class="cursor-pointer hover:bg-green-700 p-2 text-sm">
          {i + 1}.{capitalizeFirstLetter(pokemon.name)}
        </li>
      </Link>
    {/each}
  {/if}
</ul>
