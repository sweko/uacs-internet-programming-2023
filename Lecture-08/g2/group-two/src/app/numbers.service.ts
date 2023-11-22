import { Injectable, Inject } from '@angular/core';
import { BASE_URL_TOKEN } from './injection-tokens';

@Injectable()
export class NumbersService {

  constructor(
    @Inject(BASE_URL_TOKEN) private baseUrl: string
  ) { 
    console.log(`NumbersService instantiated with base URL ${baseUrl}`);
  }

  add(a: number, b: number): number {
    return a + b;
  }

  isEven(a: number): boolean {
    return a % 2 === 0;
  }

  getOneToTen(): string[] {
    return ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
  }
}
