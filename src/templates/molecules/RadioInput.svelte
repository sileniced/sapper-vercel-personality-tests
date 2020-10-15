<script>
  import slugify from "slugify";

  export let group
  export let id
  export let display

  if (!id) {
    id = slugify(display)
  }
</script>

<style>
    label {
        margin-top: -8px;
    }
</style>


<input bind:group={group} id={id} type="radio" value={id}>
<label for={id}>{display}</label>

