import { Component, OnChanges, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {FancyNumberComponent} from "./fancy-number/fancy-number.component"

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, FancyNumberComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {

  title = 'group-two-angular';

  subtitle = 'This is a subtitle';

  first:number = 0;
  second:number = 0;

  get expandedTitle() {
    return this.title + ' - ' + this.subtitle;
  }

  constructor() {}

  async ngOnInit() {
    this.first = 1;
    this.second = 2;
    await this.delay(2000);
    this.subtitle = 'This is a modified subtitle';
  }

  ngOnChanges() {
    console.log('ngOnChanges');
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  sum() {
    return this.first + this.second;
  }

  // updateFirstNumber(value: number) {
  //   this.first = value;
  // }

  updateSecondNumber(value: number) {
    this.second = value;
    // console.log('updateSecondNumber');
  }
}
