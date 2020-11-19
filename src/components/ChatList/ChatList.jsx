import { AssistantRounded } from '@material-ui/icons';
import './ChatList.css'

import React, { Component } from 'react';
export class ChatList extends Component {


    render(){
        return(
            <div className="chatList">
                <div className="own-chat"><div className="chat-logo"/><span className="chat-name">My chat</span></div>
                <div className="own-chat"><div className="chat-logo"/><span className="chat-name">My chat</span></div>
                <div className="own-chat"><div className="chat-logo"/><span className="chat-name">My chat</span></div>
            </div>
        )
    }
}