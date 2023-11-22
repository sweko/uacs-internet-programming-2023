import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HighlightDirective } from "./highlight.directive";
import { MyJoinPipe } from "./my-join.pipe";
import { NumberService } from './services/number.service';
import { RomanNumberService } from './services/roman-number.service';
import { macedonianNonService } from './services/macedonian.non-service';
import { MAGIC_NUMBER_TOKEN } from './services/magic-injection';
import { magicNumber } from './config';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HighlightDirective, MyJoinPipe, FormsModule],
  providers: [
  // {
  //   provide: NumberService,
  //   useValue: macedonianNonService
  // },
    //{ provide: MAGIC_NUMBER_TOKEN, useValue: magicNumber},
    { provide: MAGIC_NUMBER_TOKEN, useFactory: () => {
      return Math.random() > 0.5 ? 42 : 97;
    }},
    NumberService, // equivalent to { provide: NumberService, useClass: NumberService}
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private numberService: NumberService
  ){

  }

  title = 'group-one';

  fontSize: number = 16;
  fontColor: string = 'lime';

  isHighlighted: boolean = false;
  isUnderlined: boolean = false;

  classObject = {
    highlight: this.isHighlighted,
    underline: this.isUnderlined
  };

  user = null;

  // Function to toggle highlighting
  toggleHighlight() {
    this.isHighlighted = !this.isHighlighted;

    this.classObject = {
      highlight: this.isHighlighted,
      underline: this.isUnderlined
    };
  }

  // Function to toggle underlining
  toggleUnderline() {
    this.isUnderlined = !this.isUnderlined;

    this.classObject = {
      highlight: this.isHighlighted,
      underline: this.isUnderlined
    };
  }

  // --------------------

  books = ["The Lord of the Rings", "The Hobbit", "The Silmarillion"];

  // --------------------
  numeric: number = 0;
  isEven: boolean = true;
  isOdd: boolean = false;

  oneToTen = this.numberService.getOneToTen();

  magic = this.numberService.getMagicNumber();

  checkEvenOdd() {
    this.isEven = this.numberService.isEven(this.numeric);
    this.isOdd = this.numberService.isOdd(this.numeric);
  }
}
