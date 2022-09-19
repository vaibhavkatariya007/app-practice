<template>
  <div :class="className">
    <section class="padding_30 padbot_45">
      <app-title label="About Me"></app-title>
      <p class="top_30">{{ data && data.description }}</p>
    </section>
    <section class="padding_30 padbot_45 services-block">
      <app-title label="My Services"></app-title>
      <a-row :gutter="32" class="top_30"></a-row>
    </section>
    <section class="padding_30 padbot_45">
      <app-title label="Primary Skills"></app-title>
      <a-row :gutter="32" class="top_30">
        <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <div class="skill-progress" v-for="(skill, index) in skills" :key="index">
            <h3 class="title">{{skill.title}}</h3>
            <a-progress
              :percent="skill.percentAge"
              strokeColor="rgb(255, 197, 0)"
              :showInfo="false"
            />
          </div>
        </a-col>
        <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <div class="skill-progress" v-for="(extra, index) in extras" :key="index">
            <h3 class="title">{{extra.title}}</h3>
            <a-progress
              :percent="extra.percentAge"
              strokeColor="rgb(255, 197, 0)"
              :showInfo="false"
            />
          </div>
        </a-col>
      </a-row>
    </section>
  </div>
</template>

<script>
import Title from '@/components/SectionTitle.vue'
import { Skills, Extras } from '@/config/config.js'

export default {
  name: 'Home',
  data: () => {
    return {
      skills: Skills,
      extras: Extras
    }
  },
  props: {
    data: Object,
    className: String
  },
  components: {
    appTitle: Title
  }
}
</script>

<style scoped lang="scss">
.skill-progress {
  h3 {
    font-size: 12px;
    margin-bottom: 0;
  }
}
</style>
