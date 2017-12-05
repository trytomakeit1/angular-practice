import { Component, OnInit } from '@angular/core';
import { User } from '../../datasource/users';
//import { ControlGroup, Control } from '@angular2/common';
import { HeroesDetailsComponent } from '../heroes-details/heroes-details.component';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']})
export class HeroesComponent implements OnInit {

  movies: string[] = ["x", "y", "z"];

  myuser = new User("ana", 31, "z");
  classs: string;
  whoisit : string;
  constructor() {

    this.classs = "hide";
   }

  ngOnInit() {
    console.log(this.myuser);

  
  }
  showDetails(age){

    console.log("show details");
    this.classs ="show";
    this.whoisit = age;
    console.log(age);
    
    
  }

}
