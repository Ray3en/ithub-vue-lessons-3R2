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
                      day_title: 'ПН', 
                      day_todos: [
                          {id: 1, title: 'Помыть руки', priority: true},
                          {id: 2, title: 'Помыть', priority: true},
                          {id: 3, title: 'Руки', priority: false}
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
    },
    methods: {
      deleteDay(idDay){
        this.todos = this.todos.filter(el => el.id_day !== idDay)
      },
      deleteTask(idDay, idTask){
        let findDay = this.todos.find(el => el.id_day === idDay)
        findDay.day_todos =  findDay.day_todos.filter(el => el.id !== idTask)
        if (!findDay.day_todos.length){
          this.deleteDay(idDay)
        }
      },
      addNewTask(day, title, priority){
        let days = ['ПН','ВТ',"СР","ЧТ","ПТ","СБ","ВС"]
        let newTask = {
          id: Date.now(),
          title,
          priority
        }
        let findDay = this.todos.find(el => el.day_title === day)
        if (findDay){
          findDay.day_todos.push(newTask)
          findDay.day_todos.sort((a,b) => b.priority - a.priority)
        } else {
          let newDay = {
            id_day: days.indexOf(day)+1,
            day_title: day,
            day_todos: [newTask]
          }
          this.todos.push(newDay)
          this.todos.sort((a,b) => a.id_day - b.id_day)
        }
      }
    }
}

</script>

<template>
  <div class="container">
    <add-form @addNewTask="addNewTask"></add-form>
    <day-list @deleteTask="deleteTask" @deleteDay="deleteDay" :todos="todos"></day-list>
  </div>
</template>

<style>
body{
  min-height: 100vh;
  background-color: #1ABC9C;
}
.container{
  margin-top: 50px;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
}
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