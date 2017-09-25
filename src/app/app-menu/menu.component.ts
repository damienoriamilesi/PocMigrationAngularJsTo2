import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() menuItems: any;

  constructor() { }

  ngOnInit() {
  }

  getSubmenuClass(menuItems: any): string {
    if (menuItems) { return 'dropdown-submenu'; }
    return '';
  }
}

const menu =
[
    {
        'label': 'Menu-1',
        'menuItems':
        [
            { 'label': 'Menu-1-1', 'routeLink': 'component1'},
            { 'label': 'Menu-1-2'},
            { 'label': 'Menu-1-3' },
            { 'label': 'Menu-1-4' },
            { 'label': 'Menu-1-5' },
            { 'label': 'Menu-1-6' },
            { 'label': 'Menu-1-7' },
            { 'label': 'Menu-1-8' },
            { 'label': 'Menu-1-9' },
            { 'label': 'Menu-1-10', 'menuItems':
            [
                { 'label': 'Menu-1-1', 'routeLink': 'component1'},
                { 'label': 'Menu-1-2'},
                { 'label': 'Menu-1-3' },
                { 'label': 'Menu-1-4' },
                { 'label': 'Menu-1-5' },
                { 'label': 'Menu-1-6' },
                { 'label': 'Menu-1-7' },
                { 'label': 'Menu-1-8' },
                { 'label': 'Menu-1-9' },
                { 'label': 'Menu-1-10',  },
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

