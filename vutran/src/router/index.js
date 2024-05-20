import {createRouter, createWebHistory} from 'vue-router'

import IndexData from '../components/IndexData'
import ExerciseOne from '../components/ExerciseOne'

const routes = [
    {path: '/exercise-2', component: IndexData},
    {path: '/exercise-1', component: ExerciseOne}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router