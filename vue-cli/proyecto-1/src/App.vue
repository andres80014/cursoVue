<template>
  <div id="app" class="container">
    <cabecera></cabecera>
    <listado></listado>
  </div>
</template>

<script>
import Cabecera from './components/Cabecera.vue'
import Listado from './components/Listado.vue'

export default {
  name: 'app',
  components: {
    cabecera : Cabecera,
    listado  : Listado
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
