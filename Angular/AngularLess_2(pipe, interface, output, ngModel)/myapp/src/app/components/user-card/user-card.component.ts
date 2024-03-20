import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  @Input() public name: string
  @Input() public age: number
  @Input() public id: number

  @Output() deleteUserById: EventEmitter<any> = new EventEmitter()

  public deleteUser() :void{
    this.deleteUserById.emit(this.id)
  }

}
