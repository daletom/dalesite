<template>
  <div>
    <h1>Heather</h1>
    <h2>Click an image to see a story.</h2>

    <nuxt-link to="/house/"
      ><img
        v-for="image in images"
        :key="image.image"
        :src="host + image"
        alt="New House"
        :srcset="
          host +
            image +
            desktop +
            host +
            image +
            ipad +
            host +
            image +
            mobile +
            host +
            image +
            responsive
        "
        sizes="(min-width:1240px) 450px, 90vw"
    /></nuxt-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      desktop:
        'w=400&h=400&txtlineclr=ff0000&txtline=2&border=10%2C73ff0000&fit=crop&txtpad=80&txtsize=112&txtalign=botthedales%2Ccenter&txtclr=DCDCDC&auto=format%2Ccompress&crop=faces,entropy 400w,',
      ipad:
        'w=600&h=600&txtlineclr=ff0000&txtline=2&border=10%2C73ff0000&fit=crop&txtpad=80&txtsize=112&txtalign=botthedales%2Ccenter&txtclr=DCDCDC&auto=format%2Ccompress&crop=faces,entropy 600w,',
      mobile:
        'w=900&h=900&txtlineclr=ff0000&txtline=2&border=10%2C73ff0000&fit=crop&txtpad=80&txtsize=112&txtalign=botthedales%2Ccenter&txtclr=DCDCDC&auto=format%2Ccompress&crop=faces,entropy 900w,',
      responsive:
        'w=1200&h=1200&txtlineclr=ff0000&txtline=2&border=10%2C73ff0000&fit=crop&txtpad=80&txtsize=112&txtalign=botthedales%2Ccenter&txtclr=DCDCDC&auto=format%2Ccompress&crop=faces,entropy 1200w',
      host: 'https://thedales.imgix.net/',
      images: ['aKxSwKM3kgOqWfjRlgC38p00dBwS3Jn6D/thumbnail.png?']
    }
  }
}
</script>
