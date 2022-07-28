# Tusculum

Automated heading ranks for HTML document outline using Svelte. Contains 2 components that will automatically generate proper `<h1>`-`<h6>` elements based on the section structure of your HTML document.

Each `DocumentHeading` inside of root `DocumentSection` will become `h1`. If you nest two `DocumentSection` components, each `DocumentHeading` inside will become `<h2>`, etc.

Useful for dynamically setting headings in re-usable components when you don't know where your component will be placed in the DOM.

Consider you have an accordion component rendering this:

```html
<ul>
  <li>
    <h4>Heading 1</h4>
    ... content ...
  </li>
  <li>
    <h4>Heading 2</h4>
    ... content ...
  </li>
  <li>
    <h4>Heading 3</h4>
    ... content ...
  </li>
</ul>
```

Is `<h4>` the right heading here? If there are no `<h3>` elements on the page, those should be `<h3>`s instead!

Replace the `<h4>` with `<DocumentHeading>` component and it will automatically generate that for you based on number of `<DocumentSection>`s it is nested in.

## Installation

```sh
npm install tusculum
```

## Usage

### Basic example

```html
<!-- MyComponent.svelte -->

<script>
  import { DocumentSection, DocumentHeading } from 'tusculum'
</script>

<DocumentSection>
  <DocumentHeading>My Heading</DocumentHeading>

  <DocumentSection>
    <DocumentHeading>My Child Heading</DocumentHeading>
    <p>Lorem ipsum ...</p>

    <DocumentHeading>My Child Heading</DocumentHeading>
    <p>Lorem ipsum ...</p>

    <DocumentHeading>My Child Heading</DocumentHeading>
    <p>Lorem ipsum ...</p>

    <DocumentSection>
      <DocumentHeading>My Grand Child Heading</DocumentHeading>
      <p>Lorem ipsum ...</p>

      <DocumentHeading>My Grand Child Heading</DocumentHeading>
      <p>Lorem ipsum ...</p>
    </DocumentSection>
  </DocumentSection>
</DocumentSection>
```

Renders following document structure:

```html
<section>
  <h1>My Heading</h1>

  <section>
    <h2>My Child Heading</h2>
    <p>Lorem ipsum ...</p>

    <h2>My Child Heading</h2>
    <p>Lorem ipsum ...</p>

    <h2>My Child Heading</h2>
    <p>Lorem ipsum ...</p>

    <section>
      <h3>My Grand Child Heading</h3>
      <p>Lorem ipsum ...</p>

      <h3>My Grand Child Heading</h3>
      <p>Lorem ipsum ...</p>
    </section>
  </section>
</section>
```

### Custom section tag

If you don't like `<section>` element, you can pass any other tag into the `tag` prop:

```html
<DocumentSection tag="main">
  <DocumentSection tag="nav">
    ...
  </DocumentSection>
  <DocumentSection tag="footer">
    ...
  </DocumentSection>
</DocumentSection>
```

### Custom section level

You can adjust the current level of section by passing custom level via prop:

```html
<DocumentSection level="2"> <!-- This section would normally be level 1 -->
  <DocumentSection><!-- This section will have level 3 (parent + 1) -->
    <DocumentHeading>H3</DocumentHeading>
  </DocumentSection>
  <DocumentSection level="1"><!-- ignores the parent and sets the level to 1 -->
    <DocumentHeading>H1</DocumentHeading>
  </DocumentSection>
</DocumentSection>
```

### Relative section level

You can set the current level of the section relatively to it's parent section.

```html
<DocumentSection level="4">
  <DocumentSection level="+2"><!-- This section will have level 6 (parent + 2) -->
    <DocumentHeading>H6</DocumentHeading>
  </DocumentSection>
  <DocumentSection level="-2"><!-- This section will have level 2 (parent - 2) -->
    <DocumentHeading>H2</DocumentHeading>
  </DocumentSection>
</DocumentSection>
```

### Custom heading level

You can adjust the current level of heading by passing custom level via prop:

