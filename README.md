# Tusculum

Automated heading ranks for HTML document outline using Svelte. Contains 2 components that will automatically generate proper `<h2>`-`<h6>` elements based on the section structure of your HTML document.

Tusculum doesn't handle `<h1>` tags, since (you should only have one per page)[https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements#multiple_h1_elements_on_one_page]. Automating this wouldn't be worth the accessibility pitfalls it would invite.

Each `H` inside of root `Section` will become `h2`. If you nest two `Section` components, each `H` inside will become `<h3>`, etc.

Useful for dynamically setting headings in re-usable components when you don't know where your component will be placed in the DOM.

## Installation

```sh
npm install tusculum
```

## Recommended usage

Tusculum provides (custom)[https://github.com/realgoatish/tusculum/blob/master/README.md#custom-heading-level] and (relative)[https://github.com/realgoatish/tusculum/blob/master/README.md#relative-heading-level] heading levels, plus (custom)[https://github.com/realgoatish/tusculum/blob/master/README.md#custom-section-level] and (relative)[https://github.com/realgoatish/tusculum/blob/master/README.md#relative-section-level] section levels for explicitly setting levels or relationships when you need to, but you should be judicious with using them. The purpose of Tusculum is automation, so leverage that to the maximum extent possible.

The happy path is to simply use `<Section>` for denoting major sections of your site, and derive your `H` levels in relation to them as needed, like so:

```html
<!-- MyPage.svelte -->

<script>
  import { Section, H } from 'tusculum'
</script>

<body>
  ...
  <main>
    <h1>My Page Heading</h1>
    ...
    <Section>
      <!-- <h2> -->
      <H>My Articles Section</H>
      <article>
        <!-- <h3> -->
        <H level="+1">My First Article Heading</H>
        ...
      </article>
      <article>
        <!-- <h3> -->
        <H level="+1">My Second Article Heading</H>
        ... etc
      </article>
    </Section>
  </main>
```

## A note about accessibility

### Section will create an `aria-labelledby` relationship with its first descendant heading

In other words, it will render code like this:

```html
<section aria-labelledby="h-1119060909947">
  <!-- this heading will be announced as the section's name by screen readers e.g. 'Section, News Feed' -->
  <h2 id="h-1119060909947">News Feed</h2>
</section>
```

Since `<section>` tags with headings have generic (landmark roles)[https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles#3._landmark_roles], they're intended for screen readers to identify major regions of a page[^1]. You're advised not to overuse them. This is why Tusculum provides other ways to increment or derive heading levels automatically. From (MDN)[https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/region_role#accessibility_concerns]:

> Use sparingly! Landmark roles are intended to be used sparingly, to identify larger overall sections of the document. Using too many landmark roles can create "noise" in screen readers, making it difficult to understand the overall layout of the page.

[^1]: 
  It's also worth nothing that the other tags with (landmark roles)[https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles#3._landmark_roles], such as `<header>`, `<nav>`, `<main>`, `<aside>`, `<form>`, and `<footer>`, are more semantically descriptive. They usually don't need accessible names unless they're used in unusual ways. 
  
  So a single `<header>`, `<aside>`, `<main>` or `<footer>` as a direct child of `<body>`, or a single `<nav>` or `<form>` on a page, don't need aria semantics added. On the other hand, e.g. a second `<nav>` on the page would. 

## Full feature overview

### Custom section level

You can adjust the current level of section by passing custom level via prop:

```html
<Section level="3"> <!-- This section would normally be level 2 -->
  <Section><!-- This section will have level 4 (parent + 1) -->
    <H>H4</H>
  </Section>
  <Section level="2"><!-- ignores the parent and sets the level to 2 -->
    <H>H2</H>
  </Section>
</Section>
```

### Relative section level

You can set the current level of the section relatively to it's parent section.

```html
<Section level="4">
  <Section level="+2"><!-- This section will have level 6 (parent + 2) -->
    <H>H6</H>
  </Section>
  <Section level="-2"><!-- This section will have level 2 (parent - 2) -->
    <H>H2</H>
  </Section>
</Section>
```

### Custom heading level

You can adjust the current level of heading by passing custom level via prop:

```html
<Section>
  <Section>
    <H level="5">H5</H> <!-- ignores the parent level and use level 5 -->
  </Section>
  <Section>
    <H level="2">H2</H><!-- ignores the parent and sets the level to 2 -->
  </Section>
</Section>
```

### Relative heading level

You can set the current level of the heading relatively to it's parent section.

```html
<Section level="4">
  <H level="-2">H2</H><!-- This heading will have level 2 (parent - 2) -->
  <Section level="2">
    <H level="+3">H5</H><!-- This heading will have level 5 (parent + 3) -->
  </Section>
</Section>
```

### Heading rank overflow

Heading level cannot reach level lower than 2 and greater than 6. If calculated level is lower than two, it will become 2. If calculated level is greater than 6, it will become 6.

```html
<Section level="100">
  <H>H6</H>
  <H level="-200">H2</H>
  <H level="+100">H6</H>
</Section>
```

## Special Acknowledgements...

The original inspiration for this concept came from Heydon Pickering's (article)[https://medium.com/@Heydon/managing-heading-levels-in-design-systems-18be9a746fa3] on automating heading tags in React. An early iteration of my Svelte adaptation is found in (this)[https://stackoverflow.com/questions/61303237/how-to-set-dynamic-html-tag-according-to-props-in-svelte/68155771#68155771] Stackoverflow answer. 

My original idea for the functionality was too opinionated. It required a specific style of authoring HTML. When I decided to write and publish a full package, I found that GitHub user (mcibique)[https://github.com/mcibique]'s (vue-headings)[https://www.npmjs.com/package/vue-headings] library handled the edge cases and provided the necessary escape hatches to do this the right way. There are lots of valid ways to author HTML documents, so it's important to provide the flexibility to manually override heading levels.
