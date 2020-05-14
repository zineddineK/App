<template>
    <div id="app">
        <div class="cantainer">
            <h1 class="">{{detail.title}}</h1>
            <p class="">{{detail.body}}</p>
            <div class="row"  v-for="(photo) in photos" :key="photo.id">
                <div v-for="(item) in photo" :key="item.id">
                    <img :src="item.thumbnail">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import each from 'lodash/each'
export default {
  name: 'Detail',
  data () {
    return {
      detail: {},
      albums: [],
      photos: []
    }
  },
  methods: {
    loadData () {
      axios
        .get(
          'https://gorest.co.in/public-api/posts/' + this.$route.params.id + '?_format=json&access-token=ff0DuehFsbZSrJc7CcsLNfuTVw3cnCi4cQNT', { headers: {'Access-Control-Allow-Origin': '*'} }
        )
        .then(response => {
          this.detail = response.data.result
          this.getAlbums()
        })
    },
    getAlbums () {
      axios
        .get(
          'https://gorest.co.in/public-api/albums?user_id=' + this.detail.user_id + '&_format=json&access-token=ff0DuehFsbZSrJc7CcsLNfuTVw3cnCi4cQNT', { headers: {'Access-Control-Allow-Origin': '*'} }
        )
        .then(response => {
          this.albums = response.data.result
          each(this.albums, (album) => {
            this.getPhotos(album.id)
          })
        })
    },
    getPhotos (id) {
      axios
        .get(
          'https://gorest.co.in/public-api/photos?album_id=' + id + '&_format=json&access-token=ff0DuehFsbZSrJc7CcsLNfuTVw3cnCi4cQNT', { headers: {'Access-Control-Allow-Origin': '*'} }
        )
        .then(response => {
          this.photos.push(response.data.result)
        })
    }
  },
  mounted () {
    this.loadData()
  }

}
</script>

<style scoped>

</style>
