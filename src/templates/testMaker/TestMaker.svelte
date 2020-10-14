<script>
  import { onMount } from 'svelte';
  import { Collection } from "sveltefire";
  import TextInput from "../molecules/TextInput.svelte";
  import RadioInput from "../molecules/RadioInput.svelte";
  import SelectInput from "../molecules/SelectInput.svelte";

  let name = ''
  let description = ''
  let answerType = 0
  let personalityAspects = []
  let questions = []

  let addPersonalityAspect = idx => () => {
    if (!personalityAspects[idx + 1]) {
      personalityAspects = [
        ...personalityAspects,
        {
          name: ''
        }
      ]
    }
  }

  let addQuestion = idx => () => {
    if (!questions[idx + 1]) {
      questions = [
        ...questions,
        {
          inquiry: '',
          reversed: false,
          aspect: personalityAspects[personalityAspects.length - 1].name
        }
      ]
    }
  }


  onMount(() => {
    addPersonalityAspect(-1)()
    addQuestion(-1)()
  })

  const aspectsToOptions = aspects => {
    return aspects.map(aspect => ({
      value: aspect.name,
      display: aspect.name,
    }))
  }
</script>

<style>
    h1 {
        margin-left: -32px;
    }

    h2 {
        margin-left: -16px;
    }

    h3 {
        margin-left: -8px;
    }

    .mx2 {
        margin-bottom: 32px;
        margin-top: 32px;
    }
</style>

<h1>Personality Test Maker</h1>


<h2>Personality Framework</h2>
<div class="mx2">
  <TextInput bind:value={name} display="Name" id="name"/>
  <TextInput bind:value={description} display="Description" id="description"/>
</div>

<div class="mx2">
  <h3>Answer type</h3>
  <RadioInput bind:group={answerType} display="How much does it apply? (5 steps)" id="applies5"/>
  <RadioInput bind:group={answerType} display="How much does it apply? (3 steps)" id="applies3"/>
</div>

<h2>Test Maker</h2>
<div class="mx2">
  <h3>Personality Aspects</h3>
  {#each personalityAspects as aspect, idx (idx)}
    <TextInput id="aspect-{idx}" display="Aspect {idx + 1}" bind:value={aspect.name}
               onInput={addPersonalityAspect(idx)}/>
  {/each}
</div>

<div class="mx2">
  <h3>Questions</h3>
  {#each questions as question, idx (idx)}
    <div style="padding: 16px">

      <TextInput id="inquiry-{idx}" display="Inquiry {idx + 1}" bind:value={question.inquiry}
                 onInput={addQuestion(idx)}/>

      <div class="pure-g">
        <SelectInput className="pure-u-15-24"
                     options={aspectsToOptions(personalityAspects)}
                     bind:value={question.aspect}
                     id="inquiry-aspect-{idx}"
                     display="Personality aspect"/>

        <p class="pure-u-1-3" style="padding-top: 36px; padding-left: 16px;">
          <input id="inquiry-reversed-{idx}" type="checkbox" bind:checked={question.reversed}>
          <label for="inquiry-reversed-{idx}" style="margin-top: -8px">Reversed</label>
        </p>
      </div>
    </div>
  {/each}
</div>

<Collection let:ref={ref} path={'personality_tests'}>
  <button on:click={() => {
    ref.add({
      name,
      description,
      answerType,
      personalityAspects,
      questions
    })
  }}>
    Save
  </button>
  <progress slot="loading"></progress>
</Collection>

