<script lang="ts">
import { capitalizeFirstLetter } from '@utils/helpers'
import { Link } from 'svelte-navigator'

export let query: IPokemon[]
export let searchQuery: string
</script>

<ul class="m-2">
  {#if !query.length}
    <p>No results of {searchQuery}</p>
  {/if}

  {#each query as pokemon, i}
    <Link to="{`/pokemon/${pokemon.name}`}">
      <li class="cursor-pointer hover:bg-green-700 p-2 text-sm">
        {i + 1}.{capitalizeFirstLetter(pokemon.name)}
      </li>
    </Link>
  {/each}
</ul>
