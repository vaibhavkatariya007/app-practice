<template>
  <div id="app">
    <a-spin tip="Loading..." :spinning="request">
      <a-layout>
        <a-row :gutter="32">
          <a-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
            <app-sidebar :data="userData"></app-sidebar>
          </a-col>
          <a-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18">
            <a-layout>
              <a-affix :offset-top="0">
                <app-header :selectedRoute="routerData"></app-header>
              </a-affix>
              <a-layout-content id="content">
                <transition name="slide" mode="out-in">
                  <router-view v-bind="routerData" />
                </transition>
              </a-layout-content>
              <app-footer></app-footer>
            </a-layout>
          </a-col>
        </a-row>
      </a-layout>
    </a-spin>
    <a-back-top>
      <a-icon type="arrow-up" />
    </a-back-top>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Sidebar from '@/components/Sidebar.vue'
import Footer from '@/components/Footer.vue'
import { API, Services } from '@/config/config.js'

export default {
  data () {
    return {
      request: true,
      userData: {}
    }
  },
  async mounted () {
    await Services.GET(`${API.userDetails}`).then(result => {
      this.userData = result
      this.request = false
    })
  },
  computed: {
    routerData () {
      return {
        data: this.userData,
        className: this.$route.name && this.$route.name.toLowerCase()
      }
    }
  },
  components: {
    appFooter: Footer,
    appHeader: Header,
    appSidebar: Sidebar
  }
}
</script>

<style lang="scss">
@import "@/assets/globalStyles/globalStyle.scss";

#app {
  color: #2c3e50;
  width: 1170px;
  margin-top: 60px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  .ant-layout {
    background: none;
  }
  .ant-back-top {
    right: 20px;
    background-color: #ffc500;
    font-size: 25px;
    border-radius: 50%;
    padding: 0px;
    padding-left: 7px;
  }
}
#content {
  background: rgb(255, 255, 255);
  box-shadow: 0px 2px 92px 0px rgba(0, 0, 0, 0.07);
  min-height: 500px;
  border-radius: 6px;
  padding: 15px;
}

.slide-leave {
  opacity: 1;
}
.slide-leave-active {
  transition: opacity 0.5s ease;
  opacity: 0;
}

@media only screen and (max-width: 600px) {
  #app {
    width: initial;
    margin-top: 15px;
  }
}
</style>
