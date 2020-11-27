import { createStore } from 'redux';
import { createAction } from 'redux-actions';

export const load = createAction('[Chats] load');
export const send = createAction('[Chats] Send')