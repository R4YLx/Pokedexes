<script lang="ts">
import { createEventDispatcher } from 'svelte'
import Button from '@components/Button'
import { Search, Icon, type IconSource } from 'svelte-hero-icons'

export let searchIcon: IconSource = Search
let inputValue = ''

const dispatch = createEventDispatcher()

function handleSubmit() {
  dispatch('search', {
    query: inputValue
  })

  inputValue = ''
}
</script>

<form
  class="{`flex items-center justify-center gap-2 ${$$props.class}`}"
  on:submit|preventDefault="{handleSubmit}">
  <input
    type="text"
    placeholder="Search for a Pokémon"
    bind:value="{inputValue}"
    class="rounded-md h-10 indent-2 bg-green-600 border border-black placeholder-stone-700 w-full text-xs" />

  <Button type="submit" intent="squared" bgColor="yellow" size="sm">
    <Icon src="{searchIcon}" class="h-6 w-6" />
  </Button>
</form>
