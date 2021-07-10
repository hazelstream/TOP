import {reset, wipe} from './cleanups.js';

var cont = document.getElementById('content');

export default function loadMenuPage() {
    wipe();
    createLayout();
    

    addMenuItems("Bacon Burger", "../src/air-fryer-hamburger.jpg", "Fattest bacon in all of the city");
    addMenuItems("Bacon Burger", "../src/air-fryer-hamburger.jpg", "Fattest bacon in all of the city");
    addMenuItems("Bacon Burger", "../src/air-fryer-hamburger.jpg", "Fattest bacon in all of the city");
    addMenuItems("Bacon Burger", "../src/air-fryer-hamburger.jpg", "Fattest bacon in all of the city");
    addMenuItems("Bacon Burger", "../src/air-fryer-hamburger.jpg", "Fattest bacon in all of the city");
    addMenuItems("Bacon Burger", "../src/air-fryer-hamburger.jpg", "Fattest bacon in all of the city");

    reset();

    document.getElementById('menubutton').classList.toggle("selected");
}

function addMenuItems(title, imgsrc, desc){
    var menuItem = document.createElement('div');
    menuItem.classList.add("menuItem");

    var itemTitle = document.createElement('h2');

    itemTitle.textContent = title;
    menuItem.appendChild(itemTitle);

    var itemImg = document.createElement('img');

    itemImg.src = imgsrc;
    menuItem.appendChild(itemImg);

    var itemInfo = document.createElement('p');

    itemInfo.textContent = desc;
    menuItem.appendChild(itemInfo);

    document.getElementById('menugrid').appendChild(menuItem);
}

function createLayout() {
    var h1 = document.createElement('h1');
    var menugrid = document.createElement('div');
    menugrid.id = "menugrid";
    cont.appendChild(h1);
    cont.appendChild(menugrid);

    h1.textContent = "Menu";
}

