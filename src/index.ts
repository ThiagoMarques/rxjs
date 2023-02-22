import { from, Observable, Subscriber } from "rxjs";

let numbers = [1, 5, 10, 15, 20, 25, 30];

let source = new Observable(Subscriber => {

    let index = 0;
    let produceValue = () => {
        /* Exemplo de chamada recursiva assíncrona*/
        Subscriber.next(numbers[index++])
        if (index < numbers.length) {
            setTimeout(produceValue, 1000)
        } else {
            // Subscriber.error('Aconteceu um erro esperado');
            Subscriber.complete();
        }

    }
    produceValue();
})

source.subscribe({
    next: (x: number) => console.log(x),
    error: (e: Error) => console.log(e),
    complete: () => console.log('Completed'),
})
