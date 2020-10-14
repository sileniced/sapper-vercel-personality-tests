<script>
  export let display
  export let id
  export let value
  export let onInput = () => {}
  export let className = ''
</script>

<style>
  .fw {
      width: 100%;
  }
</style>

<p class={className}>
  <label for={id}>{display}</label>
  <input id={id} bind:value={value} class="fw" on:input={onInput}>
</p>
