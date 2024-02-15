<template>
    <form>
        <select class="select_days">
            <option 
                v-for="(elem, ind) in days"
                :value="elem"
            > 
            {{ elem }}
            </option>
        </select>
        <select class="select_priority">
            <option :value="true">Важный</option>
            <option :value="false">Не важный</option>
        </select>
        <input class="title_todo"/>
        <input class="submit_btn" type="submit"/>
    </form>
</template>

<script>
    export default {
        data(){
            return{
                days: ['ПН','ВТ',"СР","ЧТ","ПТ","СБ","ВС"]
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
        padding: 15px;
        margin: 60px;
        gap: 25px
    }
    .select_days{
        grid-area: SD;
        padding: 15px;
    }
    .select_priority{
        grid-area: SP;
        padding: 15px;
    }
    .submit_btn{
        grid-area: SB;
        padding: 15px;
    }
    .title_todo{
        grid-area: TD;
        padding: 15px;
    }
</style>