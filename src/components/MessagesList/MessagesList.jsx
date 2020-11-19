import './MessagesList.css'

import React, { Component } from 'react';
import { Message, messageType } from '../Message';
import PropTypes from 'prop-types';

export class MessagesList extends Component{
    static propTypes = {
        items: PropTypes.arrayOf(
            PropTypes.shape(messageType)
        ),
    };
    render(){
        const { items } = this.props;
        return (
            <div className="messages-list">
                {items.map((message, idx) => <Message key={idx} {...message}/>)}
            </div>
        )
    }
}