<script lang='ts'>

  import Section from '$prod/components/Section.svelte'
  import H from '$prod/components/H.svelte'

</script>

<main>
  <h1>Use a regular H1 for your page title - one per page</h1>
  <H>
    This should be an H2
  </H>
  <H level="+1">
    This should be an H3 (explicitly set with H's level prop)
  </H>
  <Section level={4}>
    <H>
      This should be an H4 because we manually set the level on the parent section
    </H>
    <H>
      This should also be an H4 for the same reason
    </H>
    <Section>
      <H>
        This should be an H5 if it's inheriting the manually-set level from above
      </H>
      <H level="-2">
        This should be an H3 because we manually overrode the parent section's level (5) w/ "-2"
      </H>
      <Section level="-3">
        <H>
          This should be an H2 because we manually overrode the parent Section's level (5) w/ "-2" on this Section
        </H>
      </Section>

    </Section>
  </Section>
</main>
