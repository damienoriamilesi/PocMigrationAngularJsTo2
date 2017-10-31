import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Test } from '../../model/Test';

@Component({
  selector: 'scam1-edit1',
  templateUrl: './edit1.component.html',
  styleUrls: ['./edit1.component.scss']
})
export class Edit1Component implements OnInit {

  id: number;
  inputValue: string;

  @Input() selectedObj: Test;

  constructor(private route: ActivatedRoute) {
    // After navigation
    this.id = this.route.snapshot.params['id'];
    // Before navigation ==> Create Resolver
    // Ex : Guards
    // Resolve / CanActivate / CanActivateChild / CanDeactivate / CanLoad
  }

  ngOnInit() {
     // alert(JSON.stringify(this.selectedObj));
  }

  onSave() {
    if (this.selectedObj) {
      this.selectedObj.test = this.inputValue;
      alert(this.selectedObj.test);
      // const link = ['ui/list'];
      // this.router.navigate(link);
    }
  }
}
