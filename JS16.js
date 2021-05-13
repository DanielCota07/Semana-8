const app = Vue.createApp ({
    data(){
        return{
            materia: "Paradigmas de Programación",
            semestre: "Sexto factorial",
            carrera: "Sistemas",
            productos: [
                {nombre:"Cerveza", cantidad: 100},
                {nombre:"Agua", cantidad: 50},
                {nombre:"Vino", cantidad: 10}
            ],
            producto: ""
        }
    },
    methods: {
        agregarProducto(){
            this.productos.push(
                {nombre: this.producto, cantidad: 0}
            )
            this.producto="";
        }
    },
    computed: {
        voltearTexto(){
            return this.producto.split("").reverse().join("");
        },
        total(){
            return this.productos.reduce((contador, product) => contador + product.cantidad, 0);
        }
    }
})

const vm = app.mount('#app')