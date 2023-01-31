<script lang="ts">
import { Link } from 'svelte-navigator'
import { capitalizeFirstLetter } from '@utils/helpers'

export let data: IPokemon[]
</script>

<ul class="m-2">
  {#if data}
    {#each data as pokemon, i}
      <Link to="{`/pokemon/${pokemon.name}`}">
        <li class="cursor-pointer hover:bg-green-700 p-2 text-sm">
          {i + 1}.{capitalizeFirstLetter(pokemon.name)}
        </li>
      </Link>
    {/each}
  {/if}
</ul>
