import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { Messenger } from 'components/Messenger';
import {sendMessage, listen, createChat, removeChat} from 'actions/chats';

class MessengerContainer extends PureComponent {

    componentDidMount(){
        const { listenChats } = this.props;
        listenChats();
    }

    handleMessageSend = (message) => {
        if (message.text === ''){
            return
        }else {
            const { sendMessage, chatId } = this.props;
            sendMessage({
                ...message,
                chatId
            })
        }
    }

    handleChatAdd = () => {
        const { createChat } = this.props
        const chatName = prompt('Введите имя чата: ')
        if (!chatName.length){
            return
        }else{
            createChat({name: chatName});
        }
    }

    render(){
        const { chats, messages, author, removeChat} = this.props;
        return(
            <Messenger  removeChat = {removeChat} addChat={this.handleChatAdd} SendMessage={this.handleMessageSend} messages={messages} chats={chats} author={author}/>
        )
    }
}

function mapStateToProps(state, ownProps){
    const chats = state.chats.get('entries'); //Пишется "get('entries')", потому что state является объектом Map();
    const { match } = ownProps;
    const author = state.chats.get('loading');
    let messages = null;

    if (match && chats.has(match.params.id)){
        messages = chats.getIn([match.params.id, 'messages']).toJS()
    }

    return {
        author,
        chats: chats.sortBy((entry) => -entry.get('timestamp')).map((entry) => ({_id: entry.get('_id'), name: entry.get('name'), link: `/chats/${entry.get('_id')}`, timestamp: entry.get('timestamp')})).toList().toJS(),
        messages,
        chatId: match ? match.params.id : null,
    }
}

function mapDispatchToProps(dispatch){
    return {
        sendMessage,
        createChat,
        listenChats: () => dispatch(listen()),
        removeChat: (chatId) => dispatch(removeChat(chatId))
    }
}

export const MessengerRedux = connect(mapStateToProps, mapDispatchToProps)(MessengerContainer)
