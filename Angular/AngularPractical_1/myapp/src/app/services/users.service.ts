import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public users: any[] = []

  // public async fetchUsers(): Promise<any>{
  //   let res = await fetch('https://jsonplaceholder.typicode.com/users')
  //   let data: any = await res.json()
  //   data.forEach((el: object) => this.users.push(el));
  // }

    public fetchUsers = (): void => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
          this.users = data
        })
    }


  
}
