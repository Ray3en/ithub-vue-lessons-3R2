<template>
    <div>
        User List
    </div>
    <div>
        <button @click="deleteFirstUser">Delete first user</button>
        <button @click="notEvenUsers">Not even users</button>
        <button @click="addNewUser">Add new user</button>
        <h3 v-for="user in users" :key="user.id" @dblclick="deleteById(user.id)">
            {{ user.name }}
        </h3>
    </div>
</template>
Задание 1. Реализуйте кнопку которая будет удалять первого сотрудника
Задание 2. Реализуйте еще одну кнопку Not even users, которая отфильтрует массив по нечетным элементам
Задание 3. Реализуйте метод, который будет удалять юзера по ID. 
Удаление должно формироваться после двойного нажатия на юзера.
Задание 4. Реализовать добавление нового пользователя через новую кнопку.
По нажатию должно вызываться модальное окно, где необходимо будет ввести имя нового юзера
ID должно формироваться атвоматически

<script>    
    export default {
        data(){
            return {
                users: [
                    {id: 1, name: 'Alex'},
                    {id: 2, name: 'Steven'},
                    {id: 3, name: 'Neena'},
                    {id: 4, name: 'John'},
                    {id: 5, name: 'Greeca'},
                ]
            }
        },
        methods: {
            deleteFirstUser(){
                this.users.shift()
            },
            notEvenUsers(){
                this.users = this.users.filter(elem => elem.id % 2 != 0)
            },
            deleteById(id){
                this.users = this.users.filter(elem => elem.id !== id)
            },
            addNewUser(){
                let newUser = {
                    id: Date.now(),
                    name: prompt()
                }
                this.users.push(newUser)
            }
        }
    }

</script>