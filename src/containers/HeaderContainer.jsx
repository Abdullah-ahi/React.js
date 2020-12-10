import React, { PureComponent } from 'react';
import { Header } from 'components/Header'

import { connect } from 'react-redux';
import { author } from 'actions/chats'

class HeaderContainer extends PureComponent{

    render(){
        const { author, regAuthor } = this.props
        return (
            <Header author={author} askAuthor = {regAuthor}/>
        )
    }
}

function mapStateToProps(state, ownProps){
    const author = state.chats.get('loading')
    return {
        author,
    }

}

function mapDispatchToProps(dispatch){
    return {
        regAuthor: () => dispatch(author())
    }
}

export const HeaderRedux = connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)