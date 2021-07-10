import myName from "./myName";
import printMe from "./print";

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    element.innerHTML = myName('Viktor');

    btn.innerHTML = "Click!";
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());