<template>
  <div :class="className">
    <section class="padding_30 padbot_45">
      <app-title label="Portfolio"></app-title>
      <a-row :gutter="32">
        <appPortfolioCard
          v-for="(project,index) in displayProjects"
          :cardData="project"
          :key="index"
        ></appPortfolioCard>
      </a-row>
    </section>
  </div>
</template>

<script>
import Title from '@/components/SectionTitle.vue'
import PortfolioCard from '@/components/PortfolioCard.vue'
import { Projects } from '@/config/config.js'

export default {
  computed: {
    displayProjects: () => Projects
  },
  props: {
    data: Object,
    className: String
  },
  components: {
    appTitle: Title,
    appPortfolioCard: PortfolioCard
  }
}
</script>
