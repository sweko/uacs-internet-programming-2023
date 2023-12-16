import { interval } from 'rxjs';
import { mergeMap, take, map } from 'rxjs/operators';

const source = interval(1000) // emits values 0, 1, 2, ...

const result = source.pipe(
    take(3), // take the first 3 values from the source
    mergeMap(value => interval(700).pipe(
      take(4), 
      map(innerValue => `Result: ${value}-${innerValue}`)
    ))
  );

  const subscription = result.subscribe(console.log);