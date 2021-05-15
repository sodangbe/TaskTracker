import { Task } from './../../Task';
import { Component, OnInit , Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text!: string;
  day!: string;
  reminder: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){

    if(!this.text){
      alert('Please add a task');
      return;
    }

    const newTask = {

      text : this.text,
      day :this.day,
      reminder:this.reminder
    }

    // @todo - emit event

    

    this.text ='';
    this.day = '';
    this.reminder = false;

  }

}
