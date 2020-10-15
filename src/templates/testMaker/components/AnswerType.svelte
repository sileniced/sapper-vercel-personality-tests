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
  import RadioInput from "../../molecules/RadioInput.svelte";

  export let answerType
</script>

<div class="mx2">
  <h3>Answer type</h3>
  <p><RadioInput bind:group={answerType} display="How much does it apply? (5 steps)" id="applies5"/></p>
  <p><RadioInput bind:group={answerType} display="How much does it apply? (3 steps)" id="applies3"/></p>
</div>
