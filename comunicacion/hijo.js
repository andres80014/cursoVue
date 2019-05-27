Vue.component('hijo',{
    template:`<div class='p-5 bg-success'>
    <h4>Componente Hijo => {{ numero }}</h4>
    </div>`,
    props:['numero']
})
