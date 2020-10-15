<style type="text/css">
    .mx2 {
        margin-bottom: 32px;
        margin-top: 32px;
    }
</style>

<script>
  import TextInput from "../../molecules/TextInput.svelte";

  export let name
  export let description
</script>

<div class="mx2">
  <TextInput bind:value={name} display="Name"/>
  <TextInput bind:value={description} display="Description"/>
</div>
