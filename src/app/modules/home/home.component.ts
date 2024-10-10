import { Component } from '@angular/core';

declare var $:any;
declare function HOMEINITTEMPLATE([]):any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(){}
  ngOnInit(): void{
    setTimeout(() => {
      HOMEINITTEMPLATE($);
    }, 50);
  }
}
