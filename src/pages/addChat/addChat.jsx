import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';

import { Link } from 'react-router-dom';
import ListItemText from '@material-ui/core/ListItemText';

import './addChat.css'

export class addChat extends Component {

    state = {
        newChatName: '',
    }

    handleInputChange = (event) => {
        const fieldName = event.target.name;
        this.setState({
            [fieldName]: event.target.value,
        })
    }

    handleCreateChat = () => {
        console.log(this.state.newChatName);
    }
    render(){
        return (
            <div>
                <Link to="/">
                    <ListItemText primary = 'Head'/>
                </Link>
                <TextField label="Chat name" name="newChatName" className="newChatName" onChange={this.handleInputChange} type="text"/>
                <Fab className='create-new-chat' variant="extended" color="primary" onClick={this.handleCreateChat}>Create chat</Fab>
            </div>
        )
    }
}