import { List } from "@mui/material";
import { Component } from "react";
import Item from "../item";

export default class Liste extends Component {

    render() {
        const { todos, deleteTodo , updateTodo} = this.props;
        return (
            todos.map((todo) => {
                return (
                    <List key={todo.id}>
                        <Item  todo={todo} deleteTodo = {deleteTodo} updateTodo={updateTodo}></Item>
                    </List>
                )
            }
            )
        )
    }
}