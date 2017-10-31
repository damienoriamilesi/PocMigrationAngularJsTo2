import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


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
}
