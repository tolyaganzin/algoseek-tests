import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test-1',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './test-1.component.html',
  styleUrl: './test-1.component.css'
})
export class Test1Component {
  
  user: string = "Milton Romaguera";
  note: string = "";

  types: {class: string, type: number}[] = [
    {class: "ri-chat-1-fill", type: 0},
    {class: "ri-phone-fill", type: 1},
    {class: "ri-cup-fill", type: 2},
    {class: "ri-beer-fill", type: 3},
    {class: "ri-user-fill", type: 4}
  ];
  selectedType: number = 0
  
  handleClick(type: number): void {
    this.selectedType = type;
  }

  submit() {
    // add to array 
  }
}
