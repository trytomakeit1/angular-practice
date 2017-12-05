import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  menu: any[];
  pageTitle: string;
  globalAddr: string = "/assets/images/";
  logoSrc: string;
  constructor (){
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
    this.logoSrc = this.globalAddr + "logo.jpg";
  }
 
}
