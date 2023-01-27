<script lang="ts">
import { Home, ArrowSmLeft, Icon, type IconSource } from 'svelte-hero-icons'
export let homeIcon: IconSource = Home
export let arrowIcon: IconSource = ArrowSmLeft

import DPad from '@components/DPad'
import Button from '@components/Button'
import BlueIndicator from './Indicators/BlueIndicator.svelte'
import SmallerIndicator from './Indicators/SmallerIndicator.svelte'
import Display from './Display/Display.svelte'
import SearchForm from '@components/SearchForm'
</script>

<div
  class="{`bg-gradient-to-br  from-pokedex-dark-red via-red-700 to-pokedex-dark-red border border-black h-full rounded-3xl ${$$props.class}`}">
  <!-- Wrapper -->
  <div class="grid grid-rows-6 h-full p-5">
    <!-- Indicator container  -->
    <div class="flex gap-4">
      <BlueIndicator />
      <SmallerIndicator intent="{'red'}" />
      <SmallerIndicator intent="{'yellow'}" />
      <SmallerIndicator intent="{'green'}" />
    </div>

    <Display class="mb-8 row-span-3"><slot /></Display>

    <!-- Button container -->
    <div class="grid grid-cols-2 items-center mt-8 ml-8 md:ml-16">
      <div class="flex items-center gap-4">
        <Button intent="rounded" bgColor="grey" size="md">
          <Icon src="{homeIcon}" class="h-8 w-8" />
        </Button>

        <Button bgColor="blue" size="sm" intent="squared">
          <Icon src="{arrowIcon}" class="h-6 w-6" />
        </Button>
      </div>

      <DPad class="justify-self-end mr-8 md:mr-16" />
    </div>

    <SearchForm class="mx-8 md:mx-16" />
  </div>
</div>
