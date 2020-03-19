<template>
  <div class="container">
    <article>
      <h1 class="title">{{ post.title }}</h1>
      <p>{{ post.content }}</p>
    </article>
    <aside>
      <h3>Posts you might enjoy</h3>
      <ul>
        <li v-for="related in relatedPosts" :key="related.title">
          <nuxt-link :to="{ name: 'posts-id', params: { id: related.id } }">
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
      id: this.$route.params.id,
      posts: [
        {
          id: 'thedales',
          title: 'How I made thedales.me?',
          content:
            'Will write about how I re-made the website using Vue & Nuxt.js and why.'
        },
        {
          id: 'gatsbyblog',
          title: 'Creating My First Gatsby Blog',
          content: 'Will write about using gatsby and learning about it.'
        },
        {
          id: 'killgif',
          title: 'Killing Animated GIFs',
          content:
            'Will write about why we need to stop using GIFs and using different methods like mp4.'
        },
        {
          id: 'imagegallery',
          title: 'Testing Web Performance with Image Galleries',
          content:
            'Will write about creating replicas of the same image gallery using several different methods and testing the performance.'
        }
      ]
    }
  },
  computed: {
    post() {
      return this.posts.find((post) => post.id === this.id)
    },
    relatedPosts() {
      return this.posts.filter((post) => post.id !== this.id)
    }
  },
  head() {
    return {
      title: this.post.title,
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
        { name: 'og:url', content: 'https://thedales.me/posts/.id' },
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
