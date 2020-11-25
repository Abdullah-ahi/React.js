import React, { Component } from 'react';
import './Header.css'

import { Link } from 'react-router-dom';
import ListItemText from '@material-ui/core/ListItemText';

export class Header extends Component {
    render(){
        return(
            <div className="messenger-header">
                <Link to="/addChat">
                    <ListItemText primary = 'Add Chat'></ListItemText>
                </Link>
                <Link to="/profile">
                    <ListItemText primary = 'Profile'></ListItemText>
                </Link>
            </div>
        )
    }
}