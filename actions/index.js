/**
 * Create aria-labelledby relationship with Section.svelte/Article.svelte's first heading tag.
 * @param {HTMLElement} node 
 */
 export function labelRegionWithHeading(node, inBrowser) {

  if (node && inBrowser) {

    let sectionHeaderId = node.querySelector('h1, h2, h3, h4, h5, h6')
      ?.id

    if (sectionHeaderId) {
      node.setAttribute('aria-labelledby', sectionHeaderId)
    } else {
      console.log(`no header for this container: ${node}`)
    }
  }
  return
}