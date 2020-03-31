<template>
  <div id="app">
    <navbar />
    <nuxt />
  </div>
</template>

<script>
import navbar from '~/components/navbar.vue'
export default {
  components: {
    navbar
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}
body,
a {
  margin: 0;
}
img {
  max-width: 100%;
}
body {
  color: dark-gray;
  font-family: Rancho, sans-serif;
  text-align: center;
}
h1,
h2 {
  font-family: Rancho, cursive;
  margin: 0.125em;
}
h1 {
  font-size: 6em;
  margin: 0.5em;
  text-align: center;
}
h2 {
  font-size: 1.7em;
}
img {
  padding: 1em;
}
img.home {
  display: block;
  float: left;
  width: 33%;
}
@media (max-width: 740px) {
  img.home {
    display: block;
    float: none;
    width: 100%;
  }
}
</style>
