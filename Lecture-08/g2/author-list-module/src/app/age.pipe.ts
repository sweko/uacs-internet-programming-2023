import { Pipe, PipeTransform } from '@angular/core';
import { Person } from './models/author';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(person: Person): number {
    const endDate = person.deathDate ? new Date(person.deathDate) : new Date();
    const birthDate = new Date(person.birthDate);
    const age = endDate.getFullYear() - birthDate.getFullYear();
    const month = endDate.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && endDate.getDate() < birthDate.getDate())) {
      return age - 1;
    }
    return age;
  }

}
