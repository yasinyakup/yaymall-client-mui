import { Button, TextField } from "@mui/material";
import { Component } from "react";
import { v4 as uuidv4 } from 'uuid';

export default class Header extends Component {

  
    handleKeyUp = (event)=>{
        if(event.keyCode ===13 && event.target.value.trim()!== ''){
        console.log(event.target.value);
        this.props.addTodo({'id':uuidv4(), 'name':event.target.value, 'done':true});
        }
    }
    render() {
        return (
            <div>
                <TextField
                onKeyUp = {this.handleKeyUp}
                    required
                    id="outlined-required"
                    label="Required"
                />
                <Button color='primary' variant='outlined'>Ekle</Button>
            </div>
        )
    }
}