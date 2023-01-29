<script lang="ts">
import Button from '@components/Button'
import { Search, Icon, type IconSource } from 'svelte-hero-icons'

export let searchIcon: IconSource = Search
</script>

<form class="{`flex items-center justify-center gap-2 ${$$props.class}`}">
  <input
    type="text"
    placeholder="Search for a Pokémon"
    class="rounded-md h-10 indent-2 bg-green-600 border border-black placeholder-stone-700 w-full text-xs" />

  <Button type="submit" intent="squared" bgColor="yellow" size="sm">
    <Icon src="{searchIcon}" class="h-6 w-6" />
  </Button>
</form>
