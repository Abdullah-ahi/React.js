// import './ChatList.css'

import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Remove'

import { Link, Redirect } from 'react-router-dom';

import moment from 'moment'

moment.locale('ru')

export class ChatList extends Component {

    handleChatRemove = (chatId) => () => {
        const { removeChat } = this.props
        removeChat(chatId)
    }
    render(){
        const { chats, addChat } = this.props;
        return (
            <div className="chatList">
                <List>
                    {chats.map((chat, idx) => 
                    <ListItem key={idx} className="chat" data-id={chat._id}>
                        <Link to={chat.link}>
                        <Fab variant="round" color="primary" onClick={this.handleChatRemove(chat._id)} className='delete-button'><DeleteIcon/></Fab>
                            <ListItemText className='chat-name' primary = {`${chat.name}`}></ListItemText>
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

// [${moment(chat.timestamp).fromNow()}] 