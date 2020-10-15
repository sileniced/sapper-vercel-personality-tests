<style type="text/css">

    .mx2 {
        margin-bottom: 32px;
        margin-top: 32px;
    }

    h3 {
        margin-left: -8px;
    }
</style>

<script>
  import TextInput from "../../molecules/TextInput.svelte"
  import { onMount } from "svelte"

  export let personalityAspects

  const addPersonalityAspect = () => {
    personalityAspects = [
      ...personalityAspects,
      {
        name: ''
      }
    ]
  }

  onMount(() => {
    addPersonalityAspect()
  })
</script>

<div class="mx2">
  <h3>Personality Aspects</h3>
  {#each personalityAspects as { name }, idx (idx)}
    <TextInput id="aspect-{idx}" display="Aspect {idx + 1}" bind:value={name}/>
  {/each}
  <button on:click={addPersonalityAspect}>Add personality aspect</button>
</div>
