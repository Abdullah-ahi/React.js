import './MessageForm.css';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send'
export class MessageForm extends Component{
    state = {
        author: '',
        text: '',
    }

    static propTypes = {
        onSend: PropTypes.func,
    }

    handleMessageSend = () => {
        const { onSend } = this.props;

        if (typeof(onSend) === 'function'){
            onSend(this.state);

            this.setState({text: ''});
        }
    }

    handleInputChange = (event) => {
        const fieldName = event.target.name;

        this.setState({
            [fieldName]: event.target.value,
        })
    }

    handleEnterDown = (event) => {
        if (event.shiftKey && event.keyCode === 13){
            return
        } else if (event.keyCode === 13){
            this.handleMessageSend()
        }
    }

    render(){
        const {author, text} = this.state
        const { Prop_author } = this.props
        Prop_author ? this.state.author = Prop_author : () => {return}

        const classes = classNames('author', {
            'show': !Prop_author,
            'hide': Prop_author,
        })
        return (
            <div className="message-form">
                <TextField label="Author" name="author" className={classes} onChange={this.handleInputChange} type="text" value = {author}/>
                <TextField label="Text" name="text" className="message_text" onKeyDown = {this.handleEnterDown} onChange={this.handleInputChange} type="text" value = {text}/>
                <Fab variant="round" color="primary" onClick={this.handleMessageSend}><SendIcon/></Fab>
            </div>
        )
    }
}