<template>
    <div :style="styleTodo" class="todo_item">
        {{ title }}
        <button class="x_todo">X</button>
    </div>
    
</template>

<script>
    export default {
        props: {
            title: String,
            priority: Boolean,
            id: Number
        },
        computed: {
            styleTodo(){
                return {
                    backgroundColor: this.priority ? 'red' : 'green'
                }
            }
        }
    }
</script>


<style>
    .todo_item{
        position: relative;
        padding: 5px 15px;
        min-width: 250px;
        font-size: 20px;
    }
</style>