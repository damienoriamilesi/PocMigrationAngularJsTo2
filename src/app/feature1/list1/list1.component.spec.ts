import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { List1Component } from './list1.component';
import { FormsModule } from '@angular/forms';
import { Edit1Component } from '../edit1/edit1.component';

describe('List1Component', () => {
  let component: List1Component;
  let fixture: ComponentFixture<List1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ List1Component, Edit1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(List1Component);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
