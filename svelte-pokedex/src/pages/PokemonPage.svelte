<script lang="ts">
import { useParams } from 'svelte-navigator'
import { createQuery } from '@tanstack/svelte-query'
import Card from '@components/Card'
import { getPokemon } from '@services/PokemonAPI'

const params = useParams()

const query = createQuery({
  queryKey: ['pokemon'],
  queryFn: () => getPokemon($params.id)
})
</script>

<div class="m-4">
  {#if $query.isSuccess}
    <Card pokemon="{$query.data}" />
  {/if}
</div>
