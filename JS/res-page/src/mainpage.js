import {reset, wipe} from './cleanups.js';

export default function loadMainPage() {
    wipe();
    var cont = document.getElementById('content');

    var h1 = document.createElement('h1');
    var img = document.createElement('img');

    h1.textContent = "Welcome to the Burger Bunker";
    img.src = "../src/air-fryer-hamburger.jpg";
    img.classList.add("hamburger");
    img.id = ("hamb1");

    cont.appendChild(h1);
    cont.appendChild(img);

    reset();

    document.getElementById('homebutton').classList.toggle("selected");
}

