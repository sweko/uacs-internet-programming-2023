import { Injectable,Inject } from '@angular/core';
import { MAGIC_NUMBER_TOKEN } from './magic-injection';

@Injectable()
export class NumberService {

  constructor(
    @Inject(MAGIC_NUMBER_TOKEN)
    private magicNumber: number
  ) { }

  getMagicNumber() {
    return this.magicNumber;
  }

  isEven (value: number) {
    return value % 2 ===0;
  }

  isOdd (value: number) {
    return !this.isEven(value);
  }

  getOneToTen() {
    return ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
  }
}
