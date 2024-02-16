<template>
    <div class="days_wrapper">
        <div v-for="day in todos" :key="day.id_day" class="day_item">
            <div class="day_title">
                <p>{{day.day_title}}</p>
            </div>
            <div class="todos_wrapper">
                <todo-item 
                    v-for="todo in day.day_todos" :key="todo.id"
                    :title="todo.title"
                    :id="todo.id"
                    :id_day="day.id_day"
                    :priority="todo.priority"
                    @deleteTask="deleteTask"
                >
                </todo-item>
                <button @click="deleteDay(day.id_day)" class="x_day">X</button>
            </div>
        </div>
    </div>
</template>

<script>
import TodoItem from './TodoItem.vue';

    export default {
        components: {
            TodoItem
        },
        props: {
            todos: Array
        },
        emits: ['deleteDay','deleteTask'],
        methods: {
            deleteDay(idDay){
                this.$emit('deleteDay', idDay)
            },
            deleteTask(idDay, idTask){
                this.$emit('deleteTask', idDay, idTask)
            }
        }
    }
</script>

<style>
    .days_wrapper{
        margin-top: 40px;
        display: flex;
        gap: 35px;
        flex-direction: column;
    }

    .day_item{
        position: relative;
        display: flex;
        gap: 15px;
        border-radius: 23px;
        background-color: #ECF0F1;
    }
    .todos_wrapper{
        display: grid;
        gap: 10px;
        padding: 15px 25px;
        grid-template-columns: repeat(3, 1fr);
    }
    .day_title{
        background-color: rgb(52, 73, 94);
        width: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 23px 0px 0px 23px;
        color: white;
        font-size: 30px;
    }
</style>