<template>
  <div id="app">
    <div class="container">
      <h1 class>Listing</h1>

      <!-- <div v-if="commentIndex < reviews.length" v-for="commentIndex in commentsToShow" >
               <div>{{reviews[commentIndex].name}} says:</div>
               <i><div>{{reviews[commentIndex].description}}</div></i>
               <hr />
             </div>
             <div v-if="commentsToShow < reviews.length || reviews.length > commentsToShow">
               <button @click="commentsToShow += 10">show more reviews</button>
             </div>
      -->

      <datatable :columns="columns" :data="rows"></datatable>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Listing',
  components: {},
  data () {
    return {
      columns: [
        { label: 'test', field: 'id' },
        {
          label: 'user_id',
          field: 'user_id',
          headerClass: 'class-in-header second-class'
        },
        { label: 'title', field: 'title' },
        { label: 'body', field: 'body' }
      ],
      rows: []
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
