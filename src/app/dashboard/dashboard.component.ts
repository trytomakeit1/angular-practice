import { Component, OnInit, Input, Pipe, ViewChild} from '@angular/core';
import { globalVar } from '../globalvar.service';
import { services } from '../services';

@Pipe ({
  name: "uppercase"
})

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [services, globalVar]
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
  content: string;
  ngm: string;
  gotData: boolean;


  constructor(public _services: services,
  private _globalVar: globalVar) {

    this.weight = 700;
    this.size = 10;
    this.nameList = ["Eli", "Armi"];
    this.profilesrc = this._globalVar.imageFolder + "profile.jpg";
    this.colors= ["green", "red", "orange"];
    this.textColor = 'black';
    this.fontsize = this.size + "px";
    this.content = "sorry"; 
    this.ngm = "hi";
    this.gotData = false;

  }
  ngOnInit() {
    this.globaltitle = this._services.title;
    this.somename = "hello there";
  }

  caller(){
    var receivedData= this._services.getInfo();
    const funcData = (function(that){
      return function(receivedData){
        that.gotData = true;
        console.log(receivedData.json());
        that.content = receivedData.json();
      }
    })(this);
    
    receivedData.then(funcData).catch(function(error){
      console.log(error);
    });
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
