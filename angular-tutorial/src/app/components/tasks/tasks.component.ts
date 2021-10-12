import {Component, OnInit} from '@angular/core';
import {TaskModel} from "../../task-model";
import {TaskService} from "../../services/task.service";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: TaskModel[] = []

  constructor(private taskService: TaskService) {
  }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks: TaskModel[]) => {
      this.tasks = tasks;
    })
  };


  deleteTask(task: TaskModel): void {
    this.taskService.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter((t: TaskModel) => t.id !== task.id);
    })
  }
}
