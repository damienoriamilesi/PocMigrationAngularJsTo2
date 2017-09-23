import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Component1Component} from './feature1/component1/component1.component';

const routes: Routes = [
  {
    path: '',
    children: []
  },
  {
    path: 'component1',
    component: Component1Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
