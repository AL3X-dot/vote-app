import { createRouter, createWebHistory } from 'vue-router'
import Create from '../components/create/Create'
import CreatedRoom from '../components/create/CreatedRoom'
import Join from '../components/join/Join'
import JoinedRoom from '../components/join/JoinedRoom'
import Results from '../components/Results'
import MainSection from '../components/MainSection'
const routes = [{
        path: '/',
        component: MainSection
    },
    {
        path: '/create',
        component: Create
    },
    {
        path: '/createdRoom',
        component: CreatedRoom,
    },
    {
        path: '/join',
        component: Join
    },
    {
        path: '/joinedRoom',
        component: JoinedRoom
    },
    {
        path: '/results',
        component: Results
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

export default router