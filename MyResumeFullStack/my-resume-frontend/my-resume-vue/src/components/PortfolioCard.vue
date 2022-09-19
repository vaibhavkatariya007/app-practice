<template>
  <a-col :loading="loading" class="project-card" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
    <p class="top_30">
      <a-card hoverable style="width: 100%">
        <img slot="cover" :alt="cardData && cardData.title" :src="cardData.image" />
        <a-card-meta :title="cardData.title">
          <template slot="description">
            <p>{{cardData.description}}</p>
            <a :href="cardData.link" target="_blank">Visit Link</a>
          </template>
        </a-card-meta>
      </a-card>
    </p>
  </a-col>
</template>

<script>
export default {
  name: 'PortfolioCard',
  data () {
    return {
      loading: true
    }
  },
  props: {
    cardData: Object
  }
}
</script>

<style lang="scss">
.project-card {
  img {
    height: 175px;
  }
  a {
    background-color: rgb(255 197 0);
    padding: 5px;
    text-align: center;
    display: block;
    color: rgb(0 0 0);
    width: 50%;
    border-radius: 20px;
    margin: 0 auto;
  }
}
</style>
