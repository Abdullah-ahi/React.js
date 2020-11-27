import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { Messenger } from 'components/Messenger';
import { load, send } from 'actions/chats'

class MessengerContainer extends PureComponent {

    componentDidMount(){
        const { loadChats } = this.props;
        loadChats();
    }
    componentDidUpdate(){
        const { messages, match } = this.props
        if (match.params.id){
            if (messages.length){
                const { author } = messages[messages.length - 1];
                if (author !== 'Bot'){
                    setTimeout(() => {
                        this.handleMessageSend({author: 'Bot', text: `Hello ${messages[messages.length - 1].author}! The bot is conected. I don't understand you`})
                    }, 1000)
                }
            }
        }
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
    render(){
        const { chats, messages } = this.props;
        return(
            <Messenger SendMessage={this.handleMessageSend} messages={messages} chats={chats}/>
        )
    }
}

function mapStateToProps(state, ownProps){
    const chats = state.chats.get('entries'); //Пишется "get('entries')", потому что state является объектом Map();
    const { match } = ownProps;

    let messages = null;
    if (match && chats.has(match.params.id)){
        messages = chats.getIn([match.params.id, 'messages']).toJS()
    }

    return {
        chats: chats.map((entry) => ({name: entry.get('name'), link: `/chats/${entry.get('id')}`})).toList().toJS(),
        messages,
        chatId: match ? match.params.id : null,
    }
}

function mapDispatchToProps(dispatch){
    return {
        loadChats: () => dispatch(load()),
        SendMessage: (message) => dispatch(send(message))
    }
}

export const MessengerRedux = connect(mapStateToProps, mapDispatchToProps)(MessengerContainer)
