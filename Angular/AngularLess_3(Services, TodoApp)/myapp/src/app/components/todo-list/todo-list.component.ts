import { Component, inject } from '@angular/core';
import { TodoItem, TodoListService } from '../../services/todo-list.service';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoItemComponent],
  templateUrl: './todo-list.component.html'
})
export class TodoListComponent {
  public TodosService = inject(TodoListService)

  public todos: TodoItem[] = this.TodosService.todos
}
