<template>
  <amp-body>
    <amp-story
      standalone
      title="Heather Just Bought a House"
      publisher="Tom Dale"
      publisher-logo-src="https://tom.imgix.net/krennic_profile.png?w=150&h=150&fit=crop&&crop=focalpoints&fp-z=2&fp-y=.2&auto=format,compress"
      poster-portrait-src="https://tom.imgix.net/moving_izzy_car.heic?auto=format,compress&w=720&h=1280&fit=crop&crop=edges"
    >
      <amp-story-page id="cover">
        <amp-story-grid-layer template="fill">
          <amp-img
            src="https://tom.imgix.net/moving_izzy_car.heic?auto=format,compress&w=720&h=1280&fit=crop&crop=faces,edges"
            width="720"
            height="1280"
            layout="responsive"
          >
          </amp-img>
        </amp-story-grid-layer>
        <amp-story-grid-layer template="vertical">
          <h1>Izzy Wants to Move</h1>
          <p>Car, Bike, Crawl, Walk, Izzy wants to do it all!</p>
        </amp-story-grid-layer>
      </amp-story-page>
      <amp-story-page id="page1">
        <amp-story-grid-layer template="fill">
          <amp-video
            width="720"
            height="1280"
            poster="https://thedales.imgix.net/IB8m9D95bO02DSRnUkxpOVHwPvSew1FBS/thumbnail.png?w=360&h=640&fit=crop&auto=format,compress&q=60"
            layout="responsive"
            autoplay
          >
            <source
              type="application/vnd.apple.mpegurl"
              src="https://stream.mux.com/IB8m9D95bO02DSRnUkxpOVHwPvSew1FBS.m3u8"
            />
            <source
              type="video/mp4"
              src="https://stream.mux.com/IB8m9D95bO02DSRnUkxpOVHwPvSew1FBS/low.mp4"
            />
          </amp-video>
        </amp-story-grid-layer>
      </amp-story-page>
      <amp-story-page id="page2">
        <amp-story-grid-layer template="fill">
          <amp-img
            src="https://tom.imgix.net/moving_izzy_hold.jpg?auto=format,compress&w=720&h=1280&fit=fill&fill=blur"
            width="720"
            height="1280"
            layout="responsive"
          >
          </amp-img>
        </amp-story-grid-layer>
        <amp-story-grid-layer template="vertical">
          <h1>Helping Walk</h1>
          <p>It's Back Breaking Work!</p>
        </amp-story-grid-layer>
      </amp-story-page>
      <amp-story-page id="page3">
        <amp-story-grid-layer template="fill">
          <amp-video
            width="720"
            height="1280"
            poster="https://thedales.imgix.net/VFfLJN8cFMvKAihpIjQhMt00bJtZoZiOO/thumbnail.png?w=360&h=640&fit=crop&auto=format,compress&q=60"
            layout="responsive"
            autoplay
          >
            <source
              type="application/vnd.apple.mpegurl"
              src="https://stream.mux.com/VFfLJN8cFMvKAihpIjQhMt00bJtZoZiOO.m3u8"
            />
            <source
              type="video/mp4"
              src="https://stream.mux.com/VFfLJN8cFMvKAihpIjQhMt00bJtZoZiOO/low.mp4"
            />
          </amp-video>
        </amp-story-grid-layer>
      </amp-story-page>
      <amp-story-page id="page4">
        <amp-story-grid-layer template="fill">
          <amp-img
            src="https://tom.imgix.net/moving_izzy_trike.jpg?auto=format,compress&w=720&h=1280&fit=fill&fill=blur"
            width="720"
            height="1280"
            layout="responsive"
          >
          </amp-img>
        </amp-story-grid-layer>
        <amp-story-grid-layer template="vertical">
          <h1>Even on a trike!</h1>
        </amp-story-grid-layer>
      </amp-story-page>
      <amp-story-page id="page5">
        <amp-story-grid-layer template="fill">
          <amp-video
            width="720"
            height="1280"
            poster="https://image.mux.com/7J4AjhgGLB510101NiuvK8uqIU7ZTDxiyt/thumbnail.png?width=360&height=640&fit_mode=pad"
            layout="responsive"
            autoplay
          >
            <source
              type="application/vnd.apple.mpegurl"
              src="https://stream.mux.com/7J4AjhgGLB510101NiuvK8uqIU7ZTDxiyt.m3u8"
            />
            <source
              type="video/mp4"
              src="https://stream.mux.com/7J4AjhgGLB510101NiuvK8uqIU7ZTDxiyt/low.mp4"
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
                text: 'Go to Izzy',
                url: '/izzy'
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
