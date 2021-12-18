import { Component } from "react";
import Liste from "./components/body/list";
import Footer from "./components/footer";
import Header from "./components/header";


export default class App extends Component{

    state = {
        todos: [
            { 'id': 1, 'name': 'yasin', 'done': true },
            { 'id': 2, 'name': 'zeynep', 'done': true },
            { 'id': 3, 'name': 'mustafa', 'done': false },
            { 'id': 4, 'name': 'tuba', 'done': false },
            { 'id': 5, 'name': 'irfan', 'done': true }
        ]
    }
deleteTodo = (id)=>{
    console.log("app"+id);
    const {todos} = this.state;
    const newTodo = todos.filter(todo=>todo.id !== id);
    console.log(newTodo);
    this.setState({
        todos : newTodo
    })
}
addTodo = (todo)=>{
    const {todos} = this.state;
    const newtodos = [todo, ...todos];
    this.setState({
            todos: newtodos
    })
}

updateTodo = (id)=>{
const {todos} = this.state;
const newTodos = todos.map(todo=>{
    if(todo.id === id) return {...todo, done:!todo.done}
    else return todo
})
console.log(newTodos);
this.setState({
    todos: newTodos
})
}

allCheckTodo = (done)=>{
    console.log(done);
    const {todos} = this.state;
    const newTodos = todos.map((todo)=>{
        return {...todo, done}
    })
    this.setState(
        {
            todos: newTodos
        }
    )
}

    render(){
        const {todos} = this.state;
        return (
        <div>
            <Header addTodo={this.addTodo}/>
            <Liste todos={todos} deleteTodo = {this.deleteTodo} updateTodo={this.updateTodo}/>
            <Footer todos={todos} allCheckTodo = {this.allCheckTodo}></Footer>
        </div>
        )
    }
}


