import { Delete } from "@mui/icons-material";
import { IconButton, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { pink } from "@mui/material/colors";
import { Component } from "react";

export default class Item extends Component {


    state = { mouse: false }
    handleOnChange = (id) => {
        return ()=>{
            console.log(id);
        const {updateTodo} = this.props;
        updateTodo(id)
        }


    }
    handleMouseEvent = (flag) => {
        return () => {
            this.setState({
                mouse: flag
            })
        }
    }
    handleDelete = (id)=>{
        
        const {deleteTodo} = this.props;
        return ()=>
        {
            console.log(id);
            deleteTodo(id);
        }
    }

    render() {
        const { id, name, done } = this.props.todo;
        const { mouse } = this.state
        return (
            <ListItem onMouseEnter={this.handleMouseEvent(true)} onMouseLeave={this.handleMouseEvent(false)}
                key={id}
                disablePadding
            >
                <ListItemButton dense>
                    <input type="checkbox" onChange={this.handleOnChange(id)} 
                        edge="start"
                        checked={done}
                    />
                    <ListItemText primary={name} />
                </ListItemButton>

                <IconButton style={{ display: mouse ? 'block' : 'none' }} onClick = {this.handleDelete(id)}>
                    <Delete sx={{ color: pink[500] }} />
                </IconButton>

            </ListItem>
        )
    }

}