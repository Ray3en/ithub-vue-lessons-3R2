<template>
    <div class="days_wrapper">
        <div v-for="day in todos" :key="day.id_day" class="day_item">
            <h3>{{day.day_title}}</h3>
            <div class="todos_wrapper">
                <todo-item 
                    v-for="todo in day.day_todos" :key="todo.id"
                    :title="todo.title"
                    :id="todo.id"
                    :priority="todo.priority"
                >
                </todo-item>
                <button class="x_day">X</button>
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
        }
    }
</script>

<style>
    .days_wrapper{
        display: flex;
        gap: 35px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .day_item{
        position: relative;
        padding: 15px 25px;
        display: flex;
        align-items: center;
        gap: 15px;
        border: 1px solid black;
        border-radius: 15px;
    }
    .todos_wrapper{
        display: grid;
        gap: 10px;
        grid-template-columns: repeat(3, 1fr);
    }
</style>