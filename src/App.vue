<template>
  <Nav/>
  <div class="container col">
    <div class="row">
      <div class="col l4" id="outer-container">
        <MainSection/>
      </div>
      <div class="col l8">
        <component :is="$store.state.compName"></component>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from './components/Navbar'
import MainSection from './components/MainSection'
import Join from './components/Join'
import JoinedRoom from './components/JoinedRoom'
import Create from './components/Create'
import store from './modules/store'
import CreatedRoom from './components/CreatedRoom'
import {mapGetters} from 'vuex'
export default {
  name: 'App',
  store:store,
  components: {
    Nav,
    MainSection,
    Join,
    Create,
    CreatedRoom,
    JoinedRoom
  },
  data(){
    return{
      componentId:'Create'
    }
  },
  methods:{
  },
  computed:{
    ...mapGetters(['getCompName'])
  }
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
