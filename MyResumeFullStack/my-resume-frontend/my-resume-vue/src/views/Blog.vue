<template>
  <div :class="className">
    <section class="padding_30 padbot_45">
      <app-title label="Blog"></app-title>
      <p class="top_30">COMING SOON</p>
    </section>
  </div>
</template>

<script>
import Title from '@/components/SectionTitle.vue'
export default {
  props: {
    data: Object,
    className: String
  },
  components: {
    appTitle: Title
  }
}
</script>
