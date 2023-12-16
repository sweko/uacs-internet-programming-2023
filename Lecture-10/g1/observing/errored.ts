import { Observable, Observer, interval, of, throwError } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';

// const observable = throwError(() => 'An error occurred');

const observable = new Observable((observer: Observer<string>) => {
    observer.next('Hello');
    observer.next('World');

    // Simulate an asynchronous operation
    setTimeout(() => {
        observer.next('Delayed Message');
        observer.error('An error occurred'); // Notify that the observable has completed
        observer.complete(); // Notify that the observable has completed
    }, 2000);
});

const fallbackObservable = of('Fallback value');

const result = observable.pipe(
    map(x => x.toUpperCase()),
    catchError(_error => fallbackObservable),
    finalize(() => console.log('Finalize called'))
);

result.subscribe({
    next: value => console.log(`Received value: ${value}`),
    error: error => console.error(`Error handled: ${error}`),
    complete: () => console.log('done')
});
