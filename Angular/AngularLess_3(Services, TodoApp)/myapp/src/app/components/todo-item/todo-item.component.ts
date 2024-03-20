import { Component, Input, inject } from '@angular/core';
import { TodoListService } from '../../services/todo-list.service';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html'
})
export class TodoItemComponent {
  @Input() public id: number
  @Input() public title: string
  @Input() public completed: boolean

  public TodosService = inject(TodoListService)

  public deleteTodo():void{
    this.TodosService.deleteTodo(this.id)
  }

  public changeTodo() :void {
    this.TodosService.changeTodo(this.id)
  }
  
}
