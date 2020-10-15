<script>
  import slugify from "slugify";

  export let id
  export let checked
  export let display

  if (!id) {
    id = slugify(display)
  }
</script>

<input id={id} type="checkbox" bind:checked={checked}>
<label for={id} style="margin-top: -8px">{display}</label>
