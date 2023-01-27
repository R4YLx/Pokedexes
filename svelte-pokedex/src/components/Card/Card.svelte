<style lang="scss">
.image {
  image-rendering: pixelated;
}
</style>

<script lang="ts">
import { capitalizeFirstLetter } from '@utils/helpers'

export let pokemon: IPokemon
</script>

<div class="flex flex-col justify-center gap-8 md:flex-row md:gap-16">
  <!-- Image and basic info container -->
  <div
    class="relative max-w-xs max-h-96 md:self-start md:h-auto md:sticky md:top-0">
    <img
      src="{pokemon.sprites?.front_default}"
      alt="{pokemon.name}"
      class="image w-96" />

    <h1 class="text-xl absolute top-0 bg-white bg-opacity-70 p-2 rounded-md">
      {capitalizeFirstLetter(pokemon.name)}
    </h1>

    <ul
      class="absolute bottom-0 right-0 bg-white bg-opacity-70 p-2 rounded-md md:left-32 md:bottom-4">
      <li class="text-xs mb-2">Height: {pokemon.height} dm</li>
      <li class="text-xs">Weight: {pokemon.weight} hg</li>
    </ul>
  </div>

  <div class="flex flex-col gap-8">
    <div class="flex flex-col gap-2">
      <h2 class="text-sm">Types:</h2>
      <ul class="flex flex-col">
        {#each pokemon.types as type}
          <li class="text-xs my-1">
            {capitalizeFirstLetter(type.type.name)}
          </li>
        {/each}
      </ul>
    </div>

    <!-- Base stats -->
    <div class="flex flex-col gap-2">
      <h2 class="text-sm">Stats:</h2>
      <ul class="flex flex-col">
        {#each pokemon.stats as stat}
          <li class="text-xs my-1">
            {capitalizeFirstLetter(stat.stat.name)}: {stat.base_stat}
          </li>
        {/each}
      </ul>
    </div>

    <div class="flex flex-col gap-2">
      <h2 class="text-sm">Top 5 moves:</h2>
      <ul class="flex flex-col">
        {#each pokemon.moves.slice(0, 5) as move, i}
          <li class="text-xs my-1">
            {i + 1}.{capitalizeFirstLetter(move.move.name)}
          </li>
        {/each}
      </ul>
    </div>
  </div>
</div>
