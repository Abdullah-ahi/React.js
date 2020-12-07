import { createStore, applyMiddleware } from 'redux';
import { initReducer } from 'reducers';

import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk'

import { logger } from 'middlewares/logger';
import { flashing } from 'middlewares/ChatFlashing'

export const history = createBrowserHistory();

export const store = createStore(
    initReducer(history), 
    applyMiddleware(logger, flashing, routerMiddleware(history), thunk)
    );