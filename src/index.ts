import { fromEvent, Observable, Subscriber } from "rxjs";
import { map, filter, delay, switchMap, retry } from "rxjs/operators";

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
            if (xhr.status == 200) {
                let data = JSON.parse(xhr.responseText)
                Subscriber.next(data);
                Subscriber.complete();
            } else {
                Subscriber.error(xhr.statusText)
            }

        })
        xhr.open('GET', url)
        xhr.send()
    }).pipe(retry({
        count: 3,
        delay: 1000
    }))
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
    error: (e: Error) => console.log(`Error: ${e}`),
    complete: () => console.log()
})