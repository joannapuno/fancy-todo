// el means element
//data is anything you want to show on your page!

const app = new Vue({
    el: '#app',
    data: {
        title: "What to do today?",
        message: '',
        newTodo:'',
        todos: [],


    },
    methods: {
        addTodo() {
            this.todos.push({
                title:this.newTodo,
                done:false
            });
            this.newTodo = '';
        },
        removeTodo(todo) {
            const todoIndex = this.todos.indexOf(todo);
            this.todos.splice(todoIndex, 1); //Remove 1 from array    
        },

        allDone() {
            this.todos.forEach(todo => {
                todo.done = true;
                this.message = 'Nice! You\'ve got everything done!'; 
            });
        }
    }
})

