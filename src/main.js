// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { VuejsDatatableFactory } from 'vuejs-datatable'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

Vue.use(VuejsDatatableFactory)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
/*
new Vue({
    el: ".vue",
    data() {
        return {
            reviews: [
                {label: 'test', field: 'id'},
                {label: 'user_id', field: 'user_id', headerClass: 'class-in-header second-class'},
                {label: 'title', field: 'title'},
                {label: 'body', field: 'body'},
            ],
            commentsToShow: 10,
            totalComments: 0
        };
    },
    mounted() {
        this.totalComments = this.reviews.length
        console.log(this.reviews.length)
    }
})
*/
