import { from, Observable, Subscriber } from "rxjs";

/* Teste com RXJS */
let numbers = [1, 5, 10];
/* From: função que retorna um observable (recebe atualizações, inscrição)*/
let source = from(numbers);

/* A função será chamada quando o observable quando alguém realizar um subscribe e retornará um array*/
let source1 = new Observable(Subscriber => {
    Subscriber.next(numbers);
})

/* A função será chamada quando o observable quando alguém realizar um subscribe e retornará números*/
let sourceInstance = new Observable(Subscriber => {
    for (let n of numbers) {
        Subscriber.next(n);
    }
    Subscriber.complete();
})

/* Teste com erro*/
let sourceInstanceError = new Observable(Subscriber => {
    for (let n of numbers) {
        if (n > 5) {
            Subscriber.error('Aconteceu um erro esperado!')
        }
        Subscriber.next(n);
    }
    Subscriber.complete();
})

/* Exemplo da implementação de um Observer JSON*/
let myObserver = {
    next: (x: number) => console.log(x),
    error: (e: Error) => console.log(e),
    complete: () => console.log('Completed'),
}

function component() {
    /* Só é possível trazer resultados com subscribe, se não houver nenhum erro */
    source.subscribe({
        /* Função "next" responsável por executar */
        next: (x) => console.log(myObserver)
    });

    /* Teste com subscriber, não passa em item por item, retorna um array*/
    source1.subscribe(myObserver)

    /* Teste com subscriber passando item por item*/
    sourceInstance.subscribe(myObserver)

    /* Teste com erro - Erro sempre para um subscribe*/
    sourceInstanceError.subscribe(myObserver)
}

component();