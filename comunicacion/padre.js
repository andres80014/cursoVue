Vue.component('padre',{
    template: `
    <div class='p-5 bg-dark text-white'>
        <h2>Componente padre : {{ numeroPadre }}</h2>
        <hijo :numero="numeroPadre" @nombreHijo="recibeHijo = $event "></hijo>
        {{ recibeHijo }}

        <button @click="numeroPadre++">+</button>
    </div> 
    `,
    data(){
        return{
            numeroPadre : 10,
            recibeHijo :''
        } 
    }

    
})