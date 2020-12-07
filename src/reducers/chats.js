import { handleActions } from 'redux-actions';
import { Map, fromJS } from 'immutable';
import { load, send, author, add, removeChat } from 'actions/chats'

const initialState = new Map({
    loading: '',
    entries: new Map()
})

export const chatsReducer =  handleActions({
    [load]: (state, action) => {
        const entries = action.payload.reduce((acc, item) => {
            acc[item._id] = {...item, timestamp: new Date()}

            return acc;
        }, {})
        return state.set('entries', fromJS(entries))
    }, //state = prevState
    [send]: (state, action) => {
        const { chatId, ...message } = action.payload
        return state
        .mergeIn(['entries', chatId, 'messages'], message)
        
    },
    [author]: (state, action) => {
        return state.set('loading', prompt('Введите имя: '))
    },
    [add]: (state, action) => {
        const { _id} = action.payload;

        return state.setIn(['entries', _id], fromJS({...action.payload, timestamp: new Date()}))
    },
    [removeChat]: (state, action) => {
        state.removeIn(['entries', action.payload]);

    }
}, initialState)