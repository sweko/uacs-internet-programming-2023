import { Pipe, PipeTransform } from '@angular/core';
import { Person } from './model/author';

@Pipe({
  name: 'personAge'
})
export class PersonAgePipe implements PipeTransform {

  transform(value: Person): number {
    const endDate = value.deathDate ? value.deathDate : new Date();
    const startDate = value.birthDate;

    const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
    // not a completely correct calculation, but good enough for our purposes
    const diffYears = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 365)); 
    return diffYears;
  }

}
