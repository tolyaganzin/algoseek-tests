import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SortByDatePipe } from '../pipes/sort-by-date.pipe';

interface typeItem {
  class: string, 
  type: number
}
interface noteItem {
  date: Date, 
  type: typeItem, 
  note: string, 
  id: number, 
  user: string
}

@Component({
  selector: 'app-test-1',
  standalone: true,
  imports: [FormsModule, CommonModule, SortByDatePipe],
  templateUrl: './test-1.component.html',
  styleUrl: './test-1.component.css'
})
export class Test1Component implements OnInit {
  
  user: string = "Milton Romaguera"; // it can be input that get a user
  // also can be separate component for create/edit note
  note: string = "";
  types: typeItem[] = [
    {class: "ri-chat-1-fill", type: 0},
    {class: "ri-phone-fill", type: 1},
    {class: "ri-cup-fill", type: 2},
    {class: "ri-beer-fill", type: 3},
    {class: "ri-user-fill", type: 4}
  ];
  selectedType: number = 0;
  // --------
  notes: noteItem[] = []

  // generate array of fake data on init component
  ngOnInit(): void {
    let lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
    for (let index = 0; index < this.types.length; index++) { 
      this.notes.push({
        date: new Date(new Date().setDate(new Date().getDate() - index - 2)),
        type: this.types[index],
        note: lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        id: this.getRandomInt(),
        user: this.user
      });  
    }
  }

  // create random int number with settable range. by default from 1 to 100
  getRandomInt(min: number = 1, max: number = 100): number { 
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  // use it for display days in the right format
  showDays(date: Date): string {
    // Calculate the difference in time (milliseconds)
    const diffTime = date.getTime() - new Date().getTime();
    const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24)); // Convert ms to days

    if (diffDays === 0) return 'Today';
    if (diffDays > 0) return `${diffDays}d`;
    return `${Math.abs(diffDays)}d ago`; // For past dates
  }

  // create section
  handleClick(type: number): void {
    this.selectedType = type;
  }
  // submit note
  submit(): void { 
    let type = this.types.find(item => item.type === this.selectedType); //try to find type
    
    // add to array 
    this.notes.push({
      date: new Date(new Date()), // date now
      type: type ? type : this.types[0], // if no type set default
      note: this.note,
      id: this.getRandomInt(),
      user: this.user
    })
    // trigger change detection. needed for pipe reorder
    this.notes = [...this.notes];
    this.note = "";
  } 
  // remove note
  delete(id:number): void {// delete item by id
    this.notes = this.notes.filter(item => item.id !== id); // put all items that not id. also trigger detection changes
  }
}
