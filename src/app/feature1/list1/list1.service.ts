import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class List1Service {

  constructor(private http: Http) { }

  getAll(): Observable<any[]> {
    return this.http
      .get(`app/heroes`)
      .map((r: Response) => r.json().data as any[])
      .catch((error: any) => {
          console.error('An friendly error occurred', error);
          return Observable.throw(error.message || error);
      });
  }

  get(id: number): Observable<Object> {
      return this.http
        .get(``)
        .map((r: Response) => r.json().data as Object)
        .catch((error: any) => {
        console.error('An friendly error occurred', error);
        return Observable.throw(error.message || error);
        });
  }

  getSubject(id: number): Observable<Object> {
      return this.http
        .get(``)
        .map((r: Response) => r.json().data as Object)
        .catch((error: any) => {
        console.error('An friendly error occurred', error);
        return Observable.throw(error.message || error);
        });
  }
}

export class Object {
id: number;
label: string;
}
