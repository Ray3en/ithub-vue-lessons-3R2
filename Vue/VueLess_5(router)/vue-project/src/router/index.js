import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import ContactsView from '../views/ContactsView.vue'
import EmailContent from '../components/EmailContent.vue'
import PhoneContent from '../components/PhoneContent.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/', 
            component: HomeView, 
            alias: '/test',
        },
        {
            path: '/about/:title?', 
            component: AboutView, 
            // props: true
            props: (route) => ({
                value: route.params.value,
                title: route.params.title
            })
        },
        {
            path: '/contacts',
            component: ContactsView,
            children: [
                {
                    path: 'email',
                    component: EmailContent
                },
                {
                    path: 'phone',
                    component: PhoneContent
                },
            ]
        },
        {
            path: '/:pathMatch(.*)*', 
            component: NotFoundView
        },
    ]
})


export default router