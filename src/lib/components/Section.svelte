
<script lang='ts'>
  import { setContext, getContext } from 'svelte'
  import { headingLevel, counter } from '$lib/constants/index.js'
  import { labelRegionWithHeading } from '$lib/actions/index.js'
  import { writable } from 'svelte/store'
  import { browser } from '$app/env'


  /** Set an optional class name for the top-level element of this component to enable 
   * scoped styling of each component instance from outside (in parent components or pages)
  */
  export let wrapperClass: string|undefined = undefined

  let level
  let store = writable(0)

  if (typeof getContext(headingLevel) === 'number') {
    level = getContext(headingLevel) + 1
    setContext(headingLevel, level)
    setContext(counter, store)
  } else {
    level = 2
    setContext(headingLevel, level)
    setContext(counter, store)
  }

  let currentCounterValue = getContext(counter)

  let section = null

  $: $currentCounterValue, labelRegionWithHeading(section, browser)

</script>

<section
  bind:this={section}
  class:wrapperClass>
  <slot />
</section>
