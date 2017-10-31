import { Component, Input } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { Router } from '@angular/router';

@Component({
  selector: 'scam1-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Input() menuItems = menu;

  title = 'My Angular App';
  heroes = [{Name: 'Spiderman'}];
  constructor(private routingModule: AppRoutingModule, private router: Router) {
  }

  getSubmenuClass(menuItems: any): string {
    if (menuItems) { return 'dropdown-submenu'; }
    return '';
  }

  gotoDetail(menuItem: MenuItem): void {
    const link = ['edit/', menuItem.id];
    this.router.navigate(link);
    // alert(menuItem.label);
  }
}

export class MenuItem {
  id: number;
  label: string;
}


const menu =
[
    {
        'label': 'Menu-1',
        'menuItems':
        [
            {'id': '1', 'label': 'Menu-1-1', 'routeLink': 'list'},
            {'id': '2', 'label': 'Menu-1-2'},
            {'id': '3', 'label': 'Menu-1-3' },
            {'id': '4', 'label': 'Menu-1-4' },
            {'id': '5', 'label': 'Menu-1-5' },
            {'id': '6', 'label': 'Menu-1-6' },
            {'id': '7', 'label': 'Menu-1-7' },
            {'id': '8', 'label': 'Menu-1-8' },
            {'id': '9', 'label': 'Menu-1-9' },
            {'id': '10', 'label': 'Menu-1-10', 'menuItems':
            [
                {'id': '1', 'label': 'Menu-1-1', 'routeLink': 'list'},
                {'id': '2', 'label': 'Menu-1-2'},
                {'id': '3', 'label': 'Menu-1-3' },
                {'id': '4', 'label': 'Menu-1-4' },
                {'id': '5', 'label': 'Menu-1-5' },
                {'id': '6', 'label': 'Menu-1-6' },
                {'id': '7', 'label': 'Menu-1-7' },
                {'id': '8', 'label': 'Menu-1-8' },
                {'id': '9', 'label': 'Menu-1-9' },
                {'id': '10', 'label': 'Menu-1-10',  },
            ]},
        ]
    },
    {
      'label': 'Menu-2',
      'menuItems':
      [
          { 'label': 'Menu-2-1', 'routeLink': 'component1'},
          { 'label': 'Menu-2-2'},
          { 'label': 'Menu-2-3' },
          { 'label': 'Menu-2-4' },
          { 'label': 'Menu-2-5' },
          { 'label': 'Menu-2-6' },
          { 'label': 'Menu-2-7' },
          { 'label': 'Menu-2-8' },
          { 'label': 'Menu-2-9' },
          { 'label': 'Menu-2-10' },
      ]
  },

];
