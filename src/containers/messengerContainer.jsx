import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { Messenger } from 'components/Messenger';
import { load, send, add, del} from 'actions/chats';
import { push } from 'connected-react-router';

class MessengerContainer extends PureComponent {

    componentDidMount(){
        const { loadChats } = this.props;
        loadChats();
    }

    handleMessageSend = (message) => {
        if (message.text === ''){
            return
        }else {
            const { SendMessage, chatId } = this.props;

            SendMessage({
                ...message,
                chatId
            })
        }
    }

    handleChatAdd = () => {
        const { addChat, newChatId, redirect } = this.props
        const chatName = prompt('Введите имя чата: ')
        if (!chatName.length){
            return
        }else{
            addChat({name: chatName, chatId: newChatId});
            redirect(newChatId);
        }
    }
    deleteChat = () => {
        const { lastId, chatDel } = this.props
        chatDel(lastId)
    }
    render(){
        const { chats, messages, author} = this.props;
        return(
            <Messenger  chatDel = {this.deleteChat} addChat={this.handleChatAdd} SendMessage={this.handleMessageSend} messages={messages} chats={chats} author={author}/>
        )
    }
}

function mapStateToProps(state, ownProps){
    const chats = state.chats.get('entries'); //Пишется "get('entries')", потому что state является объектом Map();
    const { match } = ownProps;
    const author = state.chats.get('loading')

    const lastId = state.chats.get('entries').size ? state.chats.get('entries').last().get('id') : 0;
    const newChatId = +lastId + 1;

    let messages = null;

    if (match && chats.has(match.params.id)){
        messages = chats.getIn([match.params.id, 'messages']).toJS()
    }

    return {
        author,
        chats: chats.map((entry) => ({id: entry.get('id'), name: entry.get('name'), link: `/chats/${entry.get('id')}`})).toList().toJS(),
        messages,
        chatId: match ? match.params.id : null,
        newChatId
    }
}

function mapDispatchToProps(dispatch){
    return {
        loadChats: () => dispatch(load()),
        SendMessage: (message) => dispatch(send(message)),
        addChat: (chat) => dispatch(add(chat)),
        redirect: (id) => dispatch(push(`/chats/${id}`)),
        chatDel: (id) => dispatch(del({chatId: id}))
    }
}

export const MessengerRedux = connect(mapStateToProps, mapDispatchToProps)(MessengerContainer)
