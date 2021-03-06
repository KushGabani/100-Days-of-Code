import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TaskModel} from "../../task-model";
import {faTimes} from "@fortawesome/free-solid-svg-icons"


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task!: TaskModel;
  faTimes = faTimes
  @Output() onDeleteTask: EventEmitter<TaskModel> = new EventEmitter()
  @Output() onToggleReminder: EventEmitter<TaskModel> = new EventEmitter()

  constructor() {
  }


  ngOnInit(): void {
  }
}
