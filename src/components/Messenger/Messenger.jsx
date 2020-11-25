import './Messenger.css'

import React, { Component } from 'react';

import { Header } from '../Header';
import { ChatList } from '../ChatList';
import {  MessageForm  } from '../MessageForm'
import {  MessagesList  } from '../MessagesList';

export class Messenger extends Component{
    state = {
        chats: {
            '1':{
                messages: [
                    {text: 'Hello from chat № 1', author: 'Bot'},
                ],
                name: 'Chat 1'
            },
            '2':{
                messages: [
                    {text: 'Hello from chat № 2', author: 'Bot'},
                ],
                name: 'Chat 2'
            },
            '3':{
                messages: [
                    {text: 'Hello from chat № 3', author: 'Bot'},
                ],
                name: 'Chat 3'
            }
        }
    }

    componentDidUpdate(){
        if (this.messages.length){
            const { author } = this.messages[this.messages.length - 1];
            if (author !== 'Bot'){
                setTimeout(() => {
                    this.handleMessageSend({author: 'Bot', text: `Hello ${this.messages[this.messages.length - 1].author}! The bot is conected. I don't understand you`})
                }, 1000)
            }
        }
    }

    handleMessageSend = (message) => {
        if (message.text === ''){
            return
        }else{
            const { chats } = this.state;
            const { match } = this.props;

            const chat = chats[match.params.id];
            const messages = this.messages.concat(message)
            chat.messages = messages
            this.setState({
                chats: {
                    ...this.state.chats,
                    [match.params.id]: chat,
                }
            })
        }
    }
    get messages(){
        const { chats } = this.state;
        const { match } = this.props;

        let messages = null;
        if (match && chats[match.params.id]){
            messages = chats[match.params.id].messages
        }
        return messages;
    }
    render(){
        return (
            <div className="messenger">
                <Header/>
                <div className="messages-block">
                    <ChatList/>
                    {this.messages ? <MessagesList items={this.messages}/> : 'Please, choose the chat to talk'}
                </div>
                {this.messages && <MessageForm onSend={this.handleMessageSend}/>}
            </div>
        )
    }
}