```html
<DocumentSection>
  <DocumentSection>
    <DocumentHeading level="5">H5</DocumentHeading> <!-- ignores the parent level and use level 5 -->
  </DocumentSection>
  <DocumentSection>
    <DocumentHeading level="1">H1</DocumentHeading><!-- ignores the parent and sets the level to 1 -->
  </DocumentSection>
</DocumentSection>
```

### Relative heading level

You can set the current level of the heading relatively to it's parent section.

```html
<DocumentSection level="4">
  <DocumentHeading level="-2">H2</DocumentHeading><!-- This heading will have level 2 (parent - 2) -->
  <DocumentSection level="2">
    <DocumentHeading level="+3">H5</DocumentHeading><!-- This heading will have level 5 (parent + 3) -->
  </DocumentSection>
</DocumentSection>
```

### Heading rank overflow

Heading level cannot reach level lower than 1 and greater than 6. If calculated level is lower than one, it will become 1. If calculated level is greater than 6, it will become 6.

```html
<DocumentSection level="100">
  <DocumentHeading>H6</DocumentHeading>
  <DocumentHeading level="-200">H1</DocumentHeading>
  <DocumentHeading level="+100">H6</DocumentHeading>
</DocumentSection>
```

### Recommended usage

Be aware that a `DocumentHeading` component that isn't nested in any `DocumentSection` components will default to rendering an `<h1>`. When a `DocumentHeading` component __is__ nested at the first level in a `DocumentSection` component, it will also default to rendering as `<h1>`. 

This could lead to unexpected results and create multiple `<h1>`s on a page... 

```html
<body>
  <!-- renders as <h1> -->
  <DocumentHeading>My Heading</DocumentHeading>
  ...
  <DocumentSection>
    <!-- also renders as <h1> -->
    <DocumentHeading>My First Nested heading</DocumentHeading>
    ...
  </DocumentSection>
</body>
```

(Read about why you don't want that)[https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements#multiple_h1_elements_on_one_page]. Tusculum provides (custom)[https://github.com/realgoatish/tusculum/blob/master/README.md#custom-heading-level] and (relative)[https://github.com/realgoatish/tusculum/blob/master/README.md#relative-heading-level] heading levels, plus (custom)[https://github.com/realgoatish/tusculum/blob/master/README.md#custom-section-level] and (relative)[https://github.com/realgoatish/tusculum/blob/master/README.md#relative-section-level] section levels for explicitly setting these things when you need to, but you're encouraged to be judicious with them. Use these only when they're really needed, so they don't turn into a maintenance footgun and defeat the purpose of Tusculum: automation.

The path of least resistance is to simply always use a new level of nesting to create new heading levels, like so:

```html
<body>
  ...
  <DocumentSection tag="main">
    <!-- <h1> -->
    <DocumentHeading>My Page Heading</DocumentHeading>
    ...
    <DocumentSection>
      <!-- <h2> -->
      <DocumentHeading>My First Page Section</DocumentHeading>
      <DocumentSection tag="article">
        <!-- <h3> -->
        <DocumentHeading>My Article Heading</DocumentHeading>
        ... etc
      </DocumentSection>
    </DocumentSection>
  </DocumentSection>
```

## Special Acknowledgements...

The original inspiration for this concept came from Heydon Pickering's (article)[https://medium.com/@Heydon/managing-heading-levels-in-design-systems-18be9a746fa3] on automating heading tags in React. An early iteration of my Svelte adaptation is found in (this)[https://stackoverflow.com/questions/61303237/how-to-set-dynamic-html-tag-according-to-props-in-svelte/68155771#68155771] Stackoverflow answer. 

My original idea for the functionality was too opinionated. It required a specific style of authoring HTML. When I decided to write and publish a full package, I found that GitHub user (mcibique)[https://github.com/mcibique]'s (vue-headings)[https://www.npmjs.com/package/vue-headings] library handled the edge cases and provided the necessary escape hatches to do this the right way. There are lots of valid ways to author HTML documents, so it's important to provide the flexibility to manually override heading levels and control which HTML sectioning elements you want to render.
