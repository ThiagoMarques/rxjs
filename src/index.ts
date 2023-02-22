import { from, Observable, Subscriber } from "rxjs";
import { map, filter } from "rxjs/operators";

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

/* Operadores pipeables - exemplo com map */
/* Para cada pipe (chamada), realiza um mapeamento e multiplica por 2 */
/* Ao colocar o pipe antes do primeiro subscribe, só será feito o apenas para primeira chamada  */
source.pipe(
    map((n: number) => n * 2)).subscribe({
        next: (x: number) => console.log('Map', x),
        error: (e: Error) => console.log(e),
        complete: () => console.log('Completed'),
    })

source.pipe(
    filter((n: number) => n > 4)).subscribe({
        next: (x: number) => console.log('Filter', x),
        error: (e: Error) => console.log(e),
        complete: () => console.log('Completed'),
    })
