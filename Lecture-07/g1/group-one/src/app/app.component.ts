import { Component, OnInit, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FancyNumberComponent } from './fancy-number/fancy-number.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    FormsModule, 
    FancyNumberComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {
  title = 'Group One';
  first: number = 1;
  second: number = 2;

  constructor() {
    console.log(`App Component Constructor`);
  }

  async ngOnInit() {
    this.first = 12;
    this.second = 23;
  }

  ngOnChanges() {
    console.log(`App Component OnChanges`);
  }

  get expandedTitle() {
    return this.title + '!!!';
  }

  get sum() {
    return this.first + this.second;
  }

  // changeFirst(value: number) {
  //   this.first = value;
  // }

  changeSecond(value: number) {
    this.second = value;
  }
}
