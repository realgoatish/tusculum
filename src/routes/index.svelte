<script lang='ts'>

  import Section from '$prod/components/DocumentSection.svelte'
  import Heading from '$prod/components/DocumentHeading.svelte'

</script>

<main>
  <Heading>
    This should be an H1
  </Heading>
  <Heading level={1}>
    This should be an H1 (explicitly initialize an H1)
  </Heading>
  <Section tag="main" level={4}>
    <Heading>
      This should be an H4 because we manually set the level on the parent section
    </Heading>
    <Heading>
      This should also be an H4 for the same reason
    </Heading>
    <Section>
      <Heading>
        This should be an H5 if it's inheriting the manually-set level from above
      </Heading>
      <Heading level="-2">
        This should be an H3 because we manually overrode the parent section's level (5) w/ "-2"
      </Heading>
      <Section level="-3">
        <Heading>
          This should be an H2 because we manually overrode the parent Section's level (5) w/ "-2" on this Section
        </Heading>
      </Section>

    </Section>
  </Section>
</main>
