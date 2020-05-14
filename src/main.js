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
VuejsDatatableFactory.useDefaultType(false).registerTableType('datatable', tableType => tableType.mergeSettings({
  table: {
    class: 'table table-hover table-striped',
    sorting: {
      sortAsc: '<i class="fas fa-sort-amount-up" title="Sort ascending"></i>',
      sortDesc: '<i class="fas fa-sort-amount-down" title="Sort descending"></i>',
      sortNone: '<i class="fas fa-sort" title="Sort"></i>'
    }
  },
  pager: {
    classes: {
      pager: 'pagination text-center',
      selected: 'active'
    },
    icons: {
      next: '<i class="fas fa-chevron-right" title="Next page"></i>',
      previous: '<i class="fas fa-chevron-left" title="Previous page"></i>'
    }
  }
}))

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
