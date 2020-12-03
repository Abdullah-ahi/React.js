import { createAction } from 'redux-actions';

export const author = createAction('[Chats] author');
export const load = createAction('[Chats] load');
export const send = createAction('[Chats] Send');
export const add = createAction('[Chats] Add');
export const del = createAction('[Chats] Delete');