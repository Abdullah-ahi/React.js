import { handleActions } from 'redux-actions';
import { Map, fromJS } from 'immutable';
import { load, send, author, add, del } from 'actions/chats'

const initialState = new Map({
    loading: '',
    entries: new Map()
})

export const chatsReducer =  handleActions({
    [load]: (state, action) => {
        return state.set('entries', fromJS({
            '1':{
                id: 1,
                messages: [
                    {text: 'Hello from chat № 1', author: 'Bot'},
                ],
                name: 'Chat 1'
            },
            '2':{
                id: 2,
                messages: [
                    {text: 'Hello from chat № 2', author: 'Bot'},
                ],
                name: 'Chat 2'
            },
            '3':{
                id: 3,
                messages: [
                    {text: 'Hello from chat № 3', author: 'Bot'},
                ],
                name: 'Chat 3'
            }
    }))
    }, //state = prevState
    [send]: (state, action) => {
        const { chatId, ...message } = action.payload
        return state.mergeIn(['entries', chatId, 'messages'], message)
    },
    [author]: (state, action) => {
        return state.set('loading', prompt('Введите имя: '))
    },
    [add]: (state, action) => {
        const { name, chatId  } = action.payload;
        console.log(chatId)

        return state.setIn(['entries', ''+chatId], fromJS({
            id: chatId,
            messages: [{text: `Hello from chat № ${chatId}`, author: 'Bot'},],
            name,
        }))
    },
    [del]: (state, action) => {
        const { chatId } = action.payload
        return state.set('loading', chatId, '')
    }
}, initialState)