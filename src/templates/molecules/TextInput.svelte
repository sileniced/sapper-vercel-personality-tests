<script>
  import slugify from "slugify";

  export let display
  export let id
  export let value
  export let onInput = () => {
  }

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
<input bind:value={value} class="fw" id={id} on:input={onInput}>

