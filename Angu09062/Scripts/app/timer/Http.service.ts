import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class HttpService {
    private url: string = "http://localhost:53932/webapi/";

    constructor(private http: Http) { }

    public allTasks(): Observable<Task[]> {
        let tasks = this.http.get(this.url + 'GetEvents').map((res: Response) => res.json());

        return tasks;
    }
}


export class Task {
    public Id: number;
    public ListId: number;
    public Text: string;

    constructor(Id: number,
        ListId: number,
        Text: string) {
        this.ListId = ListId;
        this.Id = Id;
        this.Text = Text;

    }
}