<template>
  <div class="container">
    <header-bar></header-bar>

    <router-view />

    <footer-bar></footer-bar>
  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar/Index.vue'
import FooterBar from '@/components/Footer/Index.vue'

export default {
  name: 'MainLayout',
  components: {
    HeaderBar,
    FooterBar
  }
}
</script>
