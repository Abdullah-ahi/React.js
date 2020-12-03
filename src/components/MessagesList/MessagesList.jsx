import './MessagesList.css'

import React, { Component } from 'react';
import { Message, messageType } from '../Message';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

export class MessagesList extends Component{
    static propTypes = {
        items: PropTypes.arrayOf(
            PropTypes.shape(messageType)
        ),
    };
    render(){
        const { items, chatDel} = this.props;
        return (
            <div className="messages-list">
                <Button onClick={chatDel} variant="contained" color="primary" className="delete-chat">Delete chat</Button>
                {items.map((message, idx) => <Message key={idx} {...message}/>)}
            </div>
        )
    }
}