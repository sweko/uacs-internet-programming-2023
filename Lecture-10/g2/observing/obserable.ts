import { Observable, Observer } from 'rxjs';

const myObservable = new Observable((observer: Observer<string>) => {
    console.log('Observable executed');
    observer.next('Hello');
    observer.next('World');
    observer.next("!");

    setTimeout(() => {
        observer.next('After 2 seconds');
        observer.complete();
        console.log('Observable finished executing');
    }, 2000);

});

const subscription = myObservable.subscribe({
    next: (value: string) => {
      console.log(`Received value: ${value}`);
    },
    error: (error: any) => {
      console.error(`Error: ${error}`);
    },
    complete: () => {
      console.log('Observable completed');
      //subscription.unsubscribe();
    }
});

subscription.unsubscribe();

const subscription2 = myObservable.subscribe({
    next: (value: string) => {
      console.log(`Received value2: ${value}`);
    },
    error: (error: any) => {
      console.error(`Error2: ${error}`);
    },
    complete: () => {
      console.log('Observable2 completed');
      subscription2.unsubscribe();
    }
});



