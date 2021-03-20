<template>
  <Nav/>
  <div class="container col">
    <div class="row">
      <div class="col l4" id="outer-container">
        <MainSection/>
      </div>
      <div class="col l8">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from './components/Navbar'
import MainSection from './components/MainSection'
export default {
  name: 'App',
  components: {
    Nav,
    MainSection,
  },
}
</script>

<style scoped>
  #outer-container{
    box-shadow: 0 0 2px grey;
  }
  .container{
    margin:0 10%
  }
</style>
