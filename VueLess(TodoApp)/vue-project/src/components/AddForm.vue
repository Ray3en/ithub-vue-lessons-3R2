<template>
    <form @submit.prevent="addNewTask">
        <select v-model="day" class="select_days">
            <option 
                v-for="(elem, ind) in days"
                :value="elem"
            > 
            {{ elem }}
            </option>
        </select>
        <select v-model="priority" class="select_priority">
            <option :value="true">Важный</option>
            <option :value="false">Не важный</option>
        </select>
        <input v-model="title" class="title_todo"/>
        <input class="submit_btn" type="submit" value="Добавить"/>
    </form>
</template>

<script>
    export default {
        data(){
            return{
                days: ['ПН','ВТ',"СР","ЧТ","ПТ","СБ","ВС"],
                day: '',
                priority: '',
                title: ''
            }
        },
        emits: ['addNewTask'],
        methods: {
            addNewTask(){
                this.$emit('addNewTask', this.day, this.title, this.priority)
            }
        }
    }
</script>

<style>
    form{
        display: grid;
        grid-template-columns: repeat(4, 200px);
        grid-template-areas: 
                    'SD SP . .'
                    'TD TD . SB';

        justify-content: center;
        padding: 33px 62px;
        gap: 25px;
        background-color: #ECF0F1;
        border-radius: 23px;
    }
    .select_days{
        grid-area: SD;
        padding: 13px;
    }
    .select_priority{
        grid-area: SP;
        padding: 13px;
    }
    .submit_btn{
        grid-area: SB;
        padding: 10px 25px;
        background-color: #1ABC9C;
        color: white;
        border-radius: 26px;
        border: 1px solid black;
        font-size: 20px;
    }
    .title_todo{
        grid-area: TD;
        padding: 13px;
    }
</style>