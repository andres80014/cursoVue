
Vue.component('saludo',{
template:'<div><h2>  {{saludo}} </h2> <h3>lasjkljfalskjfljka</h3></div>',
    data(){
        return {
            saludo:"Hola desde Vue"
        }
    }
});
const app = new Vue({
    el:'#app',
    data:{
     saludo : "componentes "
    }
    
})