import { Messenger } from './components/Messenger/Messenger';
import { aboutPage } from './pages/aboutPage';
import { profile } from './pages/profile';
import { addChat } from './pages/addChat/addChat'

export const routes = [
    {
        path: '/',
        exact: true,
        component: Messenger,
    },
    {
        path: '/about',
        exact: true,
        component: aboutPage,
    },
    {
        path: '/chats/:id',
        exact: true,
        component: Messenger,
    },
    {
        path: '/profile',
        exact: true,
        component: profile,
    },
    {
        path: '/addChat',
        exact: true,
        component: addChat,
    }
]