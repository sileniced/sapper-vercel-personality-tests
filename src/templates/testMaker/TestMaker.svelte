<script>
  let name = ''
  let description = ''
  let answerType = 0

  let personalityAspects = [{
    name: ''
  }]

  let questions = [{
    inquiry: ''
  }]

  let addPersonalityAspect = idx => () => {
    if (!personalityAspects[idx + 1]) {
      personalityAspects = [
        ...personalityAspects,
        {
          key: '',
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
          inquiry: ''
        }
      ]
    }
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

    .fw {
        width: 100% !important;
    }

    .mx2 {
        margin-bottom: 32px;
        margin-top: 32px;
    }
</style>

<h1>Personality Test Maker</h1>

<form>

  <h2>Personality Framework</h2>
  <div class="mx2">
    <p>
      <label for="name">Name</label>
      <input bind:value={name} class="fw" id="name">
    </p>

    <p>
      <label for="description">Description</label>
      <input bind:value={description} class="fw" id="description">
    </p>
  </div>

  <div class="mx2">
    <h3>Personality Aspects</h3>
    {#each personalityAspects as aspect, idx (idx)}
      <p>
        <label for="aspect-{idx}">Aspect {idx + 1}</label>
        <input id="aspect-{idx}" class="fw" bind:value={aspect.name} on:input={addPersonalityAspect(idx)}>
      </p>
    {/each}
  </div>

  <h2>Test Maker</h2>
  <div class="mx2">
    <h3>Answer type</h3>
    <p>
      <input bind:group={answerType} id="applies5" type="radio" value="applies5">
      <label for="applies5">[Does not apply to me] ... [Applies to me] (5 steps)</label>
    </p>

    <p>
      <input bind:group={answerType} id="applies3" type="radio" value="applies3">
      <label for="applies3">[Does not apply to me] ... [Applies to me] (3 steps)</label>
    </p>
  </div>

  <div class="mx2">
    <h2>Questions</h2>
    {#each questions as question, idx (idx)}
      <p>
        <label for="inquiry-{idx}">Inquiry {idx + 1}</label>
        <input id="inquiry-{idx}" class="fw" bind:value={question.inquiry} on:input={addQuestion(idx)}>
      </p>
    {/each}
  </div>

</form>

<hr/>

<h1>{name}</h1>
<h2>{description}</h2>
{#each questions as question, idx (idx)}
  <h3>{idx + 1}. {question.inquiry}</h3>
{/each}
