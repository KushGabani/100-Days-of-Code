import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TaskModel} from "../task-model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl: string = "http://localhost:5000/tasks"

  constructor(private http:HttpClient) {
  }

  getTasks(): Observable<TaskModel[]> {
    return this.http.get<TaskModel[]>(this.apiUrl);
  }

  deleteTask(task: TaskModel): Observable<TaskModel> {
    return this.http.delete<TaskModel>(`${this.apiUrl}/${task.id}`);
  }
}
