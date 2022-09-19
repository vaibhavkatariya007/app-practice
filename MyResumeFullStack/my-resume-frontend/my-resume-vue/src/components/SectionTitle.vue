<template>
  <div class="section-title">
    <span></span>
    <h2>{{ label }}</h2>
  </div>
</template>

<script>
export default {
  name: 'SectionTitle',
  props: {
    label: String
  }
}
</script>
