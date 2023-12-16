import { Observable, Observer } from 'rxjs';

const observable = new Observable((observer: Observer<number>) => {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            observer.next(i + 1);
        }, i * 1000);
    };

    setTimeout(() => {
        observer.complete();
    }, 13000);
});

const subscription = observable.subscribe({
    next: (x: number) => console.log(`First subscription: ${x}`),
    error: (err: any) => console.error(err),
    complete: () => {
        subscription.unsubscribe();
        console.log('done')
    }
});

// Piping

import { map, filter, take, skip } from 'rxjs/operators';

const evenSqures = observable.pipe(
    filter((x: number) => x % 2 === 0),
    map((x: number) => x * x),
    skip(1),
    take(3)
);

const subscription2 = evenSqures.subscribe({
    next: (x: number) => console.log(`Second subscription: ${x}`),
    error: (err: any) => console.error(err),
    complete: () => {
        subscription2.unsubscribe();
        console.log('done')
    }
});