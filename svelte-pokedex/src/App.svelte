<script lang="ts">
import Button from '@components/Button/Button.svelte'
</script>

<main>
  <h1 class="text-3xl font-bold underline">Hello world!</h1>
  <Button
    intent="rounded"
    bgColor="grey"
    size="md"
    on:click="{() => alert('asfafafaf')}" />
</main>
