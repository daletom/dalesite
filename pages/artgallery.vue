<template>
  <div>
    <gallery :images="images" :index="index" @close="index = null"></gallery>
    <div
      v-for="(image, imageIndex) in images"
      :key="imageIndex"
      class="image"
      @click="index = imageIndex"
    >
      <img
        :src="image + '&w=1200&q=60&cs=srgb'"
        :srcset="
          image + desktop + image + ipad + image + mobile + image + responsive
        "
        sizes="(min-width: 1040px) 15vw, 100vw"
      />
    </div>
  </div>
</template>

<script>
import VueGallery from 'vue-gallery'

export default {
  components: {
    gallery: VueGallery
  },
  data() {
    return {
      desktop: '&w=400&h=400&fit=crop&crop=faces,entropy 400w,',
      ipad: '&w=600&h=600&fit=crop&crop=faces,entropy 600w,',
      mobile: '&w=900&h=900&fit=crop&crop=faces,entropy 900w,',
      responsive: '&w=1200&h=1200&fit=crop&crop=faces,entropy 1200w',
      images: [
        'https://tom.imgix.net/artgallery_tom_forrest.jpg?auto=format,compress&w=1200',
        'https://tom.imgix.net/artgallery_tom_snowtrees.jpg?auto=format,compress&w=1200',
        'https://tom.imgix.net/artgallery_tom_lake_w.jpg?auto=format,compress&w=1200',
        'https://tom.imgix.net/artgallery_tom_lake.jpg?auto=format,compress&w=1200',
        'https://tom.imgix.net/artgallery_tom_bedtree.jpg?auto=format,compress&w=1200',
        'https://tom.imgix.net/artgallery_tom_dunesunset_w.jpg?auto=format,compress&w=1200',
        'https://tom.imgix.net/artgallery_tom_dunesunset.jpg?auto=format,compress&w=1200',
        'https://tom.imgix.net/artgallery_tom_cabin.jpg?auto=format,compress&w=1200',
        'https://tom.imgix.net/artgallery_tom_beachfence.jpg?auto=format,compress&w=1200',
        'https://tom.imgix.net/artgallery_tom_clint.jpg?auto=format,compress&w=1200'
      ],
      index: null
    }
  }
}
</script>

<style scoped>
.image {
  float: left;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #ebebeb;
  margin: 5px;
}
</style>
