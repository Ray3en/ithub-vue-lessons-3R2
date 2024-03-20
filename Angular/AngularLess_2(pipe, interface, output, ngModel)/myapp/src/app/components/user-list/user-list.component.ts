import { Component } from '@angular/core';
import { UserCardComponent } from '../user-card/user-card.component';
import { FormsModule } from '@angular/forms';

interface UserItem {
    id: number
    name: string
    age: number
} 

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserCardComponent, FormsModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})

export class UserListComponent {

  public name: string = ''
  public age: string = ''

  public users: UserItem[] = [
      {id: 1, name: 'Alex', age: 18},
      {id: 2, name: 'Steven', age: 19},
      {id: 3, name: 'Dima', age: 17},
      {id: 4, name: 'Neena', age: 15},
  ]
  
  public addNewUser() :void {
    let newUser: UserItem = {
      id: Date.now(),
      name: this.name,
      age: +this.age
    }
    this.users.push(newUser)
  }

  public deleteLatUser() :void {
    this.users.pop()
  }

  public deleteUserById(id: number) :void {
    this.users = this.users.filter(el => el.id !== id)
  }
}


// Задача - для кнопки реалйзиуйте мтеод по удалению последнего лемента массива
// Задача - реализовать добавление нового пользователя используя ngModel и кнопку add new user