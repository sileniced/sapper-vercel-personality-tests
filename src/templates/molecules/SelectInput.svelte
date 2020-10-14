<script>
  export let className = ''
  export let id
  export let display
  export let value
  export let options = []
</script>

<style>
    .fw {
        width: 100%;
    }
</style>

<p class={className}>
  <label for={id}>{display}</label>
  <select id={id} class="fw" bind:value={value}>
    {#each options as option, i (i)}
      <option value={option.value}>
        {option.display}
      </option>
    {/each}
  </select>
</p>
