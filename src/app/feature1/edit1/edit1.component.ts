import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Test } from '../../model/Test';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'scam1-edit1',
  templateUrl: './edit1.component.html',
  styleUrls: ['./edit1.component.scss']
})
export class Edit1Component implements OnInit {

  id: number;
  inputValue: string;

  @Input() selectedObj: Test;

  constructor(private route: ActivatedRoute, private http: Http) {
    // After navigation
    this.id = this.route.snapshot.params['id'];
    // Before navigation ==> Create Resolver
    // Ex : Guards
    // Resolve / CanActivate / CanActivateChild / CanDeactivate / CanLoad
  }

  ngOnInit() {
     // alert(JSON.stringify(this.selectedObj));

  }

    methodName(param: any): Observable<any> {
  return this.http
  .get(``)
  .map((r: Response) => r.json().data as any)
  .catch((error: any) => {
  console.error('An friendly error occurred', error);
  return Observable.throw(error.message || error);
  });
  }

  onSave() {

    if (this.selectedObj) {
      this.selectedObj.test = this.inputValue;

      // alert(this.selectedObj.test);
      // const link = ['ui/list'];
      // this.router.navigate(link);
    }
  }
}
