
import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Component } from "react"


export default class Footer extends Component{

handleOnChange = (event)=>{
    console.log(event.target.value);
    const {allCheckTodo} = this.props;
    allCheckTodo(event.target.checked)
    
}

render(){
    const {todos} = this.props;
    const total =todos.length;
    const doneCount = todos.reduce((sum, todo)=>{return sum + (todo.done? 1 : 0)}, 0);
    console.log(doneCount);
    return (
<ListItem
disablePadding
>
<ListItemButton dense>
    <input type="checkbox" onChange={this.handleOnChange} 
        edge="start"
        checked={total === doneCount && doneCount > 0 ? true : false}
    />
    <ListItemText />
</ListItemButton>

<label>Checked {doneCount} / Total {total}</label>

</ListItem>
    )
}


}