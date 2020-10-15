<script>
  import { Collection } from "sveltefire";
  import Description from "./components/Description.svelte";
  import AnswerType from "./components/AnswerType.svelte";
  import PersonalityAspects from "./components/PersonalityAspects.svelte";
  import Questions from "./components/Questions.svelte";

  let name = ''
  let description = ''
  let answerType = 0
  let personalityAspects = []
  let questions = []
</script>

<style>
    h1 {
        margin-left: -32px;
    }

    h2 {
        margin-left: -16px;
    }
</style>

<h1>Personality Test Maker</h1>
<h2>Framework Description</h2>
<Description bind:description bind:name/>
<AnswerType bind:answerType/>

<h2>Test Maker</h2>
<PersonalityAspects bind:personalityAspects/>
<Questions bind:questions bind:personalityAspects/>

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

