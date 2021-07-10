function reset() {
    var array = [document.getElementById("homebutton"), document.getElementById("menubutton"), document.getElementById("contactbutton")];

    array.forEach(element => {
        if(element.classList.contains("selected")){
            element.classList.toggle("selected");
        }
    });
}

function wipe() {
    const content = document.getElementById("content");
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
}

export {reset, wipe};