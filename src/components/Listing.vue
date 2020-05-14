<template>
  <div id="app">
    <div class="container">
      <h1 class>Listing</h1>
        <div class="row table-responsive">
            <div class="col-xs-12 form-inline">
                <div class="form-group">
                    <label for="filter" class="sr-only">Filter</label>
                    <input type="text" class="form-control" v-model="filter" placeholder="Filter" @keydown="$event.stopImmediatePropagation()">
                </div>
            </div>
            <datatable :columns="columns" :data="rows" :filter="filter" :per-page="5"></datatable>
            <datatable-pager v-model="page"></datatable-pager>
        </div>

    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Listing',
  components: {
  },
  data () {
    return {
      filter: '',
      columns: [
        { label: 'test', field: 'id' },
        {
          label: 'user_id',
          field: 'user_id',
          headerClass: 'class-in-header second-class'
        },
        { label: 'title', field: 'title', representedAs: row => `<a href='/#/detail/${row.id}'>${row.title}</a>`, interpolate: true
        },
        { label: 'body', field: 'body' }
      ],
      rows: [],
      page: 1
    }
  },
  methods: {
    loadData () {
      axios
        .get(
          'https://gorest.co.in/public-api/posts?_format=json&access-token=ff0DuehFsbZSrJc7CcsLNfuTVw3cnCi4cQNT'
        )
        .then(response => {
          this.rows = response.data.result
        })
    }
  },
  created () {
    this.loadData()
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
