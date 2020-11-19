import './Messenger.css'

import React, { Component } from 'react';

import { Header } from '../Header';
import { ChatList } from '../ChatList';
import {  MessageForm  } from '../MessageForm'
import {  MessagesList  } from '../MessagesList';
export class Messenger extends Component{
    state = {
        messages: [
            
        ]
    }

    componentDidUpdate(){
        const { messages } = this.state
        if (messages[messages.length - 1].author !== 'Bot'){
            setTimeout(() => {
                this.setState({
                messages: messages.concat({author: 'Bot', text: `Hello ${messages[messages.length - 1].author}! The bot is conected. I don't understand you`})
                })
            }, 1000)
        }
    }

    handleMessageSend = (message) => {
        if (message.text === ''){
            return
        }else{
            this.setState(({messages}) => ({messages: messages.concat([message])}))
        }
    }
    render(){
        const { messages } = this.state;
        return (
            <div className="messenger">
                <Header/>
                <div className="messages-block">
                    <ChatList/>
                    <MessagesList items={messages}/>
                </div>
                <MessageForm onSend={this.handleMessageSend}/>
            </div>
        )
    }
}