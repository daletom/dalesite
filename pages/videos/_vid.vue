<template>
  <div class="container">
    <article>
      <h1 class="title">{{ video.title }}</h1>
      <p>{{ video.content }}</p>
    </article>
    <aside>
      <h3>Posts you might enjoy</h3>
      <ul>
        <li v-for="related in relatedVideos" :key="related.title">
          <nuxt-link :to="{ name: 'videos-vid', params: { vid: related.vid } }">
            {{ related.title }}
          </nuxt-link>
        </li>
      </ul>
    </aside>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vid: this.$route.params.vid,
      videos: [
        {
          vid: 'thedales',
          title: 'How I made thedales.me?',
          content:
            'Will write about how I re-made the website using Vue & Nuxt.js and why.'
        },
        {
          vid: 'gatsbyblog',
          title: 'Creating My First Gatsby Blog',
          content: 'Will write about using gatsby and learning about it.'
        },
        {
          vid: 'killgif',
          title: 'Killing Animated GIFs',
          content:
            'Will write about why we need to stop using GIFs and using different methods like mp4.'
        },
        {
          vid: 'imagegallery',
          title: 'Testing Web Performance with Image Galleries',
          content:
            'Will write about creating replicas of the same image gallery using several different methods and testing the performance.'
        }
      ]
    }
  },
  computed: {
    video() {
      return this.videos.find((video) => video.vid === this.vid)
    },
    relatedVideos() {
      return this.videos.filter((video) => video.vid !== this.vid)
    }
  },
  head() {
    return {
      title: this.video.title,
      meta: [
        { name: 'twitter:title', content: 'this.post.title' },
        { name: 'twitter:description', content: 'this.post.content' },
        {
          name: 'twitter:image',
          content: 'https://tom.imgix.net/thedales.svg?fm=png'
        },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'og:title', content: 'this.post.title' },
        { name: 'og:type', content: 'this.post.content' },
        { name: 'og:url', content: 'https://thedales.me/posts/.vid' },
        {
          name: 'og:image',
          content: 'https://tom.imgix.net/thedales.svg?fm=png'
        }
      ]
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  line-height: 1.5;
}
article * {
  margin-bottom: 1rem;
}
aside {
  min-width: 280px;
  max-width: 280px;
  padding-left: 2rem;
}
.title {
  font-size: 2rem;
}
</style>
