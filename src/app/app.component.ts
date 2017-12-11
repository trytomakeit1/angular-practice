import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { globalVar } from './globalvar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [globalVar]
})


export class AppComponent {
  menu: any[];
  pageTitle: string;
  logoSrc: string;
  constructor (private _globalVar: globalVar){
    this.menu = [
      {name: 'Home',
      btnName: 'homebtn',
      url: '/'},
      {name: 'Dashboard',
      btnName: 'dashbtn',
      url: '/dashboard'},
      {name: 'Enter form here',
      btnName: 'userbtn',
      url: '/user'}
    ];

    this.pageTitle = 'Tour of Heroes!';
    console.log(this._globalVar);
    this.logoSrc = this._globalVar.imageFolder + "logo.jpg";
  }
 
}
