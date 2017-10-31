import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component1Component } from './feature1/component1/component1.component';
import { MenuComponent } from './app-menu/menu.component';
import { ContentComponent } from './content/content.component';
import { List1Component } from './feature1/list1/list1.component';
import { Edit1Component } from './feature1/edit1/edit1.component';
import { AuthGuard } from './auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    MenuComponent,
    ContentComponent,
    List1Component,
    Edit1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
