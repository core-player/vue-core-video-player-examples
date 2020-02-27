<template>
  <div id="app">
    <Head></Head>
    <Main></Main>
    <Foot></Foot>
  </div>
</template>

<script>
import Vue from 'vue'
import VueCoreVideoPlayer from 'vue-core-video-player'
 
import Head from './components/Head.vue'
import Main from './components/Main.vue'
import Foot from './components/Foot.vue'

Vue.use(VueCoreVideoPlayer, {
  lang: 'zh-CN'
})

export default {
  name: 'App',
  components: {
    Head,
    Main,
    Foot
  }
}
</script>

<style>

</style>
