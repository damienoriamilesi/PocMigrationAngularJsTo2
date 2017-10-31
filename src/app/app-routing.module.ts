import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Component1Component } from './feature1/component1/component1.component';
import { List1Component } from './feature1/list1/list1.component';
import { Edit1Component } from './feature1/edit1/edit1.component';
import { AuthGuard } from './auth-guard.service';


const routes: Routes = [
  {
    path: 'ui',
    children: []
  },
  {
    path: 'ui/list',
    component: List1Component
  },
  {
    path: 'ui/edit/:id',
    component: Edit1Component
    // canActivate: [AuthGuard],
    // canActivateChild: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
