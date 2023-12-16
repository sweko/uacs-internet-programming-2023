import { Observable, Observer } from "rxjs";
import { filter, map, skip, take } from "rxjs/operators";

const numbers = new Observable((observer: Observer<number>) => {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            observer.next(i);
        }, 1000 * i);
    }

    setTimeout(() => {
        observer.complete();
    }, 13000);
});

// const basicSub = numbers.subscribe({
//     next: (value: number) => {
//         console.log(`Basic Received value: ${value}`);
//     },
//     error: (error: any) => {
//         console.error(`Basic Error: ${error}`);
//     },
//     complete: () => {
//         console.log('Basic Observable completed');
//         basicSub.unsubscribe();
//     }
// });

const pipedObservable = numbers.pipe(
    filter((value: number) => value % 2 === 0),
    map((value: number) => value * value),
    skip(1),
    take(3)
)

const pipedSub = pipedObservable.subscribe({
    next: (value: number) => {
        console.log(`Piped Received value: ${value}`);
    },
    error: (error: any) => {
        console.error(`Piped Error: ${error}`);
    },
    complete: () => {
        console.log('Piped Observable completed');
        pipedSub.unsubscribe();
    }
});