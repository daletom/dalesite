<template>
  <amp-body>
    <amp-story
      standalone
      title="Zeek's First Halloween"
      publisher="Tom Dale"
      publisher-logo-src="https://tom.imgix.net/krennic_profile.png?w=150&h=150&fit=crop&&crop=focalpoints&fp-z=2&fp-y=.2&auto=format,compress"
      poster-portrait-src="https://tom.imgix.net/disney_zeek_back.HEIC?auto=format,compress&w=720&h=1280&fit=crop&crop=edges"
    >
      <amp-story-page id="cover">
        <amp-story-grid-layer template="fill">
          <amp-img
            src="https://tom.imgix.net/halloween_zeek_pumpkin.HEIC?auto=format,compress&w=720&h=1280&fit=crop&crop=faces,edges"
            width="720"
            height="1280"
            layout="responsive"
          >
          </amp-img>
        </amp-story-grid-layer>
        <amp-story-grid-layer template="vertical">
          <h1>Enjoying the Pumpkin Patch</h1>
        </amp-story-grid-layer>
      </amp-story-page>
      <amp-story-page id="page1">
        <amp-story-grid-layer template="fill">
          <amp-video
            width="720"
            height="1280"
            poster="https://image.mux.com/z8f01xr00lwDNM01iXhJC1wjZTpipg9165U/thumbnail.png?width=214&height=121&fit_mode=pad"
            layout="responsive"
            autoplay
          >
            <source
              type="application/vnd.apple.mpegurl"
              src="https://stream.mux.com/z8f01xr00lwDNM01iXhJC1wjZTpipg9165U.m3u8"
            />
            <source
              type="video/mp4"
              src="https://tom.imgix.net/halloween_zeek_monster.mp4"
            />
          </amp-video>
        </amp-story-grid-layer>
      </amp-story-page>
      <amp-story-page id="page2">
        <amp-story-grid-layer template="fill">
          <amp-img
            src="https://tom.imgix.net/halloween.jpg?auto=format,compress&w=720&h=1280&fit=crop&crop=faces,edges"
            width="720"
            height="1280"
            layout="responsive"
          >
          </amp-img>
        </amp-story-grid-layer>
        <amp-story-grid-layer template="vertical">
          <h1>The Frankenstein Family</h1>
          <p>He's Alive!!!</p>
        </amp-story-grid-layer>
      </amp-story-page>
      <amp-story-page id="page3">
        <amp-story-grid-layer template="fill">
          <amp-video
            width="720"
            height="1280"
            poster="https://image.mux.com/B3gTNsYySA2KSpNQsHjsE9nSwIa5coYS/thumbnail.png?width=214&height=121&fit_mode=pad"
            layout="responsive"
            autoplay
          >
            <source
              type="application/vnd.apple.mpegurl"
              src="https://stream.mux.com/B3gTNsYySA2KSpNQsHjsE9nSwIa5coYS.m3u8"
            />
            <source
              type="video/mp4"
              src="https://tom.imgix.net/halloween_zeek_treat1.mp4"
            />
          </amp-video>
        </amp-story-grid-layer>
      </amp-story-page>
      <amp-story-page id="page4">
        <amp-story-grid-layer template="fill">
          <amp-img
            src="https://tom.imgix.net/halloween_zeek_group.jpg?auto=format,compress&w=720&h=1280&fit=fill&fill=blur"
            width="720"
            height="1280"
            layout="responsive"
          >
          </amp-img>
        </amp-story-grid-layer>
        <amp-story-grid-layer template="vertical">
          <h1>Trick or Treat</h1>
          <p>The Whole Gang!</p>
        </amp-story-grid-layer>
      </amp-story-page>
      <amp-story-page id="page5">
        <amp-story-grid-layer template="fill">
          <amp-video
            width="720"
            height="1280"
            poster="https://image.mux.com/ehJjOl1SA00hzjtJRRhOfeWT1y3cqGg6q/thumbnail.png?width=214&height=121&fit_mode=pad"
            layout="responsive"
            autoplay
          >
            <source
              type="application/vnd.apple.mpegurl"
              src="https://stream.mux.com/ehJjOl1SA00hzjtJRRhOfeWT1y3cqGg6q.m3u8"
            />
            <source
              type="video/mp4"
              src="https://tom.imgix.net/halloween_zeek_treat2.mp4"
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
            text: 'More Sections on Zeek'
          },
          {
            type: 'landscape',
            title: "Zeek's Disney Trip",
            url: 'https://thedales.me/disney/',
            image:
              'https://tom.imgix.net/disney_zeek_castle.HEIC?auto=format,compress&w=720&h=1280&fit=fill&fill=blur',
            category: 'Disney'
          },
          {
            type: 'portrait',
            title: "Zeek's First Birthday",
            url: 'https://thedales.me/birthday/',
            image:
              'https://tom.imgix.net/birthday_zeek_birthday.HEIC?auto=format,compress&w=720&h=1280&fit=fill&fill=blur',
            category: 'Birthday'
          },
          {
            type: 'cta-link',
            links: [
              {
                text: 'Go Back Home',
                url: '/'
              },
              {
                text: 'Go to Zeek',
                url: '/zeek'
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
  font-weight: normal;
  line-height: 1.174;
}
p {
  font-weight: normal;
  font-size: 1.3em;
  line-height: 1.5em;
  color: #fff;
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
