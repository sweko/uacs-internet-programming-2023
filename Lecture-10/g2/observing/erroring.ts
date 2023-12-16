import { Observable, catchError, finalize, from, of } from "rxjs";

const numbers = new Observable((observer) => {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            observer.next(i);
            if (i === 5) {
                observer.error(new Error('Something bad happened!'));
            }
        }, 1000 * i);
    }
    setTimeout(() => {
        observer.complete();
    }, 13000);
});

const piped = numbers.pipe(
    catchError((error, _) => {
        console.log(`Caught error: ${error}`);
        return of(-1);
    }),
    finalize(() => {
        console.log('Finalized');
    })
);

const pipedSub = piped.subscribe({
    next: (value) => {
        console.log(`Piped Received value: ${value}`);
    },
    error: (error) => {
        console.error(`Piped Error: ${error}`);
    },
    complete: () => {
        console.log('Piped Observable completed');
        pipedSub.unsubscribe();
    }
});