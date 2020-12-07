import './Messenger.css'

import React, { Component } from 'react';

import { HeaderRedux } from 'containers/HeaderContainer';
import { ChatList } from '../ChatList';
import {  MessageForm  } from '../MessageForm'
import {  MessagesList  } from '../MessagesList';

export class Messenger extends Component{
    render(){
        const { chats, messages, SendMessage, author, addChat, removeChat} = this.props
        return (
            <div className="messenger">
                <HeaderRedux/>
                <div className="messages-block">
                    <ChatList removeChat={removeChat} addChat={addChat} chats={chats}/>
                    {messages ? <MessagesList items={messages}/> : 'Please, choose the chat to talk'}
                </div>
                {messages && <MessageForm Prop_author={author} onSend={SendMessage}/>}
            </div>
        )
    }
}