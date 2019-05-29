<template>
  <div>
      <ul class="list-group">
        <li v-for="(item,index) of arrayOrdenado" :key="index" @click="aumentar(index)"  class="list-group-item d-flex justify-content-between align-items-center">
            {{ item.nombre }} 
            <span class="badge badge-primary badge-pill" >{{ item.cantidad }}</span>
        </li>
        </ul>
        <br>
        <button class="btn btn-success btn-block" @click="reiniciar()" >Reiniciar</button>
  </div>
</template>

<script>
import { mapState,mapMutations } from 'vuex';
export default {
    computed: {
        ...mapState(['frutas']),
        arrayOrdenado(){
            return this.frutas.sort((a , b)=>b.cantidad - a.cantidad)
        }

    },
    methods: {
        ...mapMutations(['aumentar','reiniciar'])
    },
}
</script>
