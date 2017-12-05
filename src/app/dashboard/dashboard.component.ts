import { Component, OnInit} from '@angular/core';

import {setTitleProvider} from '../services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [setTitleProvider]
})
export class DashboardComponent implements OnInit {
 
  profilesrc = "../../assets/images";
  globaltitle: string;
  list: string[] = ["a", "b"];
  weight: number; size: number;
  newsize : number;
  somename: string;
  nameList: string[];



  constructor(private _setTitleProvider: setTitleProvider) {

    this.weight = 700;
    this.size = 14;
    this.nameList = ["Eli", "Armi"];
  }
  ngOnInit() {
    this.globaltitle = this._setTitleProvider.title;
    this.somename = "hello there";
    
  }

  increment (e) {
    console.log(e);
    this.globaltitle = e.target.innerHTML;
    
    console.log("hi", this.size);
    this.size = this.size + 4;
    console.log("bye", this.size);
    

  }

  decrease (size) { size--; }

  addName(nameToAdd, bb) {
    this.nameList.push(nameToAdd);
    console.log(bb);
  }

  changeCSS(el) {
    console.log(el);
  }
}
