import { createStore, applyMiddleware } from 'redux';
import { initReducer } from 'reducers';

import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import { logger } from 'middlewares/logger';
import { bot } from 'middlewares/bot';
import { flashing } from 'middlewares/ChatFlashing'

export const history = createBrowserHistory();

export const store = createStore(initReducer(history), applyMiddleware(logger, bot, flashing, routerMiddleware(history)));