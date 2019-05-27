const app = new Vue({
    el:'#app',
    data:{
        mensaje : 'desde aca',
        frutas:['fruta 1','fruta 2','fruta 3','fruta 4','fruta 5','fruta 6','fruta 7'],
        frutasObj:[
            {nombre:"Pera",cantidad:10},
            {nombre:"Melon",cantidad:80},
            {nombre:"Banano",cantidad:0},
            {nombre:"Manzana",cantidad:40}
        ],
        nuevaFruta:'',
        cantidad :0,
        total :0
    },
    methods: {
        agregarFruta(){
            this.frutasObj.push( 
                {   nombre:this.nuevaFruta , cantidad:this.cantidad}   );
             this.nuevaFruta =''   
        }
    },
    computed: {
        sumarFrutas(){
            this.total = 0;
           for(fruta of this.frutasObj){
               this.total = this.total + fruta.cantidad;
            
           }     
           return this.total;
        }

    }
})