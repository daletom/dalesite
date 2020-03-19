<template>
  <div>
    <h1>The Dales</h1>
    <h2>Click a person to go to their page</h2>

    <nuxt-link to="/tom"
      ><img
        src="https://tom.imgix.net/krennic_profile.png?w=1000&h=1000&txtlineclr=ff0000&txtline=.5&border=10%2C73ff0000&txtsize=112&txtpad=80&txtalign=center&txtfont64=SGVsdmV0aWNhTmV1ZS1UaGlu&txtclr=fff&txtfit=max&txt64=VG9t&fit=crop&auto=format%2Ccompress"
        alt="Tom"
        srcset="
          https://tom.imgix.net/krennic_profile.png?txtlineclr=ff0000&txtline=.5&border=10%2C73ff0000&txtsize=112&txtpad=80&txtalign=center&txtfont64=SGVsdmV0aWNhTmV1ZS1UaGlu&txtclr=fff&txtfit=max&txt64=VG9t&fit=crop&auto=format%2Ccompress&h=400&w=400 400w,
          https://tom.imgix.net/krennic_profile.png?txtlineclr=ff0000&txtline=.5&border=10%2C73ff0000&txtsize=112&txtpad=80&txtalign=center&txtfont64=SGVsdmV0aWNhTmV1ZS1UaGlu&txtclr=fff&txtfit=max&txt64=VG9t&fit=crop&auto=format%2Ccompress&h=450&w=450 450w,
          https://tom.imgix.net/krennic_profile.png?txtlineclr=ff0000&txtline=.5&border=10%2C73ff0000&txtsize=112&txtpad=80&txtalign=center&txtfont64=SGVsdmV0aWNhTmV1ZS1UaGlu&txtclr=fff&txtfit=max&txt64=VG9t&fit=crop&auto=format%2Ccompress&h=500&w=500 500w,
          https://tom.imgix.net/krennic_profile.png?txtlineclr=ff0000&txtline=.5&border=10%2C73ff0000&txtsize=112&txtpad=80&txtalign=center&txtfont64=SGVsdmV0aWNhTmV1ZS1UaGlu&txtclr=fff&txtfit=max&txt64=VG9t&fit=crop&auto=format%2Ccompress&h=550&w=550 550w,
          https://tom.imgix.net/krennic_profile.png?txtlineclr=ff0000&txtline=.5&border=10%2C73ff0000&txtsize=112&txtpad=80&txtalign=center&txtfont64=SGVsdmV0aWNhTmV1ZS1UaGlu&txtclr=fff&txtfit=max&txt64=VG9t&fit=crop&auto=format%2Ccompress&h=700&w=700 700w,
          https://tom.imgix.net/krennic_profile.png?txtlineclr=ff0000&txtline=.5&border=10%2C73ff0000&txtsize=112&txtpad=80&txtalign=center&txtfont64=SGVsdmV0aWNhTmV1ZS1UaGlu&txtclr=fff&txtfit=max&txt64=VG9t&fit=crop&auto=format%2Ccompress&h=850&w=850 850w
        "
        sizes="(min-width:1240px) 450px, 90vw"
    /></nuxt-link>

    <nuxt-link to="/heather"
      ><img
        src="https://tom.imgix.net/portrait_heather.jpg?txt64=SGVhdGhlcg&fit=crop&txtfont64=SGVsdmV0aWNhTmV1ZS1UaGlu&txtfit=max&txtclr=fff&txtfont64=SGVsdmV0aWNhTmV1ZS1UaGlu&txtalign=center&txtpad=80&txtsize=112&border=10%2C73ff0000&txtline=.5&txtlineclr=ff0000&h=1000&w=1000&auto=format%2Ccompress"
        alt="Heather"
        srcset="
          https://tom.imgix.net/portrait_heather.jpg?txt64=SGVhdGhlcg&fit=crop&txtfont64=SGVsdmV0aWNhTmV1ZS1UaGlu&txtfit=max&txtclr=fff&txtfont64=SGVsdmV0aWNhTmV1ZS1UaGlu&txtalign=center&txtpad=80&txtsize=112&border=10%2C73ff0000&txtline=.5&txtlineclr=ff0000&h=400&w=400&auto=format%2Ccompress 400w,
          https://tom.imgix.net/portrait_heather.jpg?txt64=SGVhdGhlcg&fit=crop&txtfont64=SGVsdmV0aWNhTmV1ZS1UaGlu&txtfit=max&txtclr=fff&txtfont64=SGVsdmV0aWNhTmV1ZS1UaGlu&txtalign=center&txtpad=80&txtsize=112&border=10%2C73ff0000&txtline=.5&txtlineclr=ff0000&h=450&w=450&auto=format%2Ccompress 450w,
          https://tom.imgix.net/portrait_heather.jpg?txt64=SGVhdGhlcg&fit=crop&txtfont64=SGVsdmV0aWNhTmV1ZS1UaGlu&txtfit=max&txtclr=fff&txtfont64=SGVsdmV0aWNhTmV1ZS1UaGlu&txtalign=center&txtpad=80&txtsize=112&border=10%2C73ff0000&txtline=.5&txtlineclr=ff0000&h=500&w=500&auto=format%2Ccompress 500w,
          https://tom.imgix.net/portrait_heather.jpg?txt64=SGVhdGhlcg&fit=crop&txtfont64=SGVsdmV0aWNhTmV1ZS1UaGlu&txtfit=max&txtclr=fff&txtfont64=SGVsdmV0aWNhTmV1ZS1UaGlu&txtalign=center&txtpad=80&txtsize=112&border=10%2C73ff0000&txtline=.5&txtlineclr=ff0000&h=550&w=550&auto=format%2Ccompress 550w,
          https://tom.imgix.net/portrait_heather.jpg?txt64=SGVhdGhlcg&fit=crop&txtfont64=SGVsdmV0aWNhTmV1ZS1UaGlu&txtfit=max&txtclr=fff&txtfont64=SGVsdmV0aWNhTmV1ZS1UaGlu&txtalign=center&txtpad=80&txtsize=112&border=10%2C73ff0000&txtline=.5&txtlineclr=ff0000&h=700&w=700&auto=format%2Ccompress 700w,
          https://tom.imgix.net/portrait_heather.jpg?txt64=SGVhdGhlcg&fit=crop&txtfont64=SGVsdmV0aWNhTmV1ZS1UaGlu&txtfit=max&txtclr=fff&txtfont64=SGVsdmV0aWNhTmV1ZS1UaGlu&txtalign=center&txtpad=80&txtsize=112&border=10%2C73ff0000&txtline=.5&txtlineclr=ff0000&h=850&w=850&auto=format%2Ccompress 850w
        "
        sizes="(min-width:1240px) 450px, 90vw"
    /></nuxt-link>

    <nuxt-link to="/zeek"
      ><img
        src="https://tom.imgix.net/beach_zeek.jpg?w=1000&h=1000&txtlineclr=ff0000&txtline=.5&border=10%2C73ff0000&txtsize=112&txtpad=80&txtalign=center&txtfont64=SGVsdmV0aWNhTmV1ZS1UaGlu&txtclr=fff&txtfit=max&txt64=WmVlaw&fit=crop&auto=format%2Ccompress"
        alt="Zeek"
        srcset="
          https://tom.imgix.net/beach_zeek.jpg?txtlineclr=ff0000&txtline=.5&border=10%2C73ff0000&txtsize=112&txtpad=80&txtalign=center&txtfont64=SGVsdmV0aWNhTmV1ZS1UaGlu&txtclr=fff&txtfit=max&txt64=WmVlaw&fit=crop&auto=format%2Ccompress&h=400&w=400 400w,
          https://tom.imgix.net/beach_zeek.jpg?txtlineclr=ff0000&txtline=.5&border=10%2C73ff0000&txtsize=112&txtpad=80&txtalign=center&txtfont64=SGVsdmV0aWNhTmV1ZS1UaGlu&txtclr=fff&txtfit=max&txt64=WmVlaw&fit=crop&auto=format%2Ccompress&h=450&w=450 450w,
          https://tom.imgix.net/beach_zeek.jpg?txtlineclr=ff0000&txtline=.5&border=10%2C73ff0000&txtsize=112&txtpad=80&txtalign=center&txtfont64=SGVsdmV0aWNhTmV1ZS1UaGlu&txtclr=fff&txtfit=max&txt64=WmVlaw&fit=crop&auto=format%2Ccompress&h=500&w=500 500w,
          https://tom.imgix.net/beach_zeek.jpg?txtlineclr=ff0000&txtline=.5&border=10%2C73ff0000&txtsize=112&txtpad=80&txtalign=center&txtfont64=SGVsdmV0aWNhTmV1ZS1UaGlu&txtclr=fff&txtfit=max&txt64=WmVlaw&fit=crop&auto=format%2Ccompress&h=550&w=550 550w,
          https://tom.imgix.net/beach_zeek.jpg?txtlineclr=ff0000&txtline=.5&border=10%2C73ff0000&txtsize=112&txtpad=80&txtalign=center&txtfont64=SGVsdmV0aWNhTmV1ZS1UaGlu&txtclr=fff&txtfit=max&txt64=WmVlaw&fit=crop&auto=format%2Ccompress&h=700&w=700 700w,
          https://tom.imgix.net/beach_zeek.jpg?txtlineclr=ff0000&txtline=.5&border=10%2C73ff0000&txtsize=112&txtpad=80&txtalign=center&txtfont64=SGVsdmV0aWNhTmV1ZS1UaGlu&txtclr=fff&txtfit=max&txt64=WmVlaw&fit=crop&auto=format%2Ccompress&h=850&w=850 850w
        "
        sizes="(min-width:1240px) 450px, 90vw"
    /></nuxt-link>

    <nuxt-link to="/izzy"
      ><img
        src="https://tom.imgix.net/izzy_sharks.jpg?txt64=SXp6eQ&txtfit=max&txtclr=fff&txtfont64=SGVsdmV0aWNhTmV1ZS1UaGlu&txtalign=center&txtpad=80&txtsize=112&border=10%2C73ff0000&txtline=.5&txtlineclr=ff0000&w=1000&h=1000&border=10%2C73ff0000&fit=crop&auto=format%2Ccompress"
        alt="Izzy"
        srcset="
          https://tom.imgix.net/izzy_sharks.jpg?txt64=SXp6eQ&txtfit=max&txtclr=fff&txtfont64=SGVsdmV0aWNhTmV1ZS1UaGlu&txtalign=center&txtpad=80&txtsize=112&border=10%2C73ff0000&txtline=.5&txtlineclr=ff0000&border=10%2C73ff0000&fit=crop&auto=format%2Ccompress&h=400&w=400 400w,
          https://tom.imgix.net/izzy_sharks.jpg?txt64=SXp6eQ&txtfit=max&txtclr=fff&txtfont64=SGVsdmV0aWNhTmV1ZS1UaGlu&txtalign=center&txtpad=80&txtsize=112&border=10%2C73ff0000&txtline=.5&txtlineclr=ff0000&border=10%2C73ff0000&fit=crop&auto=format%2Ccompress&h=450&w=450 450w,
          https://tom.imgix.net/izzy_sharks.jpg?txt64=SXp6eQ&txtfit=max&txtclr=fff&txtfont64=SGVsdmV0aWNhTmV1ZS1UaGlu&txtalign=center&txtpad=80&txtsize=112&border=10%2C73ff0000&txtline=.5&txtlineclr=ff0000&border=10%2C73ff0000&fit=crop&auto=format%2Ccompress&h=500&w=500 500w,
          https://tom.imgix.net/izzy_sharks.jpg?txt64=SXp6eQ&txtfit=max&txtclr=fff&txtfont64=SGVsdmV0aWNhTmV1ZS1UaGlu&txtalign=center&txtpad=80&txtsize=112&border=10%2C73ff0000&txtline=.5&txtlineclr=ff0000&border=10%2C73ff0000&fit=crop&auto=format%2Ccompress&h=550&w=550 550w,
          https://tom.imgix.net/izzy_sharks.jpg?txt64=SXp6eQ&txtfit=max&txtclr=fff&txtfont64=SGVsdmV0aWNhTmV1ZS1UaGlu&txtalign=center&txtpad=80&txtsize=112&border=10%2C73ff0000&txtline=.5&txtlineclr=ff0000&border=10%2C73ff0000&fit=crop&auto=format%2Ccompress&h=700&w=700 700w,
          https://tom.imgix.net/izzy_sharks.jpg?txt64=SXp6eQ&txtfit=max&txtclr=fff&txtfont64=SGVsdmV0aWNhTmV1ZS1UaGlu&txtalign=center&txtpad=80&txtsize=112&border=10%2C73ff0000&txtline=.5&txtlineclr=ff0000&border=10%2C73ff0000&fit=crop&auto=format%2Ccompress&h=850&w=850 850w
        "
        sizes="(min-width:1240px) 450px, 90vw"
    /></nuxt-link>

    <nuxt-link to="/gallery"
      ><img
        src="https://tom.imgix.net/gallery.png?txt64=R2FsbGVyeQ&txtfit=max&txtclr=fff&txtfont64=SGVsdmV0aWNhTmV1ZS1UaGlu&txtalign=center&txtpad=80&txtsize=112&border=10%2C73ff0000&txtline=.5&txtlineclr=ff0000&border=10%2C73ff0000&w=1000&h=1000&border=10%2C73ff0000&fit=crop&auto=format%2Ccompress"
        alt="Zeek"
        srcset="
          https://tom.imgix.net/gallery.png?txt64=R2FsbGVyeQ&txtfit=max&txtclr=fff&txtfont64=SGVsdmV0aWNhTmV1ZS1UaGlu&txtalign=center&txtpad=80&txtsize=112&border=10%2C73ff0000&txtline=.5&txtlineclr=ff0000&border=10%2C73ff0000&fit=crop&auto=format%2Ccompress&h=400&w=400 400w,
          https://tom.imgix.net/gallery.png?txt64=R2FsbGVyeQ&txtfit=max&txtclr=fff&txtfont64=SGVsdmV0aWNhTmV1ZS1UaGlu&txtalign=center&txtpad=80&txtsize=112&border=10%2C73ff0000&txtline=.5&txtlineclr=ff0000&border=10%2C73ff0000&fit=crop&auto=format%2Ccompress&h=450&w=450 450w,
          https://tom.imgix.net/gallery.png?txt64=R2FsbGVyeQ&txtfit=max&txtclr=fff&txtfont64=SGVsdmV0aWNhTmV1ZS1UaGlu&txtalign=center&txtpad=80&txtsize=112&border=10%2C73ff0000&txtline=.5&txtlineclr=ff0000&border=10%2C73ff0000&fit=crop&auto=format%2Ccompress&h=500&w=500 500w,
          https://tom.imgix.net/gallery.png?txt64=R2FsbGVyeQ&txtfit=max&txtclr=fff&txtfont64=SGVsdmV0aWNhTmV1ZS1UaGlu&txtalign=center&txtpad=80&txtsize=112&border=10%2C73ff0000&txtline=.5&txtlineclr=ff0000&border=10%2C73ff0000&fit=crop&auto=format%2Ccompress&h=550&w=550 550w,
          https://tom.imgix.net/gallery.png?txt64=R2FsbGVyeQ&txtfit=max&txtclr=fff&txtfont64=SGVsdmV0aWNhTmV1ZS1UaGlu&txtalign=center&txtpad=80&txtsize=112&border=10%2C73ff0000&txtline=.5&txtlineclr=ff0000&border=10%2C73ff0000&fit=crop&auto=format%2Ccompress&h=700&w=700 700w,
          https://tom.imgix.net/gallery.png?txt64=R2FsbGVyeQ&txtfit=max&txtclr=fff&txtfont64=SGVsdmV0aWNhTmV1ZS1UaGlu&txtalign=center&txtpad=80&txtsize=112&border=10%2C73ff0000&txtline=.5&txtlineclr=ff0000&border=10%2C73ff0000&fit=crop&auto=format%2Ccompress&h=850&w=850 850w
        "
        sizes="(min-width:1240px) 450px, 90vw"
    /></nuxt-link>

    <nuxt-link to="/video"
      ><img
        src="https://tom.imgix.net/gallery.png?border=10%2C73ff0000&w=1000&h=1000&border=10%2C73ff0000&fit=crop&auto=format%2Ccompress"
        alt="Zeek"
        srcset="
          https://tom.imgix.net/gallery.png?border=10%2C73ff0000&fit=crop&auto=format%2Ccompress&h=400&w=400 400w,
          https://tom.imgix.net/gallery.png?border=10%2C73ff0000&fit=crop&auto=format%2Ccompress&h=450&w=450 450w,
          https://tom.imgix.net/gallery.png?border=10%2C73ff0000&fit=crop&auto=format%2Ccompress&h=500&w=500 500w,
          https://tom.imgix.net/gallery.png?border=10%2C73ff0000&fit=crop&auto=format%2Ccompress&h=550&w=550 550w,
          https://tom.imgix.net/gallery.png?border=10%2C73ff0000&fit=crop&auto=format%2Ccompress&h=700&w=700 700w,
          https://tom.imgix.net/gallery.png?border=10%2C73ff0000&fit=crop&auto=format%2Ccompress&h=850&w=850 850w
        "
        sizes="(min-width:1240px) 450px, 90vw"
    /></nuxt-link>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'The Dales',
      meta: [
        { name: 'twitter:title', content: 'The Dales' },
        { name: 'twitter:description', content: 'Dale Family Website' },
        {
          name: 'twitter:image',
          content: 'https://tom.imgix.net/thedales.svg?fm=png'
        },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'og:title', content: 'The Dales' },
        { name: 'og:type', content: 'website' },
        { name: 'og:url', content: 'https://thedales.me' },
        {
          name: 'og:image',
          content: 'https://tom.imgix.net/thedales.svg?fm=png'
        }
      ]
    }
  }
}
</script>
