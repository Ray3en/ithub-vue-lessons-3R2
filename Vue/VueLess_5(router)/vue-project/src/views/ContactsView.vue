<template>
    <h2>Contact view!</h2>
    <ul>
        <router-link to="/contacts/email">
            <li>Email</li>
        </router-link>
        <router-link to="/contacts/phone">
            <li>Phone</li>
        </router-link>
    </ul>
    <router-view></router-view>
</template>

<script>
    import { RouterView, RouterLink } from 'vue-router';
    export default {
       data(){
        return{
            phone: 20984,
            email: 'RRR@rrr.com'
        }
       }
    }
</script>

Задача: сформировать две модельки 
phone и email с произвольными данными
и передать children-компонентам 
Заменить их текстовое значение почты и номера на значение модели