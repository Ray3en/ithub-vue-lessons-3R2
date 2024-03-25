import { Component, OnInit } from '@angular/core';
import { DataService, Todo } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit{

  public todos$: Todo[]

  constructor (private todoService: DataService) {}

  ngOnInit(): void {
      this.todoService.getTodos().subscribe((data) => {
        this.todos$ = data
        console.log(this.todos$)
      })
  }
}
