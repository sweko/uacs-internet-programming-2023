import { Injectable } from '@angular/core';
import { filter, from, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BandService {

  constructor() { }

  private bands = [
    {
      id: 1,
      name: 'The Beatles',
    },
    {
      id: 2,
      name: 'The Rolling Stones',
    },
    {
      id: 3,
      name: 'Led Zeppelin',
    },
    {
      id: 4,
      name: 'Pink Floyd',
    }
  ]

  getBands() {
    return of(this.bands);
  }

  getBand(id: number) {
    return from(this.bands).pipe(
      filter(band => band.id === id)
    );
  }
}
