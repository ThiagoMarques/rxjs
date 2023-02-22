import { from } from "rxjs";

/* Teste com RXJS */
let numbers = [1, 5, 10];
/* From: função que retorna um observable (recebe atualizações, inscrição)*/
let source = from(numbers);

/* Exemplo de um Observer Classe*/
class myObserver {
    next(x: number) {
        console.log(x)
    }
    error(e: Error) {
        console.log(e)
    }
    complete() {
        console.log('Completed')
    }
}

/* Exemplo de um Observer JSON*/
let myObserverJSON = {
    next: (x: number) => console.log(x),
    error: (e: Error) => console.log(e),
    complete: () => console.log('Completed'),
}

function component() {
    /* Só é possível trazer resultados com subscribe, se não houver nenhum erro */
    source.subscribe({
        /* Função "next" responsável por executar */
        next: (x) => console.log(new myObserver)
    })
}

component();