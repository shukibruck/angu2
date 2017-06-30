import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Headers } from '@angular/http';

@Injectable()
export class HttpService {
    private url: string = "http://localhost:53932/webapi/";

    constructor(private http: Http) { }

    public allTasks(): Observable<Task[]> {
        let tasks = this.http.get(this.url + 'GetEvents').map((res: Response) => res.json());

        return tasks;
    }

    public addTask(task: Task): Observable<string> {
        return this.corePost(task, 'AddEvent');
    }

    public editTask(task: Task): Observable<string> {
        return this.corePost(task, 'EditEvent');
    }


    private corePost(task: Task, path: string): Observable<string> {
        let header = new Headers({ 'Content-Type': 'application/json' });
        let body = JSON.stringify(task);

        let respo = this.http.post(this.url + path, body, { headers: header }).map((res: Response) => JSON.stringify(res.json()));
        return respo;
    }


}


export class Task {
    public Id: number;
    public ListId: number;
    public Text: string;
    public Status: number;

    constructor(Id: number,
        ListId: number,
        Text: string,
        Status: number) {
        this.ListId = ListId;
        this.Id = null;
        this.Text = Text;
        this.Status = Status;

    }
}