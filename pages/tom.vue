<template>
  <div>
    <h1>Tom</h1>
    <h2>Click an image to see a story.</h2>

    <nuxt-link to="/artgallery"
      ><img
        src="https://tom.imgix.net/artgallery.jpg?txtlineclr=ff0000&txtline=2&border=10%2C73ff0000&fit=crop&txt64=QXJ0IEdhbGxlcnk&txtpad=80&txtsize=112&txtalign=bottom%2Ccenter&txtclr=DCDCDC&h=850&w=850"
        alt="Art Gallery"
        srcset="
          https://tom.imgix.net/artgallery.jpg?txtlineclr=ff0000&txtline=2&border=10%2C73ff0000&fit=crop&txt64=QXJ0IEdhbGxlcnk&txtpad=80&txtsize=112&txtalign=bottom%2Ccenter&txtclr=DCDCDC&auto=format%2Ccompress&h=400&w=400 400w,
          https://tom.imgix.net/artgallery.jpg?txtlineclr=ff0000&txtline=2&border=10%2C73ff0000&fit=crop&txt64=QXJ0IEdhbGxlcnk&txtpad=80&txtsize=112&txtalign=bottom%2Ccenter&txtclr=DCDCDC&auto=format%2Ccompress&h=450&w=450 450w,
          https://tom.imgix.net/artgallery.jpg?txtlineclr=ff0000&txtline=2&border=10%2C73ff0000&fit=crop&txt64=QXJ0IEdhbGxlcnk&txtpad=80&txtsize=112&txtalign=bottom%2Ccenter&txtclr=DCDCDC&auto=format%2Ccompress&h=500&w=500 500w,
          https://tom.imgix.net/artgallery.jpg?txtlineclr=ff0000&txtline=2&border=10%2C73ff0000&fit=crop&txt64=QXJ0IEdhbGxlcnk&txtpad=80&txtsize=112&txtalign=bottom%2Ccenter&txtclr=DCDCDC&auto=format%2Ccompress&h=550&w=550 550w,
          https://tom.imgix.net/artgallery.jpg?txtlineclr=ff0000&txtline=2&border=10%2C73ff0000&fit=crop&txt64=QXJ0IEdhbGxlcnk&txtpad=80&txtsize=112&txtalign=bottom%2Ccenter&txtclr=DCDCDC&auto=format%2Ccompress&h=700&w=700 700w,
          https://tom.imgix.net/artgallery.jpg?txtlineclr=ff0000&txtline=2&border=10%2C73ff0000&fit=crop&txt64=QXJ0IEdhbGxlcnk&txtpad=80&txtsize=112&txtalign=bottom%2Ccenter&txtclr=DCDCDC&auto=format%2Ccompress&h=850&w=850 850w
        "
        sizes="(min-width:1240px) 450px, 90vw"
    /></nuxt-link>
  </div>
</template>
