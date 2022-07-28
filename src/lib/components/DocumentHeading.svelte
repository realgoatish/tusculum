<script lang='ts'>
  import { getContext, afterUpdate } from 'svelte'
  import { headingLevel, counter } from '$lib/constants/index.js'
  import { browser } from '$app/env'

  /** Set an optional class name for the top-level element of this component to enable 
   * scoped styling of each component instance from outside (in parent components or pages)
  */
  export let wrapperClass: string|undefined = undefined

  export let level: string|number|undefined = undefined

  let id = `h-${Math.floor((new Date() * Math.random()))}`

  // if user manually overrides the heading level with the prop, set it to that number
  if (typeof level === 'number') {
    // must be between 1 - 6
    level = Math.max(1, Math.min(level, 6))
    // if user did a manual override with a relative value, set it to that number
  } else if (typeof level === 'string' && (level.startsWith("+") || level.startsWith("-"))) {
    level = (getContext(headingLevel) || 1) + parseInt(level)
    // if user's manual override is a string representation of a number, parse the int & set it to that number
  } else if (typeof level === 'string') {
    // must be between 1 - 6
    level = Math.max(1, Math.min(parseInt(level), 6))
    // if no manual override, get the context set by an ancestor
  } else if (typeof getContext(headingLevel) === 'number') {
    // must be between 1 - 6
    level = Math.min(getContext(headingLevel), 6)
  } else {
    // if no override & no context was already set by an ancestor, initialize the context as 2
    level = 2
  }

  let currentCounterValue = getContext(counter)

  $: if (browser && $currentCounterValue === 0) {
      $currentCounterValue = 1
    }

  afterUpdate(() => {
    if (browser && $currentCounterValue) {
      $currentCounterValue = 0
    }
  })

</script>

<svelte:element 
  this={`h${level}`} 
  {id}
  class:wrapperClass
>
  <slot />
</svelte:element>

