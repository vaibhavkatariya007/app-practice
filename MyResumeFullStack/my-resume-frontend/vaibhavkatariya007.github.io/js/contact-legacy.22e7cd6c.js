(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["contact"],{"6fbe":function(e,a,t){"use strict";var n=t("e832"),r=t.n(n);r.a},b8fa:function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{class:e.className},[t("section",{staticClass:"padding_30 padbot_45"},[t("a-row",{attrs:{gutter:32}},[t("a-col",{attrs:{xs:24,sm:24,md:12,lg:12,xl:12}},[t("app-title",{attrs:{label:"Contact Form"}}),t("div",{staticClass:"top_30"},[t("a-form",{attrs:{layout:"horizontal",form:e.form},on:{submit:function(a){return a.preventDefault(),e.handleSubmit(a)}}},[t("a-form-item",[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"Name cannot be empty!"}]}],expression:"[\n                            'name',\n                            { rules: [\n                            { required: true,\n                              message: 'Name cannot be empty!'\n                            }] },\n                            ]"}],attrs:{placeholder:"Name"}})],1),t("a-form-item",[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["phone",{rules:[{required:!0,message:"Phone cannot be empty!"}]}],expression:"[\n                            'phone',\n                            { rules: [\n                            { required: true,\n                              message: 'Phone cannot be empty!'\n                            }] },\n                            ]"}],attrs:{placeholder:"Phone"}})],1),t("a-form-item",[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["email",{rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"E-mail cannot be empty!"}]}],expression:"[\n                        'email',\n                        {\n                          rules: [\n                            {\n                              type: 'email',\n                              message: 'The input is not valid E-mail!',\n                            },\n                            {\n                              required: true,\n                              message: 'E-mail cannot be empty!',\n                            },\n                          ],\n                        },\n                        ]"}],attrs:{placeholder:"E-mail"}})],1),t("a-form-item",[t("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["message",{rules:[{required:!0,message:"Message cannot be empty!"}]}],expression:"[\n                            'message',\n                            { rules: [\n                            { required: true,\n                              message: 'Message cannot be empty!'\n                            }] },\n                            ]"}],attrs:{placeholder:"Message",rows:5}})],1),t("a-form-item",[t("a-button",{attrs:{type:"primary",shape:"round","html-type":"submit"}},[e._v("Submit")])],1)],1)],1)],1),t("a-col",{attrs:{xs:24,sm:24,md:12,lg:12,xl:12}},[t("app-title",{attrs:{label:"Contact Informations"}}),t("ul",{staticClass:"top_30"},e._l(e.updateAddress,(function(a){return t("li",{key:a.key},[t("span",[e._v(e._s(a.label))]),e._v(" "+e._s(a.value)+" ")])})),0)],1)],1)],1)])},r=[],s=(t("d81d"),t("fa2b")),o=t("a078"),i=[{key:"address",label:"Address:",value:"N/A"},{key:"phone",label:"Phone:",value:"N/A"},{key:"job",label:"Job:",value:"N/A"},{key:"email",label:"E-mail:",value:"N/A"},{key:"skypeId",label:"Skype:",value:"N/A"}],l={beforeCreate:function(){this.form=this.$form.createForm(this,{name:"contact_us"})},props:{data:Object,className:String},components:{appTitle:s["a"]},computed:{updateAddress:function(){var e=this;return i.map((function(a){return a.value=e.data[a.key]||"N/A",a}))}},methods:{handleSubmit:function(){var e=this.$message,a=e.success,t=e.error,n=this.form,r=n.validateFieldsAndScroll,s=n.resetFields;r((function(e,n){e||o["d"].POST("".concat(o["a"].support),n).then((function(e){if(e&&e.message)return a(e.message),void s();t("Something went wrong try again later.")})).catch((function(e){return e}))}))}}},m=l,u=(t("6fbe"),t("2877")),c=Object(u["a"])(m,n,r,!1,null,"56e7ddfc",null);a["default"]=c.exports},e832:function(e,a,t){}}]);
//# sourceMappingURL=contact-legacy.22e7cd6c.js.map