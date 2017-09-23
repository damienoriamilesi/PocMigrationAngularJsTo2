import { Component } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
//import { Router } from '@angular/router';

@Component({
  selector: 'scam1-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My Angular App';
  heroes = [{Name:'Spiderman'}];
  // constructor(private router:Router){
    
  // }
  
  constructor(private routingModule:AppRoutingModule) {
          
  }

  menuItems = 
        [
            {                   
                "label":"Menu1", 
                "menuItems":
                [
                    { "label":"Menu-1-1", "routeLink":"component1"},
                    { "label":"Menu-1-2"},
                    { "label":"Menu-1-3" },
                    { "label":"Menu-1-4" },
                    { "label":"Menu-1-5" },
                    { "label":"Menu-1-6" },
                    { "label":"Menu-1-7" },
                    { "label":"Menu-1-8" },
                    { "label":"Menu-1-9" },
                    { "label":"Menu-1-10" },
                ]        
            },
            {                   
                "label":"Menu 2", 
                "menuItems":
                [
                    { "label":"Menu-2-1", "routeLink":"component2"},
                    { "label":"Menu-2-2"},
                    { "label":"Menu-2-3" },
                    { "label":"Menu-2-4" },
                    { "label":"Menu-2-5" },
                    { "label":"Menu-2-6" },
                    { "label":"Menu-2-7" },
                    { "label":"Menu-2-8" },
                    { "label":"Menu-2-9" },
                    { "label":"Menu-2-10" , 
                        "menuItems":
                        [
                            { "label":"Menu-2-1", "routeLink":"component2"},
                            { "label":"Menu-2-2"},
                            { "label":"Menu-2-3" },
                            { "label":"Menu-2-4" },
                            { "label":"Menu-2-5" },
                            { "label":"Menu-2-6" },
                            { "label":"Menu-2-7" },
                            { "label":"Menu-2-8" },
                            { "label":"Menu-2-9" },
                            { "label":"Menu-2-10" },
                        ]  
                    },
                ]        
            }
        ];
}
