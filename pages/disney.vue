<template>
  <amp-body>
    <amp-story
      standalone
      title="Zeek's Disney Trip"
      publisher="Tom Dale"
      publisher-logo-src="https://tom.imgix.net/krennic_profile.png?w=150&h=150&fit=crop&&crop=focalpoints&fp-z=2&fp-y=.2&auto=format,compress"
      poster-portrait-src="https://tom.imgix.net/disney_zeek_back.HEIC?auto=format,compress&w=720&h=1280&fit=crop&crop=edges"
    >
      <amp-story-page id="cover">
        <amp-story-grid-layer template="fill">
          <amp-img
            src="https://tom.imgix.net/disney_zeek_dance.jpg?auto=format,compress&w=720&h=1280&fit=crop&crop=faces,edges"
            width="720"
            height="1280"
            layout="responsive"
          >
          </amp-img>
        </amp-story-grid-layer>
        <amp-story-grid-layer template="vertical">
          <h1>Disney Dance Parties</h1>
          <p>Zeek was never afraid to partake in a dance party at Disney!</p>
        </amp-story-grid-layer>
      </amp-story-page>
      <amp-story-page id="page1">
        <amp-story-grid-layer template="fill">
          <amp-video
            width="720"
            height="1280"
            poster="https://thedales.imgix.net/1wBQ2ffadnxQVhHTWeAnf4exw4rKHaHB/thumbnail.png?w=360&h=640&fit=crop&auto=format,compress&q=60"
            layout="responsive"
            autoplay
          >
            <source
              type="application/vnd.apple.mpegurl"
              src="https://stream.mux.com/1wBQ2ffadnxQVhHTWeAnf4exw4rKHaHB.m3u8"
            />
            <source
              type="video/mp4"
              src="https://tom.imgix.net/disney_zeek_dance1.mp4"
            />
          </amp-video>
        </amp-story-grid-layer>
      </amp-story-page>
      <amp-story-page id="page2">
        <amp-story-grid-layer template="fill">
          <amp-img
            src="https://tom.imgix.net/disney_zeek_kinglouie.jpg?auto=format,compress&w=720&h=1280&fit=fill&fill=blur"
            width="720"
            height="1280"
            layout="responsive"
          >
          </amp-img>
        </amp-story-grid-layer>
        <amp-story-grid-layer template="vertical">
          <h1>Jungle Book</h1>
          <p>Zeek loves his new pal King Louie!</p>
        </amp-story-grid-layer>
      </amp-story-page>
      <amp-story-page id="page3">
        <amp-story-grid-layer template="fill">
          <amp-video
            width="720"
            height="1280"
            poster="https://thedales.imgix.net/a2BfnCauOT9gN2OjnzCswQ5kmDJXaDYI/thumbnail.png?w=360&h=640&fit=crop&auto=format,compress&q=60"
            layout="responsive"
            autoplay
          >
            <source
              type="application/vnd.apple.mpegurl"
              src="https://stream.mux.com/a2BfnCauOT9gN2OjnzCswQ5kmDJXaDYI.m3u8"
            />
            <source
              type="video/mp4"
              src="https://tom.imgix.net/disney_zeek_dance2.mp4"
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
            poster="https://image.mux.com/vCwbnC8dywmnvKVbVN9G6vuJ36hKp2v01/thumbnail.png?width=214&height=121&fit_mode=pad"
            layout="responsive"
            autoplay
          >
            <source
              type="application/vnd.apple.mpegurl"
              src="https://stream.mux.com/vCwbnC8dywmnvKVbVN9G6vuJ36hKp2v01.m3u8"
            />
            <source
              type="video/mp4"
              src="https://tom.imgix.net/disney_zeek_toystory.mp4"
            />
          </amp-video>
        </amp-story-grid-layer>
      </amp-story-page>
      <amp-story-page id="page6">
        <amp-story-grid-layer template="fill">
          <amp-img
            src="https://tom.imgix.net/disney_zeek_minnie.jpg?auto=format,compress&w=720&h=1280&fit=fill&fill=blur"
            width="720"
            height="1280"
            layout="responsive"
          >
          </amp-img>
        </amp-story-grid-layer>
        <amp-story-grid-layer template="vertical">
          <h1>Hanging with Minnie</h1>
        </amp-story-grid-layer>
      </amp-story-page>
      <amp-story-page id="page7">
        <amp-story-grid-layer template="fill">
          <amp-video
            width="720"
            height="1280"
            poster="https://image.mux.com/T48WBihqo6LwCkR6fQ9S00Q8pmuIa00AnH/thumbnail.png?width=214&height=121&fit_mode=padhttps://"
            layout="responsive"
            autoplay
          >
            <source
              type="application/vnd.apple.mpegurl"
              src="https://stream.mux.com/T48WBihqo6LwCkR6fQ9S00Q8pmuIa00AnH.m3u8"
            />
            <source
              type="video/mp4"
              src="https://tom.imgix.net/disney_zeek_fireworks.mp4"
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
            type: 'portrait',
            title: "Zeek's First Halloween",
            url: '/halloween/',
            image:
              'https://tom.imgix.net/halloween.jpg?auto=format,compress&w=720&h=1280&fit=fill&fill=blur',
            category: 'Halloween'
          },
          {
            type: 'portrait',
            title: "Zeek's First Birthday",
            url: '/birthday/',
            image:
              'https://tom.imgix.net/birthday_zeek_birthday.HEIC?auto=format,compress&w=720&h=1280&fit=fill&fill=blur',
            category: 'Halloween'
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
