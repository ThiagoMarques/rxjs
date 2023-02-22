import { fromEvent } from "rxjs";
import { map, filter, delay } from "rxjs/operators";

interface IMovie {
    title: string;
}

let button = document.getElementById('button');
let output = document.getElementById('output');

let click = fromEvent(button, 'click');


function load(url: string) {
    let xhr = new XMLHttpRequest();

    xhr.addEventListener('load', () => {
        let movies = JSON.parse(xhr.responseText);

        movies.forEach((movie: IMovie) => {
            let div = document.createElement('div');
            div.innerText = movie.title;
            output.appendChild(div);
        });
    })
    xhr.open('GET', url)
    xhr.send()
}

click.subscribe({
    next: () => load('../movies.json'),
    error: (e: Error) => console.log(e),
    complete: () => console.log()
})