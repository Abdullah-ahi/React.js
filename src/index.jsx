import 'assets/global.css';

import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { routes } from './routes';
import {  Provider } from 'react-redux';
import { store, history } from './store';
import { ConnectedRouter } from 'connected-react-router';

ReactDom.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <BrowserRouter>
                <Switch>
                    {routes.map((route, idx)=> <Route key={idx} {...route}/>)}
                </Switch>
            </BrowserRouter>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
)

// componentWillMount(){}
// componentDidMount(){}
// componentDidUpdate(){}
// componentWillUnmount(){}