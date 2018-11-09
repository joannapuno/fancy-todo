const app = new Vue({
    el: '#app',
    data: {
        title: "What to do today?",
        message: '',
        newTodo:'',
        todos: [],
        errors:[],
        errorMessage: '',
       
    },
    methods: {
        addTodo() {
            this.todos.push({
                title:this.newTodo,
                done:false
            });
            this.newTodo = '';
            this.message = ''; 
            
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
        },

        checkForm: function (e) {
            if (this.newTodo === '') {
                this.errorMessage = 'Oops! You forgot to add a task!';  
            }

            else {
                this.addTodo();
                this.errorMessage = '';
            }   
              
            e.preventDefault();
          }
    }
})



