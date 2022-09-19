<template>
  <div id="profile">
    <div class="profile-name">
      <span class="name">{{ (data && data.name) || "N/A" }}</span>
      <br />
      <span class="job">{{ (data && data.job) || "N/A" }}</span>
    </div>
    <figure class="profile-image">
      <img :src="data && data.userImage" alt="VAIBHAV KATARIYA IMAGE" />
    </figure>
    <a-timeline id="profile-information">
      <a-timeline-item>
        <img slot="dot" src="../assets/glasses.png" alt="glass-icon" />
        <div style="padding:20px" />
      </a-timeline-item>
      <a-timeline-item color="#ffb100" v-for="item in sidebarData" :key="item.key">
        <p :class="item.key">
          <span class="label">{{ item.label }}</span>
          {{ item.value }}
        </p>
      </a-timeline-item>
    </a-timeline>
    <a-button
      type="primary"
      shape="round"
      icon="download"
      size="large"
      @click="downloadResume"
    >Download Cv</a-button>
  </div>
</template>

<script>
import moment from 'moment'
const timelinedata = [
  { label: 'Name:', key: 'name', value: 'N/A' },
  {
    label: 'Birthday:',
    key: 'birthday',
    value: 'N/A'
  },
  { label: 'Job:', key: 'job', value: 'N/A' },
  { label: 'Email:', key: 'email', value: 'N/A' },
  {
    label: 'Skype:',
    key: 'skypeId',
    value: 'N/A'
  }
]
export default {
  name: 'Sidebar',
  props: {
    data: {
      type: Object
    }
  },
  methods: {
    downloadResume () {
      window.open(this.updateResume, '_blank')
    }
  },

  computed: {
    sidebarData () {
      return timelinedata.map(item => {
        item.value = this.data[item.key] || 'N/A'
        if (item.key === 'birthday') {
          item.value = moment(this.data[item.key]).format('LL') || 'N/A'
        }
        return item
      })
    },
    updateResume () {
      return this.data && this.data.resume && this.data.resume.pdf_format
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/globalStyles/variables.scss";

#profile {
  background: $white;
  border-radius: 6px;
  width: 100%;
  display: inline-block;
  box-shadow: 0px 2px 92px 0px rgba(0, 0, 0, 0.07);
  padding-bottom: 50px;
  button {
    display: flex;
    flex-direction: row-reverse;
    margin: 0 auto;
    background-color: $primary-style-color;
    border-color: $primary-style-color;
    color: $black;
    font-size: 15px;
    padding: 5px 10px;
    box-shadow: none;
    &:hover {
      background-color: $primary-style-hover-color;
      border-color: $primary-style-hover-color;
    }
    span {
      position: relative;
      top: 2px;
    }
    i {
      background: $white;
      padding: 9px;
      border-radius: 100%;
      height: 25px;
      width: 25px;
      margin-left: 5px;
      svg {
        position: relative;
        left: -4px;
        top: -4px;
      }
    }
  }
  .profile-name {
    line-height: 18px;
    padding: 20px;
    .name {
      text-transform: uppercase;
      font-size: 17px;
      font-weight: bold;
    }
    .job {
      font-size: 13px;
      color: rgb(119, 119, 119);
      text-transform: capitalize;
    }
  }
  .profile-image {
    margin-top: -18px;
    clip-path: polygon(0 9%, 100% 0, 100% 94%, 0% 100%);
    img {
      width: 100%;
    }
  }
  #profile-information {
    margin: 8px 0px 0px 35px;
    position: relative;
    top: -25px;
    .ant-timeline-item.ant-timeline-item-last {
      margin: 0;
      padding: 0;
    }
    li:first-child {
      padding-bottom: 10px;
      padding-left: 30px;
      position: relative;
      .ant-timeline-item-head-custom {
        height: 40px;
        width: 40px;
        background: $primary-style-color !important;
        border-radius: 100%;
        img {
          width: 80%;
          margin: 12px auto;
        }
      }
    }
    li p.email,
    li p.skypeId {
      text-transform: lowercase;
    }
    li p {
      margin-bottom: 0;
      text-transform: capitalize;
      span {
        color: $black;
        margin-right: 5px;
        text-transform: capitalize !important;
      }
    }
  }
}
@media only screen and (max-width: 600px) {
  #profile {
    padding-bottom: 25px;
  }
}
</style>
