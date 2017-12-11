import { Component, OnInit, Input, Pipe, ViewChild} from '@angular/core';
import { globalVar } from '../globalvar.service';
import { setTitleProvider } from '../services';

@Pipe ({
  name: "uppercase"
})

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [setTitleProvider, globalVar]
})
export class DashboardComponent implements OnInit {
 
 
  globaltitle: string;
  weight: number; size: number;
  newsize : number;
  somename: string;
  nameList: string[];
  profilesrc: string;
  colors: string[];
  textColor: string;
  changableText: string;
  fontsize: string;


  constructor(private _setTitleProvider: setTitleProvider,
  private _globalVar: globalVar) {

    this.weight = 700;
    this.size = 10;
    this.nameList = ["Eli", "Armi"];
    this.profilesrc = this._globalVar.imageFolder + "profile.jpg";
    this.colors= ["green", "red", "orange"];
    this.textColor = 'black';
    this.fontsize = this.size + "px";

  }
  ngOnInit() {
    this.globaltitle = this._setTitleProvider.title;
    this.somename = "hello there";
    
  }

  changeTextColor(tcolor) {
    this.textColor = tcolor;

  }

  increment () {
    this.size = this.size + 2;
    this.fontsize = this.size + "px";
  }

  decrease () {
    this.size = this.size - 2;
    this.fontsize = this.size + "px";
  }

  addName(nameToAdd, bb) {
    this.nameList.push(nameToAdd);
    console.log(bb);
  }

  changeCSS(el) {
    console.log(el);
  }

 
  ucText: string;
  uppercase (lcText) {
    this.ucText = lcText.toUpperCase();
    console.log(this.ucText);
    return this.ucText

  }
}
