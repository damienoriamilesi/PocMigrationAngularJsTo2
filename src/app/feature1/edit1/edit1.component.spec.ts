import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Edit1Component } from './edit1.component';
import {FormsModule} from '@angular/forms';
import { ActivatedRoute, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

class MockActivatedRoute extends ActivatedRoute {
  constructor() {
      super();
      this.snapshot = new ActivatedRouteSnapshot();
      this.snapshot.params = new Observable<{id: '5'}>();
  }
}

describe('Edit1Component', () => {
  let component: Edit1Component;
  let fixture: ComponentFixture<Edit1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ Edit1Component ],
      providers: [
        {provide: ActivatedRoute
          , useClass: MockActivatedRoute }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Edit1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture = TestBed.createComponent(Edit1Component);
    console.log(fixture.debugElement);
    console.log(component);
    expect(component).toBeTruthy();
  });
});
