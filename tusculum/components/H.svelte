<script>import { getContext, afterUpdate } from 'svelte';
import { headingLevel, counter } from '../constants/index.js';
/** Set an optional class name for the top-level element of this component to enable
 * scoped styling of each component instance from outside (in parent components or pages)
 */
export let wrapperClass = null;
export let level = null;
let id = `h-${Math.floor(new Date() * Math.random())}`;
// if user manually overrides the heading level with the prop, set it to that number
if (typeof level === 'number') {
    // must be between 2 - 6
    level = Math.max(2, Math.min(level, 6));
    // if user did a manual override with a relative value, set it to that number
}
else if (typeof level === 'string' && (level.startsWith('+') || level.startsWith('-'))) {
    level = (getContext(headingLevel) || 2) + parseInt(level);
    // if user's manual override is a string representation of a number, parse the int & set it to that number
}
else if (typeof level === 'string') {
    // must be between 2 - 6
    level = Math.max(2, Math.min(parseInt(level), 6));
    // if no manual override, get the context set by an ancestor
}
else if (typeof getContext(headingLevel) === 'number') {
    // must be between 2 - 6
    level = Math.min(getContext(headingLevel), 6);
}
else {
    // if no override & no context was already set by an ancestor, initialize the context as 2
    level = 2;
}
let currentCounterValue = getContext(counter);
// when this comp is first instantiated, the store is set to 1
$: if ($currentCounterValue === 0) {
    $currentCounterValue = 1;
}
// any time this component's DOM is updated, set the store back to 0 to trigger
// its first ancestor <Section> syncing its 'aria-labelledby' with this heading's 'id'.
// This protects against the two getting out of sync due to obscure DOM changes.
afterUpdate(() => {
    if ($currentCounterValue) {
        $currentCounterValue = 0;
    }
});
</script>

<svelte:element
	this={`h${level}`}
	{id}
	class={wrapperClass ? `tusculum-h ${wrapperClass}` : 'tusculum-h'}
>
	<slot />
</svelte:element>
