import './ChatList.css'

import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom'; 
export class ChatList extends Component {


    render(){
        return(
            <div className="chatList">
                <List>
                    <ListItem>
                        <Link to="/chats/1">
                            <ListItemText primary = 'Chat1'></ListItemText>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/chats/2">
                            <ListItemText primary = 'Chat2'></ListItemText>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/chats/3">
                            <ListItemText primary = 'Chat3'></ListItemText>
                        </Link>
                    </ListItem>
                </List>
            </div>
        )
    }
}