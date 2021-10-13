import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TaskModel} from "../../task-model";
import {UiService} from "../../services/ui.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  taskText: string;
  day: string;
  reminder: boolean = false;

  showAddTask: boolean = false;
  subscription: Subscription;
  @Output() onAddTask: EventEmitter<TaskModel> = new EventEmitter();

  constructor(private uiService: UiService) {
    this.taskText = "";
    this.day = "";
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value: boolean) => (this.showAddTask = value));
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.taskText == "") {
      alert("Please add a task");
      return;
    }
    const newTask: TaskModel = {
      text: this.taskText,
      day: this.day,
      reminder: this.reminder,
    }

    this.onAddTask.emit(newTask);

    this.taskText = "";
    this.day = "";
    this.reminder = false;
  }
}
