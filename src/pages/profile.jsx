import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import ListItemText from '@material-ui/core/ListItemText';
export class  Profile extends Component{
    state = {
        author: '',
    }

    render(){
        const { author, askAuthor } = this.props
        return (
            <div>Profile</div>
        )
    }
}