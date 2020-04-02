<template>
  <amp-body>
    <amp-story
      standalone
      title="Heather Loves Soccer"
      publisher="Tom Dale"
      publisher-logo-src="https://tom.imgix.net/krennic_profile.png?w=150&h=150&fit=crop&&crop=focalpoints&fp-z=2&fp-y=.2&auto=format,compress"
      poster-portrait-src="https://tom.imgix.net/soccer_heather_little.jpg?auto=format,compress&w=720&h=1280&fit=crop&crop=edges"
    >
      <amp-story-page id="cover">
        <amp-story-grid-layer template="fill">
          <amp-img
            src="https://tom.imgix.net/soccer_heather_little.jpg?auto=format,compress&w=720&h=1280&fit=crop&crop=faces,edges"
            width="720"
            height="1280"
            layout="responsive"
          >
          </amp-img>
        </amp-story-grid-layer>
        <amp-story-grid-layer template="vertical">
          <h1>Heather Just Bought a House</h1>
          <p>Celebratory Dance!</p>
        </amp-story-grid-layer>
      </amp-story-page>
      <amp-story-page id="page1">
        <amp-story-grid-layer template="fill">
          <amp-video
            width="720"
            height="1280"
            poster="https://thedales.imgix.net/8GmKD4e00QquIUKbL01T4EwXJbYM01xTv7g/thumbnail.png?w=360&h=640&fit=crop&auto=format,compress&q=60"
            layout="responsive"
            autoplay
          >
            <source
              type="application/vnd.apple.mpegurl"
              src="https://stream.mux.com/8GmKD4e00QquIUKbL01T4EwXJbYM01xTv7g.m3u8"
            />
            <source
              type="video/mp4"
              src="https://stream.mux.com/8GmKD4e00QquIUKbL01T4EwXJbYM01xTv7g/low.mp4"
            />
          </amp-video>
        </amp-story-grid-layer>
      </amp-story-page>
      <amp-story-page id="page2">
        <amp-story-grid-layer template="fill">
          <amp-img
            src="https://tom.imgix.net/soccer_heather_footgolf.jpg?auto=format,compress&w=720&h=1280&fit=fill&fill=blur"
            width="720"
            height="1280"
            layout="responsive"
          >
          </amp-img>
        </amp-story-grid-layer>
        <amp-story-grid-layer template="vertical">
          <h1>Champagne</h1>
          <p>Let's Pop that Bottle!</p>
        </amp-story-grid-layer>
      </amp-story-page>
      <amp-story-page id="page3">
        <amp-story-grid-layer template="fill">
          <amp-video
            width="720"
            height="1280"
            poster="https://thedales.imgix.net/aKxSwKM3kgOqWfjRlgC38p00dBwS3Jn6D/thumbnail.png?w=360&h=640&fit=crop&auto=format,compress&q=60"
            layout="responsive"
            autoplay
          >
            <source
              type="application/vnd.apple.mpegurl"
              src="https://stream.mux.com/aKxSwKM3kgOqWfjRlgC38p00dBwS3Jn6D.m3u8"
            />
            <source
              type="video/mp4"
              src="https://stream.mux.com/aKxSwKM3kgOqWfjRlgC38p00dBwS3Jn6D/low.mp4"
            />
          </amp-video>
        </amp-story-grid-layer>
      </amp-story-page>
      <amp-story-page id="page4">
        <amp-story-grid-layer template="fill">
          <amp-img
            src="https://tom.imgix.net/disney_zeek_toystory.jpg?auto=format,compress&w=720&h=1280&fit=fill&fill=blur"
            width="720"
            height="1280"
            layout="responsive"
          >
          </amp-img>
        </amp-story-grid-layer>
        <amp-story-grid-layer template="vertical">
          <h1>Toy Story Land</h1>
        </amp-story-grid-layer>
      </amp-story-page>
      <amp-story-page id="page5">
        <amp-story-grid-layer template="fill">
          <amp-video
            width="720"
            height="1280"
            poster="https://image.mux.com/35g3W4KDBpZoQAmV8jRPPzZxJxJbO8Mo/thumbnail.png?width=360&height=640&fit_mode=pad"
            layout="responsive"
            autoplay
          >
            <source
              type="application/vnd.apple.mpegurl"
              src="https://stream.mux.com/35g3W4KDBpZoQAmV8jRPPzZxJxJbO8Mo.m3u8"
            />
            <source
              type="video/mp4"
              src="https://stream.mux.com/35g3W4KDBpZoQAmV8jRPPzZxJxJbO8Mo/low.mp4"
            />
          </amp-video>
        </amp-story-grid-layer>
      </amp-story-page>
      <amp-story-bookend layout="nodisplay">
        <script type="application/json" v-html="json" />
      </amp-story-bookend>
    </amp-story>
  </amp-body>
</template>

<script>
export default {
  amp: 'only',
  data() {
    return {
      json: JSON.stringify({
        bookendVersion: 'v1.0',
        shareProviders: ['facebook', 'twitter', 'email'],
        components: [
          {
            type: 'heading',
            text: 'More Sections on Heather'
          },
          {
            type: 'cta-link',
            links: [
              {
                text: 'Go Back Home',
                url: '/'
              },
              {
                text: 'Go to Heather',
                url: '/heather'
              }
            ]
          }
        ]
      })
    }
  }
}
</script>

<style>
amp-story {
  font-family: 'Oswald', sans-serif;
  color: #fff;
}
amp-story-page {
  background-color: #000;
}
h1 {
  font-weight: bold;
  font-size: 2.875em;
  font-weight: bold;
  line-height: 1.174;
  color: red;
}
p {
  font-weight: normal;
  font-size: 1.3em;
  line-height: 1.5em;
  color: red;
}
q {
  font-weight: 300;
  font-size: 1.1em;
}
amp-story-grid-layer.bottom {
  align-content: end;
}
amp-story-grid-layer.noedge {
  padding: 0px;
}
amp-story-grid-layer.center-text {
  align-content: center;
}
.wrapper {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
}
.banner-text {
  text-align: center;
  background-color: #000;
  line-height: 2em;
}
</style>
