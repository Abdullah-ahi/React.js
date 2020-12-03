import { MessengerRedux } from 'containers/messengerContainer';
import { aboutPage } from './pages/aboutPage';
import { Profile } from 'pages/profile';

export const routes = [
    {
        path: '/',
        exact: true,
        component: MessengerRedux,
    },
    {
        path: '/about',
        exact: true,
        component: aboutPage,
    },
    {
        path: '/chats/:id',
        exact: true,
        component: MessengerRedux,
    },
    {
        path: '/profile',
        exact: true,
        component: Profile,
    }
]