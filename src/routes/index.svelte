<script lang='ts'>

  import Section from '$prod/components/Section.svelte'
  import Article from '$prod/components/Article.svelte'
  import Heading from '$prod/components/Heading.svelte'

</script>

<main>
  <Heading>
    This is a test top-level heading
  </Heading>
  <Section>
    <Heading>
      This is a test heading for first section (H2)
    </Heading>
    <Heading>
      This is also at level 2 but should have different aria-labelledby
    </Heading>
    <Article>
      <Heading>
        This is a test heading for an Article nested in a section (H3)
      </Heading>
    </Article>
  </Section>
  <Heading>
    This is not nested, back to top-level
  </Heading>
  <Section>
    <Heading>
      This is nested to level 2
    </Heading>
    <Article>
      <Heading>
        This is nested to level 3
      </Heading>
      <Section>
        <Heading>
          This is nested to level 4
        </Heading>
        <Section>
          <Heading>
            This is nested to level 5
          </Heading>
          <Article>
            <Heading>
              This is nested to level 6
            </Heading>
          </Article>
        </Section>
      </Section>
    </Article>
  </Section>
  <Heading>
    This is not nested, back to top-level
  </Heading>
</main>
