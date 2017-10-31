import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { List1Service } from './list1.service';
import { Edit1Component } from '../edit1/edit1.component';
import { Test } from '../../model/Test';

@Component({
  selector: 'scam1-list1',
  templateUrl: './list1.component.html',
  styleUrls: ['./list1.component.scss']
  // , providers: [List1Service]
})
export class List1Component implements OnInit {
  editComponentVisible: boolean;
  selectedObject: Test = {test: '', id: 0};
  @Output() changed = new EventEmitter<Test>();
  @ViewChild(Edit1Component) editComponent: Edit1Component;

  @Input()objFromChild: Test;
  list: Test[]= [];

  constructor() { }

  ngOnInit() {

    // this.list1Service.getAll().subscribe();

    this.editComponentVisible = false;
    this.list.push({test: 'test1', id: 1});
    this.list.push({test: 'test2', id: 2});
    this.list.push({test: 'test3', id: 3});
    this.list.push({test: 'test4', id: 4});
  }


  select(obj: Test) {
    this.editComponentVisible = true;
    this.selectedObject = obj;
    this.changed.emit(obj);
    // alert('Emitted : ' + obj.id);
  }
}
