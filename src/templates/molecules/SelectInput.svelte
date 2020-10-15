<script>
  import slugify from "slugify";

  export let id
  export let display
  export let value
  export let options = []

  if (!id) {
    id = slugify(display)
  }
</script>

<style>
    .fw {
        width: 100%;
    }
</style>

<label for={id}>{display}</label>
<select bind:value={value} class="fw" id={id}>
  {#each options as option, i (i)}
    <option value={option.value}>
      {option.display}
    </option>
  {/each}
</select>
