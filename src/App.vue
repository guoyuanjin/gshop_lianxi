<template>
  <div>
    <router-view/>
    <footerGuide/>
  </div>
</template>
<script>
import footerGuide from './components/FooterGuide/FooterGuide.vue'
export default {
  components: {footerGuide}
}
</script>
<style lang='stylus' rel='stylesheet/stylus'>
</style>
