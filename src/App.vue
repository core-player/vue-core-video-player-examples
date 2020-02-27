<template>
  <div id="app">
    <Head></Head>
    <Main></Main>
    <Foot></Foot>
  </div>
</template>

<script>
import Head from './components/Head.vue'
import Main from './components/Main.vue'
import Foot from './components/Foot.vue'

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
