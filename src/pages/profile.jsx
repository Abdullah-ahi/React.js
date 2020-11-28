import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import ListItemText from '@material-ui/core/ListItemText';
export class  Profile extends Component{
    state = {
        author: 'sxsxs',
    }
    componentDidUpdate(){
        const { author } = this.props
    }

    render(){
        return (
            <div>
                <Link to="/">
                    <ListItemText primary = 'Head'/>
                </Link>
                <div>Profile</div>
            </div>
        )
    }
}