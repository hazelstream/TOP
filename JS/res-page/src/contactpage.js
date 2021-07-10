import {reset, wipe} from './cleanups.js';

var cont = document.getElementById('content');

export default function loadContactPage() {
    wipe();
    createLayout();


    reset();

    document.getElementById('contactbutton').classList.toggle("selected");
}

function createLayout() {
    var h1 = document.createElement('h1');
    var menugrid = document.createElement('div');
    menugrid.id = "menugrid";
    h1.textContent = "Contact";
    cont.appendChild(h1);
    cont.appendChild(menugrid);
}

function addMap(){
    
}