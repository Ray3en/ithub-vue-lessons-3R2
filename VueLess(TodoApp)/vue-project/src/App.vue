<script>
import AddForm from './components/AddForm.vue'
import DayList from './components/DayList.vue'

export default {
    components: {
      AddForm,
      DayList
    },
    data(){
      return{
        todos: 
              [
                  {
                      id_day: 1, 
                      day_title: 'ПД', 
                      day_todos: [
                          {id: 1, title: 'Помыть руки', priority: true},
                          {id: 2, title: 'Помыть', priority: false},
                          {id: 3, title: 'Руки', priority: true}
                      ]
                  },
                  {
                      id_day: 5, 
                      day_title: 'ПТ', 
                      day_todos: [
                          {id: 4, title: 'Изучить что-то', priority: true},
                          {id: 5, title: 'Изучить', priority: false},
                          {id: 6, title: 'Что-то', priority: false},
                      ]
                  },
              ]
      }
    }
}

</script>

<template>
  <add-form></add-form>
  <day-list :todos="todos"></day-list>
</template>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.x_todo, .x_day{
  position: absolute;
  top: -10px;
  right: -10px;
  border: 2px solid black;
  background-color: red;
  border-radius: 50%;
  font-weight: bold;
  width: 20px;
  height: 20px;
  opacity: 0;
}

.day_item:hover .x_day {
  opacity: 1;
}

.todo_item:hover > .x_todo {
  opacity: 1;
}

.todo_item:hover ~ .x_day {
  opacity: 0;
}





</style>