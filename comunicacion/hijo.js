Vue.component('hijo',{
    template:`<div class='p-5 bg-success'>
    <h4>Componente Hijo => {{ numero }}</h4>
    <h4>Enviar al padre nombre  => {{ nombre }}</h4>
    
    </div>`,
    props:['numero'],
    data(){
        return{
            nombre:'Jose '
        }
    },mounted() {
        this.$emit('nombreHijo',this.nombre);
    },
})
