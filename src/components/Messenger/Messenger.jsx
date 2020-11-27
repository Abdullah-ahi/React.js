import './Messenger.css'

import React, { Component } from 'react';

import { Header } from '../Header';
import { ChatList } from '../ChatList';
import {  MessageForm  } from '../MessageForm'
import {  MessagesList  } from '../MessagesList';

export class Messenger extends Component{
    render(){
        const { chats, messages, SendMessage } = this.props
        return (
            <div className="messenger">
                <Header/>
                <div className="messages-block">
                    <ChatList chats={chats}/>
                    {messages ? <MessagesList items={messages}/> : 'Please, choose the chat to talk'}
                </div>
                {messages && <MessageForm onSend={SendMessage}/>}
            </div>
        )
    }
}