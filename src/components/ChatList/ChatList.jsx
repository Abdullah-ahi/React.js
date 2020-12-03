import './ChatList.css'

import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';

import { Link, Redirect } from 'react-router-dom';
export class ChatList extends Component {
    render(){
        const { chats, addChat } = this.props;
        return (
            <div className="chatList">
                <List>
                    {chats.map((chat, idx) => 
                    <ListItem key={idx} className="chat" data-id={chat.id}>
                        <Link to={chat.link}>
                            <ListItemText primary = {chat.name}></ListItemText>
                        </Link>
                    </ListItem>)}
                    <Button onClick = {addChat}>
                        <ListItemText primary= "+ Добавить чат"></ListItemText>
                    </Button>
                </List>
            </div>
        )
    }
}

{/* <ListItem key={idx} className="chat" data-id={chat.id}>
    <Link to={chat.link}>
        <ListItemText primary={chat.name}></ListItemText>
    </Link>
</ListItem> */}