import { JsonPipe } from '@angular/common';
import { Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-life-methods',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './life-methods.component.html'
})
export class LifeMethodsComponent implements OnInit, OnChanges, OnDestroy, DoCheck {

  public message: string = 'Hello!'
  public data: any = [] 

  constructor(){
      console.log('Component start init', this.data)
  }

  // ngOnInit(): void{
  //   console.log('Component was init')
  // }

  // http get example
  ngOnInit(): void{
    console.log('Component was init')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        this.data = data
        console.log(data)
      })
  }

  ngOnDestroy(): void {
    console.log('Component was delete')
  }

  ngOnChanges(changes: SimpleChanges): void {
   let currentValue = changes['message'].currentValue
   console.log(currentValue);
  }

  ngDoCheck(): void {
      console.log('Props was changed')
  }

  changeString() :void {
    this.message = 'change string'
  }
}
