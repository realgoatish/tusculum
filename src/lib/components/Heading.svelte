<script lang='ts'>
  import { getContext, setContext, afterUpdate } from 'svelte'
  import { headingLevel, counter } from '$lib/constants/index.js'
  import { browser } from '$app/env'

  /** Set an optional class name for the top-level element of this component to enable 
   * scoped styling of each component instance from outside (in parent components or pages)
  */
  export let wrapperClass: string|undefined = undefined

  let level

  let id = `h-${Math.floor((new Date() * Math.random()))}`

  console.log(`typeof getContext(headingLevel) in HeadingTag.svelte: ${typeof getContext(headingLevel)}`)

  if (typeof getContext(headingLevel) === 'number') {
    level = Math.min(getContext(headingLevel), 6)
  } else {
    level = 1
  }

  let test = getContext(counter)

  $: if (browser && $test === 0) {
      $test = 1
    }

  afterUpdate(() => {
    if (browser && $test) {
      $test = 0
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

