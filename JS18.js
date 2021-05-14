const app = Vue.createApp({
    data(){
        return{
            usuarios:[]  
        }
    },
    created(){
        this.obtenerUsuarios()
    },
    methods:{
        obtenerUsuarios(){
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                this.usuarios=users;
            })
        },    
    }
})
const app2 = Vue.createApp({
    data(){
        return{
             usuarios2: []
        }
    },
    created(){
        this.obtenerUsuarios2()
    },
    methods: {
        async obtenerUsuarios2(){
            const url ='https://jsonplaceholder.typicode.com/users'
            const respuesta= await fetch(url)
            const usuarios= await respuesta.json()
            this.usuarios2=usuarios;
         },
    }
})
const vm= app.mount('#app')
const vm2= app2.mount('#app2')