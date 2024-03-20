import { Component, OnInit, inject } from '@angular/core';
import { UserItemComponent } from '../user-item/user-item.component';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserItemComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit{
  public userService = inject(UsersService)

  ngOnInit(): void {
      this.userService.fetchUsers()
  }

}
