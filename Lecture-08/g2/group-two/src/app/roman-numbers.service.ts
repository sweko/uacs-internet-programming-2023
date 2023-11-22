import { Injectable, Inject } from '@angular/core';
import { NumbersService } from './numbers.service';
import { BASE_URL_TOKEN } from './injection-tokens';

@Injectable({
  providedIn: 'root'
})
export class RomanNumbersService extends NumbersService {

  constructor(@Inject(BASE_URL_TOKEN) baseUrl: string) { 
    super(baseUrl);
  }

  override getOneToTen(): string[] {
    return ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
  }
}
