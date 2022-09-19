<template>
  <div :class="className">
    <section class="padding_30 padbot_45">
      <a-row :gutter="32">
        <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <app-title label="Contact Form"></app-title>
          <div class="top_30">
            <a-form layout="horizontal" :form="form" @submit.prevent="handleSubmit">
              <a-form-item>
                <a-input
                  v-decorator="[
                              'name',
                              { rules: [
                              { required: true,
                                message: 'Name cannot be empty!'
                              }] },
                              ]"
                  placeholder="Name"
                />
              </a-form-item>
              <a-form-item>
                <a-input
                  v-decorator="[
                              'phone',
                              { rules: [
                              { required: true,
                                message: 'Phone cannot be empty!'
                              }] },
                              ]"
                  placeholder="Phone"
                />
              </a-form-item>
              <a-form-item>
                <a-input
                  v-decorator="[
                          'email',
                          {
                            rules: [
                              {
                                type: 'email',
                                message: 'The input is not valid E-mail!',
                              },
                              {
                                required: true,
                                message: 'E-mail cannot be empty!',
                              },
                            ],
                          },
                          ]"
                  placeholder="E-mail"
                />
              </a-form-item>
              <a-form-item>
                <a-textarea
                  v-decorator="[
                              'message',
                              { rules: [
                              { required: true,
                                message: 'Message cannot be empty!'
                              }] },
                              ]"
                  placeholder="Message"
                  :rows="5"
                />
              </a-form-item>
              <a-form-item>
                <a-button type="primary" shape="round" html-type="submit">Submit</a-button>
              </a-form-item>
            </a-form>
          </div>
        </a-col>
        <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <app-title label="Contact Informations"></app-title>
          <ul class="top_30">
            <li v-for="addressField in updateAddress" :key="addressField.key">
              <span>{{addressField.label}}</span>
              {{addressField.value}}
            </li>
          </ul>
        </a-col>
      </a-row>
    </section>
  </div>
</template>

<script>
import Title from '@/components/SectionTitle.vue'
import { API, Services } from '@/config/config.js'
const addressFields = [
  {
    key: 'address',
    label: 'Address:',
    value: 'N/A'
  },
  {
    key: 'phone',
    label: 'Phone:',
    value: 'N/A'
  },
  {
    key: 'job',
    label: 'Job:',
    value: 'N/A'
  },
  {
    key: 'email',
    label: 'E-mail:',
    value: 'N/A'
  },
  {
    key: 'skypeId',
    label: 'Skype:',
    value: 'N/A'
  }
]
export default {
  beforeCreate () {
    this.form = this.$form.createForm(this, { name: 'contact_us' })
  },
  props: {
    data: Object,
    className: String
  },
  components: {
    appTitle: Title
  },
  computed: {
    updateAddress () {
      return addressFields.map(field => {
        field.value = this.data[field.key] || 'N/A'
        return field
      })
    }
  },
  methods: {
    handleSubmit () {
      const { success, error } = this.$message
      const { validateFieldsAndScroll, resetFields } = this.form
      validateFieldsAndScroll((err, values) => {
        if (!err) {
          Services.POST(`${API.support}`, values)
            .then(res => {
              if (res && res.message) {
                success(res.message)
                resetFields()
                return
              }
              error('Something went wrong try again later.')
            })
            .catch(err => err)
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/globalStyles/variables.scss";

form textarea.ant-input,
input,
.ant-input:hover,
.ant-input:focus {
  border: 0;
  border-bottom: 1px solid $off-white;
  border-radius: 0;
  box-shadow: none;
  padding: 0px;
}
.ant-btn-primary {
  color: $black;
  background-color: $primary-style-color;
  border-color: $primary-style-color;
  box-shadow: none;
  &:active,
  &:hover {
    background-color: $primary-style-hover-color;
    border-color: $primary-style-hover-color;
  }
}
.ant-btn-round {
  padding: 0 25px;
}
ul {
  padding: 0px;
  > li {
    list-style: none;
    font-size: 14px;
    color: $primary-style-para-color;
    line-height: 34px;
    span {
      color: $primary-style-text-color;
    }
  }
}
</style>
