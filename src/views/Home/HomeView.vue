<template>
  <div class="home">
    <home-title></home-title>
    <main-form></main-form>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeTitle from './HomeTitle.vue'
import MainForm from './HomeForm.vue'

export default {
  name: 'HomeView',
  components: {
    HomeTitle,
    MainForm
  }
}
</script>
