<template>
  <Nav/>
  <router-view></router-view>
</template>

<script>
import Nav from './components/Navbar'
export default {
  name: 'App',
  components: {
    Nav,
  },
}
</script>

<style scoped>
</style>
