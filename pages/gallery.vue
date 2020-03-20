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
        :src="image"
        :srcset="image + desktop"
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
      desktop:
        'w=400&h=400&fit=crop&crop=faces,entropy&auto=format,compress 400w,',
      ipad:
        'w=600&h=600&fit=crop&crop=faces,entropy&auto=format,compress 600w,',
      mobile:
        'w=900&h=900&fit=crop&crop=faces,entropy&auto=format,compress 900w,',
      responsive:
        'w=1200&h=1200&fit=crop&crop=faces,entropy&auto=format,compress 1200w',
      images: [
        'https://tom.imgix.net/artsy/1.jpg?',
        'https://tom.imgix.net/artsy/2.jpg?',
        'https://tom.imgix.net/artsy/3.jpg?',
        'https://tom.imgix.net/artsy/4.jpg?',
        'https://tom.imgix.net/artsy/5.jpg?',
        'https://tom.imgix.net/artsy/6.jpg?',
        'https://tom.imgix.net/artsy/7.jpg?',
        'https://tom.imgix.net/artsy/8.jpg?',
        'https://tom.imgix.net/artsy/9.jpg?',
        'https://tom.imgix.net/artsy/10.jpg?',
        'https://tom.imgix.net/artsy/11.jpg?',
        'https://tom.imgix.net/artsy/12.jpg?',
        'https://tom.imgix.net/artsy/13.jpg?',
        'https://tom.imgix.net/artsy/14.jpg?',
        'https://tom.imgix.net/artsy/15.jpg?',
        'https://tom.imgix.net/artsy/16.jpg?'
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
