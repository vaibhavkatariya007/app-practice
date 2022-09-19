<template>
  <a-layout-header id="header">
    <a-menu mode="horizontal" :selectedKeys="defaultSelectedMenu || ['home']">
      <a-menu-item v-for="menu in menuData" :key="menu.key">
        <router-link v-if="menu.key === 'home'" :to="menu.path">
          <a-icon :type="menu.key" />
        </router-link>
        <router-link v-else :to="menu.path">{{ menu.title }}</router-link>
      </a-menu-item>
    </a-menu>
  </a-layout-header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      menuData: [
        {
          key: 'home',
          title: 'Home',
          path: '/'
        },
        {
          key: 'about',
          title: 'Resume',
          path: '/about'
        },
        {
          key: 'portfolio',
          title: 'Portfolio',
          path: '/portfolio'
        },
        {
          key: 'blog',
          title: 'Blog',
          path: '/blog'
        },
        {
          key: 'contact',
          title: 'Contact',
          path: '/contact-us'
        }
      ]
    }
  },
  props: {
    selectedRoute: Object
  },
  computed: {
    defaultSelectedMenu () {
      return this.selectedRoute && [this.selectedRoute.className]
    }
  }
}
</script>

<style lang="scss">
#header {
  height: auto;
  padding: 0;
  line-height: initial;
  background: none;
  .ant-menu-horizontal {
    border-bottom: 0;
    background: rgb(255, 255, 255);
    display: inline-block;
    border-radius: 6px;
    height: 70px;
    width: 100%;
    margin-bottom: 30px;
    line-height: 70px;
    box-shadow: 0px 2px 92px 0px rgba(0, 0, 0, 0.07);
    overflow: hidden;
    > .ant-menu-item {
      border-bottom: 0 !important;
    }
    > .ant-menu-item-selected,
    > .ant-menu-item-active {
      border-bottom: 2px solid rgb(255, 197, 0);
      background-color: rgb(255, 197, 0);
    }
    > .ant-menu-item-selected > a {
      color: #000000;
    }
    > .ant-menu-item > a,
    > .ant-menu-item > a > i {
      font-weight: bold;
      color: #000000;
      text-transform: uppercase;
      margin: 0 auto;
    }
    > .ant-menu-item > a > i {
      font-size: 18px;
    }
    .ant-menu-item > a:hover {
      color: #000000;
    }
  }
}
@media only screen and (max-width: 600px) {
  #header {
    margin-top: 30px;
  }
  .ant-menu-item-selected > a,
  .ant-menu-item-selected > a:hover {
    color: rgb(253, 196, 0);
  }
  .ant-menu-horizontal > .ant-menu-item:hover,
  .ant-menu-horizontal > .ant-menu-submenu:hover,
  .ant-menu-horizontal > .ant-menu-item-active,
  .ant-menu-horizontal > .ant-menu-submenu-active,
  .ant-menu-horizontal > .ant-menu-item-open,
  .ant-menu-horizontal > .ant-menu-submenu-open,
  .ant-menu-horizontal > .ant-menu-item-selected,
  .ant-menu-horizontal > .ant-menu-submenu-selected {
    color: rgb(254, 196, 0);
    border-bottom: 2px solid rgb(254, 196, 0);
  }
  .ant-menu-submenu-title {
    color: rgb(253, 197, 5);
  }
}
</style>
