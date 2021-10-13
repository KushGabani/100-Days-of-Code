import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {TaskModel} from "../task-model";
import {Observable} from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl: string = "http://localhost:5000/tasks"

  constructor(private http: HttpClient) {
  }

  getTasks(): Observable<TaskModel[]> {
    return this.http.get<TaskModel[]>(this.apiUrl);
  }

  deleteTask(task: TaskModel): Observable<TaskModel> {
    return this.http.delete<TaskModel>(`${this.apiUrl}/${task.id}`);
  }

  updateTaskReminder(task: TaskModel): Observable<TaskModel> {
    return this.http.patch<TaskModel>(`${this.apiUrl}/${task.id}`, task, httpOptions);
  }

  addTask(task: TaskModel): Observable<TaskModel> {
    return this.http.post<TaskModel>(this.apiUrl, task, httpOptions);
  }
}
