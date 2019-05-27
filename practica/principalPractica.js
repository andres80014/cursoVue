const app = new Vue({
    el:'#app',
    data:{
      titulo:'GYM con VUE',
      tarea :[],
      nuevaTarea:''
    },
    methods: {
        agregarTarea(){
            this.tarea.push({
                nombre : this.nuevaTarea,
                estado : false
            });
            localStorage.setItem('gym-vue',JSON.stringify(this.tarea));
            this.nuevaTarea = ''
        }, 
        activaTarea(id){
            this.tarea[id].estado = true;
            localStorage.setItem('gym-vue',JSON.stringify(this.tarea));
            
        },
        inactivaTarea(id){
            this.tarea.splice(id,1);
            localStorage.setItem('gym-vue',JSON.stringify(this.tarea));
        },
        

    },
    created(){
        let datosDB =JSON.parse(localStorage.getItem('gym-vue'));
        if(datosDB===null){
            this.tarea=[];
        }
        else{
            this.tarea = datosDB;
        }
        
    }
})