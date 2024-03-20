import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoListService } from '../../services/todo-list.service';

@Component({
  selector: 'app-add-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-form.component.html'
})
export class AddFormComponent {
  public title: string = ''

  public TodosService = inject(TodoListService)

  public addHandle() :void {
    this.TodosService.addTodo(this.title)
  }
  
}
