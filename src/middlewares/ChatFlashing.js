import { send } from 'actions/chats'

export function flashing(store){
    return function(next){
        return function (action){
            if (action.type === send.toString()){
                const { chatId } = action.payload
                const chats = Array.from(document.querySelectorAll('.chat'))

                setTimeout(() => {
                    const find = chats.find(chat => chat.dataset.id == chatId)
                    find.style.backgroundColor = '#00FFFF';
                    setTimeout(() => {
                        find.style.backgroundColor = '#fff'
                    }, 500)
                }, 0)
            }

            return next(action)
        }
    }
}