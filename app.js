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
            // console.log(this.newTodo); //'this' refers to the instance. So if you want to access the properties inside 'this', you do DOT notation
            this.todos.push({
                title:this.newTodo,
                done:false
            });
            this.newTodo = '';
        },
        removeTodo(todo) {
            const todoIndex = this.todos.indexOf(todo);
            this.todos.splice(todoIndex, 1); //Remove 1 from array
            this.message = 'Good job!';

            
        },

        allDone() {
            this.todos.forEach(todo => {
                todo.done = true;
            });
        }
    }
})

