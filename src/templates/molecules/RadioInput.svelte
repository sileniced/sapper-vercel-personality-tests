<script>
  export let group
  export let id
  export let display
  export let className = ''
</script>

<style>
  label {
      margin-top: -8px;
  }
</style>

<p class={className}>
  <input bind:group={group} id={id} type="radio" value={id}>
  <label for={id}>{display}</label>
</p>
