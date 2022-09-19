<template>
  <div :class="className">
    <section class="padding_30 padbot_45">
      <app-title label="Resume"></app-title>
      <a-row :gutter="32">
        <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <div class="top_50">
            <a-timeline id="history">
              <a-timeline-item>
                <img slot="dot" src="../assets/brief.png" alt />
                <h1 class="header">Working History</h1>
              </a-timeline-item>
              <a-timeline-item
                color="#ffb100"
                v-for="(item, index) in updateWorkingHistoryData"
                :key="index"
              >
                <div class="content">
                  <h3 class="heading">{{ item.job_title }} - {{ item.company_name }}</h3>
                  <span
                    class="more-info"
                    style="padding-bottom:0"
                  >{{ item.start_date }} - {{ item.end_date }}</span>
                  <span class="more-info" style="padding-top:0">Location: {{ item.job_location }}</span>
                  <p class="detail-info">{{ item.job_description }}</p>
                </div>
              </a-timeline-item>
            </a-timeline>
          </div>
        </a-col>
        <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <div class="top_50">
            <a-timeline id="history">
              <a-timeline-item>
                <img
                  slot="dot"
                  src="../assets/gcap.png"
                  alt
                  style="width: 65%; position: relative; top: -3px;"
                />
                <h1 class="header">Education History</h1>
              </a-timeline-item>
              <a-timeline-item
                color="#ffb100"
                v-for="(item, index) in updateEducationHistoryData"
                :key="index"
              >
                <div class="content">
                  <h3 class="heading">{{ item.course_pursue }} - {{ item.college_name }}</h3>
                  <span
                    class="more-info"
                    style="padding-bottom:0"
                  >{{ item.start_date }} - {{ item.end_date }}</span>
                  <span class="more-info" style="padding-top:0">Location: {{ item.location }}</span>
                  <p class="detail-info">{{ item.description }}</p>
                </div>
              </a-timeline-item>
            </a-timeline>
          </div>
        </a-col>
      </a-row>
    </section>
  </div>
</template>

<script>
import Title from '@/components/SectionTitle.vue'
import moment from 'moment'
export default {
  props: {
    data: Object,
    className: String
  },
  methods: {
    modifyDate (Obj) {
      if (Obj.start_date) {
        Obj.start_date = moment(Obj.start_date).format('LL')
      }
      if (Obj.end_date && Obj.end_date !== null) {
        Obj.end_date = moment(Obj.end_date).format('LL')
      }
      if (
        !Obj.end_date ||
        Obj.end_date === null ||
        Obj.end_date === 'Invalid date'
      ) {
        Obj.end_date = 'Present'
      }
      return Obj
    }
  },
  computed: {
    updateWorkingHistoryData () {
      if (this.data && this.data.history && this.data.history.length) {
        return this.data.history[0].working_history.map(history =>
          this.modifyDate(history)
        )
      }
      return []
    },
    updateEducationHistoryData () {
      if (this.data && this.data.history && this.data.history.length) {
        return this.data.history[0].educational_history.map(history =>
          this.modifyDate(history)
        )
      }
      return []
    }
  },
  components: {
    appTitle: Title
  }
}
</script>

<style lang="scss">
#history {
  margin: 8px 0px 0px 35px;
  .ant-timeline-item.ant-timeline-item-last {
    margin: 0;
    padding: 0;
  }
  li:first-child {
    padding-bottom: 30px;
    padding-left: 30px;
    .ant-timeline-item-content {
      margin: 0 0 0 0;
      top: 0px;
      .header {
        font-size: 18px;
        font-weight: 500;
        margin-left: 25px;
        line-height: 30px;
        position: relative;
        top: -10px;
      }
    }
    .ant-timeline-item-head-custom {
      height: 50px;
      width: 50px;
      background: rgb(255, 197, 0) !important;
      border-radius: 100%;
      img {
        width: 60%;
        margin: 8px auto;
      }
    }
  }
  .ant-timeline-item-content {
    top: -7px;
    margin: 0 0 40px 30px;
  }
  .content {
    .heading {
      margin: 0;
      font-size: 16px;
      line-height: 20px;
    }
    .more-info {
      font-size: 12px;
      padding: 9px 0;
      display: block;
    }
    .detail-info {
      color: rgb(152, 152, 152);
      font-weight: 400;
      line-height: 18px;
    }
  }
}
@media only screen and (max-width: 600px) {
  .top_50 {
    margin-top: 35px;
  }
  #history {
    margin: 0px 0px 0px 15px;
    .ant-timeline-item-content {
      margin: 0 0 10px 20px;
    }
  }
}
</style>
