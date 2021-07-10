function createDivs(num){
    for(let i = 0; i < num*num; i++){
        let div = document.createElement("div");
        div.classList.add("divclass");
        div.addEventListener('mouseover', changeColor);
        document.getElementById("content").style.gridTemplateColumns = "repeat(" + num + ", 1fr)";
        document.getElementById("content").appendChild(div);
    }
}

function changeColor(e){
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    e.target.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")"; 
}

function removeDivs(){
    const theDivs = document.querySelectorAll('.divclass');
    for(let i = 0; i < theDivs.length; i++){
        let list = document.getElementById("content");
        list.removeChild(list.childNodes[0]);
    }
}

function changeSize(){
    let size = prompt("Please enter a number between 1-64.");
    if(size < 1 || size > 64){
        changeSize();
    } else {
        removeDivs();
        createDivs(size);
    }
}

const sizeButton = document.querySelector("#sizeButton");
sizeButton.addEventListener('click', changeSize);
createDivs(25);














