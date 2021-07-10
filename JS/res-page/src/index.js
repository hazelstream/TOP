import './style.css';
import loadMainPage from '../src/mainpage.js';
import loadMenuPage from '../src/menupage.js';
import loadContactPage from '../src/contactpage.js';

window.onload = function() {
    loadMainPage();
};

(function addListeners() {
    document.getElementById("homebutton").addEventListener('click', loadMainPage);
    document.getElementById("menubutton").addEventListener('click', loadMenuPage);
    document.getElementById("contactbutton").addEventListener('click', loadContactPage);
})();

