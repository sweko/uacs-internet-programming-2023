import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myJoin',
  standalone: true
})
export class MyJoinPipe implements PipeTransform {

  transform(value: string[], separator: string = ",", last: string = "&"): string {
    if (value.length === 0) {
      return '';
    }
    if (value.length === 1) {
      return value[0];
    }
    let head = value.slice(0, value.length - 1);
    let tail = value[value.length - 1];
    const elementSeparator = `${separator} `;
    const headString = head.join(elementSeparator);
    return `${headString} ${last} ${tail}`;
  }

}
