import { Injectable } from '@angular/core';
import { CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanLoad {
  constructor() {

  }

  canLoad(route: Route): boolean {
    // throw new Error('Method not implemented.');
    return true;
  }
}
