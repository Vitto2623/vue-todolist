const app = new Vue({
    el: '#app',
    data:{
        todoList:[
            {
                text: 'uova',
                done: true,
            },
            {
                text: 'patate',
                done: true,
            },
            {
                text: 'formaggio',
                done: false,
            },
            {
                text: 'pizza',
                done: false,
            }
        ],

        contenuto: "",
        listCheck: "",

    },
    methods: {
        aggiungiElemento(contenutoDaAggiungere, doCheck){
            if(contenutoDaAggiungere.trim() != ""){
                const newElement = {
                    text : contenutoDaAggiungere.trim(),
                    Check : doCheck,
                }
                this.todoList.push(newElement);
                this.contenuto = "";
            }else{
                console.warn('elemento vuoto');
            }
        },
        rimuoviElemento(Index){
            if(this.todoList[Index] != undefined){
                this.todoList.splice(Index, 1);
            }else{
                console.warn('elemento non esistente');
            }
        },
        rimuoviTestoSbarrato(elemento){
            elemento.done = false;
        },
        aggiungiTestoSbarrato(elemento){
            elemento.done = true;
        }
    }
})