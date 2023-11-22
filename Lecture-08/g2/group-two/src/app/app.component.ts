import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BrightDirective } from './bright.directive';
import { NumbersService } from './numbers.service';
import { RomanNumbersService } from './roman-numbers.service';
import { mkdNumbersNonService } from './mkd.non-service';
import { BASE_URL_TOKEN } from './injection-tokens';
import { DEVELOPMENT_BASE_URL } from './config';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, BrightDirective, FormsModule],
  providers: [
    {
      provide: NumbersService,
      useClass: RomanNumbersService
      // useValue: mkdNumbersNonService
      // useFactory: () => {
      //   return new RomanNumbersService();
      // }
    },
    {
      provide: BASE_URL_TOKEN,
      useValue: DEVELOPMENT_BASE_URL
    }
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'group-two';

  fontSize = 16;
  fontColor: string = 'lime';

  isHighlighted: boolean = true;
  isUnderlined: boolean = true;

  classObject: Record<string, boolean> = {
    'highlight': this.isHighlighted,
    'underline': this.isUnderlined
  };

  user = null;

  toggleHighLight() {
    this.isHighlighted = !this.isHighlighted;
    this.classObject["highlight"] = this.isHighlighted;
  }

  toggleUnderline() {
    this.isUnderlined = !this.isUnderlined;
    this.classObject["underline"] = this.isUnderlined;
  }

  // ------------------------------
  evenOddNumber: number = 0;
  evenOddResult: "even" | "odd" = "even";

  constructor(private numbersService: NumbersService) {
  }

  detectEvenOdd() {
    this.evenOddResult = this.numbersService.isEven(this.evenOddNumber) ? "even" : "odd";
  }

  getOneToTen(): string[] {
    return this.numbersService.getOneToTen();
  }
}
