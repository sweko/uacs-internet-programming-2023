import { Injectable, Inject } from '@angular/core';
import { NumberService } from './number.service';
import { MAGIC_NUMBER_TOKEN } from './magic-injection';

@Injectable()
export class RomanNumberService extends NumberService {

  constructor(
    @Inject(MAGIC_NUMBER_TOKEN)
    magicNumber: number
  ) { 
    super(magicNumber);
  }

  override getOneToTen() {
    return ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
  }
}
