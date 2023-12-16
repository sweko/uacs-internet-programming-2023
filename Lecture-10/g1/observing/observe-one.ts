import { Observable, Observer } from 'rxjs';

const observable = new Observable((observer: Observer<string>) => {
    observer.next('Hello');
    observer.next('World');
    
    // Simulate an asynchronous operation
    setTimeout(() => {
        observer.next('Delayed Message');
        observer.complete(); // Notify that the observable has completed
    }, 2000);
});

console.log("observable created");

console.log("subscription created");
const subscription = observable.subscribe({
    next: (x: string) => console.log(x),
    error: (err: any) => console.error(err),
    complete: () => console.log('done')
});

console.log("Another subscription created");
const subscription2 = observable.subscribe({
    next: (x: string) => console.log(`Sub2: ${x}`),
    error: (err: any) => console.error(err),
    complete: () => console.log('Sub2: done')
});


const subscription3 = observable.subscribe((x: string) => console.log(`Sub 3: ${x}`));

// Unsubscribe
subscription.unsubscribe();
subscription2.unsubscribe();
subscription3.unsubscribe();

const subscriptionAuto = observable.subscribe({
    next: (x: string) => console.log(`Sub 4: ${x}`),
    error: (err: any) => console.error(err),
    complete: () => {
        subscriptionAuto.unsubscribe();
        console.log('done')
    }
});
