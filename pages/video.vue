<template>
  <div class="app">
    <h2>Vue Video</h2>
    <aplayer :player-options="aOption" @onplay="play" @onpause="pause" />
    <vplayer :player-options="vOption" @onplay="play" @onpause="pause" />
  </div>
</template>

<script>
import { aplayer } from 'vue-hls-player'
import vplayer from 'vplayer'

export default {
  components: {
    aplayer,
    vplayer
  },
  data() {
    return {
      aOption: {
        type: 'video',
        src: 'https://stream.mux.com/GvgMD02G02mv0200fDiP71cLF9RrbRlEq8V9.m3u8',
        preload: true,
        autoplay: true,
        isLoop: false,
        poster:
          'https://images.mux.com/GvgMD02G02mv0200fDiP71cLF9RrbRlEq8V9/thumbnail.jpg?',
        playsinline: true,
        title: '视频播放器',
        controls: 'progress,durration,volume'
      },
      vOption: {
        type: 'video',
        src: 'https://stream.mux.com/GvgMD02G02mv0200fDiP71cLF9RrbRlEq8V9.m3u8',
        preload: true,
        autoplay: true,
        isLoop: false,
        poster:
          'https://images.mux.com/GvgMD02G02mv0200fDiP71cLF9RrbRlEq8V9/thumbnail.jpg?',
        playsinline: true,
        title: '视频播放器',
        controls: 'progress,durration,volume'
      }
    }
  },
  methods: {
    play(e) {
      alert('play now')
    },
    pause(e) {
      alert('pause now')
    }
  }
}
</script>
<style>
.player {
  width: 400px;
  margin: 0 auto;
  min-height: 30px;
}
</style>
