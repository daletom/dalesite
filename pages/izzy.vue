<template>
  <div>
    <h1>Izzy</h1>
    <h2>Click an image to see a story.</h2>

    <nuxt-link to="/moving/"
      ><img
        :src="host + 'moving_izzy_car.heic?'"
        alt="New House"
        :srcset="
          host +
            'moving_izzy_car.heic?' +
            desktop +
            host +
            'moving_izzy_car.heic?' +
            ipad +
            host +
            'moving_izzy_car.heic?' +
            mobile +
            host +
            'moving_izzy_car.heic?' +
            responsive
        "
        sizes="(min-width:1240px) 450px, 90vw"
    /></nuxt-link>
    <nuxt-link to="/soccer/"
      ><img
        :src="host + 'soccer_heather_little.jpg?'"
        alt="New House"
        :srcset="
          host +
            'soccer_heather_little.jpg?' +
            desktop +
            host +
            'soccer_heather_little.jpg?' +
            ipad +
            host +
            'soccer_heather_little.jpg?' +
            mobile +
            host +
            'soccer_heather_little.jpg?' +
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
      host: 'https://tom.imgix.net/',
      images: ['cristal.jpg?', 'soccer_heather_little.jpg?']
    }
  }
}
</script>
