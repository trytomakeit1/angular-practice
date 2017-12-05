import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hero-details',
  templateUrl: './heroes-details.component.html',
  styleUrls: ['./heroes-details.component.css'],
  inputs: ['myInput']
})
export class HeroesDetailsComponent implements OnInit {

  heroName: string;
  constructor() { }

  ngOnInit() {
    this.heroName = "Hero Name";
  }

}
