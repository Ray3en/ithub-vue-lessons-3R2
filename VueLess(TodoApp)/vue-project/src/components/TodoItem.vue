<template>
    <div :style="styleTodo" class="todo_item">
        {{ title }}
        <button @click="deleteTask" class="x_todo">X</button>
    </div>
    
</template>

<script>
    export default {
        props: {
            title: String,
            priority: Boolean,
            id: Number,
            id_day: Number,
        },
        emits: ['deleteTask'],
        computed: {
            styleTodo(){
                return {
                    backgroundColor: this.priority ? '#E74C3C' : ' #1ABC9C'
                }
            }
        },
        methods: {
            deleteTask(){
                this.$emit('deleteTask',this.id_day, this.id)
            }
        }
    }
</script>


<style>
    .todo_item{
        position: relative;
        padding: 5px 15px;
        min-width: 280px;
        font-size: 30px;
        color: white;
    }
</style>