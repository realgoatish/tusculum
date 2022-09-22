<script lang="ts">
	import { setContext, getContext } from 'svelte';
	import { headingLevel, counter } from '$lib/constants/index.js';
	import { labelRegionWithHeading } from '$lib/actions/index.js';
	import { writable } from 'svelte/store';
	import { browser } from '$app/environment';

	/** Set an optional class name for the top-level element of this component to enable
	 * scoped styling of each component instance from outside (in parent components or pages)
	 */
	export let wrapperClass: string = null;

	export let level: string | number = null;

	let store = writable(0);

	// if user did a manual override with a number, set the context to that
	if (typeof level === 'number') {
		// must be between 2 - 6
		level = Math.min(Math.max(level, 2), 6);
		setContext(headingLevel, level);
		setContext(counter, store);

		// if user did a manual override with a relative value, parse the int & set it to that number
	} else if (typeof level === 'string' && (level.startsWith('+') || level.startsWith('-'))) {
		level = (getContext(headingLevel) || 2) + parseInt(level);
		setContext(headingLevel, level);
		setContext(counter, store);

		// if user's manual override is a string representation of a number, parse the int & set it to that number
	} else if (typeof level === 'string') {
		// must be between 2 - 6
		level = Math.min(Math.max(parseInt(level), 2), 6);
		setContext(headingLevel, level);
		setContext(counter, store);

		// if no prop was supplied, look for a context that was already set from an ancestor DocumentSection component
	} else if (typeof getContext(headingLevel) === 'number') {
		level = getContext(headingLevel) + 1;
		setContext(headingLevel, level);
		setContext(counter, store);
	} else {
		// if no prop was supplied & no context was already set by an ancestor, initialize the context as 2
		level = 2;
		setContext(headingLevel, level);
		setContext(counter, store);
	}

	let currentCounterValue = getContext(counter);

	let section = null;

	// whenever this store value changes, run the action to update this <Section>'s
	// 'aria-labelledby' attribute with its first descendant <H>'s 'id'.
	// this keeps the two in sync even when that <H>'s DOM gets updated independently
	// i.e. if its 'id' attribute changes, you don't have to worry about it
	$: $currentCounterValue, labelRegionWithHeading(section, browser);
</script>

<section
	bind:this={section}
	class={wrapperClass ? `tusculum-section wrapperClass` : 'tusculum-section'}
>
	<slot />
</section>
