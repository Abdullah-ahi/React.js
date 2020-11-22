import { Messenger } from './components/Messenger';
import { aboutPage } from './pages/aboutPage';

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
    }
]