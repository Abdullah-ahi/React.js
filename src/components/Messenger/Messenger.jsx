import './Messenger.css'

import React, { Component } from 'react';

import { Header } from '../Header';
import { ChatList } from '../ChatList';
import {  MessageForm  } from '../MessageForm'
import {  MessagesList  } from '../MessagesList';

export class Messenger extends Component{
    render(){
        const { chats, messages, SendMessage, author, askAuthor } = this.props
        return (
            <div className="messenger">
                <Header askAuthor={askAuthor} author={author}/>
                <div className="messages-block">
                    <ChatList chats={chats}/>
                    {messages ? <MessagesList items={messages}/> : 'Please, choose the chat to talk'}
                </div>
                {messages && <MessageForm Prop_author={author} onSend={SendMessage}/>}
            </div>
        )
    }
}