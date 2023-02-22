import { fromEvent, Observable, Subscriber } from "rxjs";
import { map, filter, delay, switchMap } from "rxjs/operators";

interface IMovie {
    title: string;
}

let button = document.getElementById('button');
let output = document.getElementById('output');

let click = fromEvent(button, 'click');


function load(url: string): Observable<any> {
    return new Observable(Subscriber => {
        let xhr = new XMLHttpRequest();

        xhr.addEventListener('load', () => {
            let data = JSON.parse(xhr.responseText)
            Subscriber.next(data);
            Subscriber.complete();
        })
        xhr.open('GET', url)
        xhr.send()
    })
}

function renderMovie(movies: IMovie[]) {
    movies.forEach((movie: IMovie) => {
        let div = document.createElement('div');
        div.innerText = movie.title;
        output.appendChild(div);
    })
}

/* Uso do switchMap -  */
click.pipe(
    switchMap(() => load('../movies.json'))
).subscribe({
    next: renderMovie,
    error: (e: Error) => console.log(e),
    complete: () => console.log()
})