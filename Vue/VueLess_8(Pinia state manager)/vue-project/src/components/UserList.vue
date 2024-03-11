<template>  
    <div>
        <h2>User List</h2>
        <input v-model="name" placeholder="name"/>
        <input v-model="age" placeholder="age"/>
        <button @click="addHandle">Add to list</button>
    </div>
    <div>
        <div v-for="user in userStore.users" :key="user.id">
            <h3>{{ user.name }}</h3>
            <p>{{ user.age }}</p>
            <button @click="removeHandle(user.id)">delete user</button>
        </div>
    </div>
</template>

<script setup>
import { useUserStore } from '@/stores/UsersStore';
import {ref} from 'vue'

const userStore = useUserStore()

let name = ref('')
let age = ref('')

const addHandle = () => {
    userStore.addNewUser({name: name.value, age: age.value})
    age.value = ''
    name.value = ''
}

const removeHandle = (id) => {
    userStore.removeUser(id)
}


</script>