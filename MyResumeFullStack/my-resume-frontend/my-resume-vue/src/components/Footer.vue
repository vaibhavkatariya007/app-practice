<template>
  <a-layout-footer id="footer">
    <a-row>
      <a-col class="name" :xs="24" :sm="24" :md="6" :lg="4" :xl="4" :span="4">Vaibhav Katariya.</a-col>
      <a-col
        class="copyright"
        :xs="24"
        :sm="24"
        :md="18"
        :lg="20"
        :xl="20"
      >© {{year}} All rights reserved. Designed & Developed by Vibhu.</a-col>
    </a-row>
  </a-layout-footer>
</template>

<script>
export default {
  name: 'Footer',
  data: () => {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss">
#footer {
  background: rgb(30, 30, 30);
  min-height: 70px;
  color: rgb(255, 255, 255);
  border-radius: 8px;
  line-height: 72px;
  padding: 0;
  margin-bottom: 30px;
  margin-top: 30px;
  padding-right: 15px;
  padding-left: 15px;
  .name {
    font-size: 15px;
  }
  .copyright {
    color: rgb(156, 156, 156);
    font-size: 12px;
    text-align: right;
  }
}
@media only screen and (max-width: 600px) {
  #footer {
    padding-top: 12px;
    .name {
      display: none;
    }
    .copyright {
      text-align: left;
      line-height: 25px;
    }
  }
}
</style>
