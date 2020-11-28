import React, { Component } from 'react';
import './Header.css'
import { Profile } from 'pages/profile'

import { Link } from 'react-router-dom';
import ListItemText from '@material-ui/core/ListItemText';

export class Header extends Component {
    render(){
        const { author, askAuthor } = this.props
        return(
            <div className="messenger-header">
                <Link to="/addChat">
                    <ListItemText primary = 'Add Chat'></ListItemText>
                </Link>
                <div>
                    <input onClick={author ? ()=> {return} : askAuthor} className="sign-in" type="submit" value={author ? author : 'Sign in'}/>
                </div>
                <Link to="/profile">
                    <ListItemText primary = 'Profile'></ListItemText>
                </Link>
            </div>
        )
    }
}