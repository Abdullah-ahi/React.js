import React, { Component } from 'react';
import './Header.css'

import { Link } from 'react-router-dom';
import ListItemText from '@material-ui/core/ListItemText';

export class Header extends Component {
    render(){
        const { author, askAuthor } = this.props
        return(
            <div className="messenger-header">
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