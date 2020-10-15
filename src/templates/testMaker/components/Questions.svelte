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
  import TextInput from "../../molecules/TextInput.svelte";
  import SelectInput from "../../molecules/SelectInput.svelte";
  import CheckInput from "../../molecules/CheckInput.svelte";
  import { onMount } from "svelte";

  export let questions
  export let personalityAspects

  const addQuestion = () => {
      questions = [
        ...questions,
        {
          inquiry: '',
          reversed: false,
          aspect: undefined
        }
      ]
  }

  const aspectsToOptions = aspects => {
    return aspects.map((aspect, idx) => ({
      value: idx,
      display: aspect.name,
    }))
  }

  onMount(() => {
    addQuestion()
  })
</script>

<div class="mx2">
  <h3>Questions</h3>
  {#each questions as { inquiry, aspect, reversed }, idx (idx)}
    <div style="padding: 16px">
      <TextInput id="inquiry-{idx}" display="Inquiry {idx + 1}" bind:value={inquiry}/>

      <div class="pure-g">
        <div class="pure-u-1-3">
          <SelectInput options={aspectsToOptions(personalityAspects)}
                       bind:value={aspect}
                       id="inquiry-aspect-{idx}"
                       display="Personality aspect"
          />
        </div>

        <div class="pure-u-1-3" style="padding-top: 36px; padding-left: 16px;">
          <CheckInput bind:checked={reversed} display="Reversed"/>
        </div>
      </div>
    </div>
  {/each}
  <button on:click={addQuestion}>Add Question</button>
</div>
