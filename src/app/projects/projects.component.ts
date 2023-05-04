import { Component, OnInit } from '@angular/core';

import * as AOS from 'aos';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  public weatherApp: boolean;
  public meltingApp: boolean;

  constructor() {
    this.weatherApp = true;
    this.meltingApp = true;
  }

  ngOnInit(): void {
    AOS.init();

  }

  setDescription() {
    this.weatherApp = false;
  }
  setDescriptionMelt() {
    this.meltingApp = false;
  }

  backWeather() {
    this.weatherApp = true;
  }

  backMelt() {
    this.meltingApp = true;
  }


}
