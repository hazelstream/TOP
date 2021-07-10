(function() {

    const player = (num, type, active) => {
        const number = num;
        const marker = type;
        let isActive = active;
        return {number, marker, isActive};
    }

    const gameBoard = (() => {
        let playField = [];
        let divs = document.getElementsByClassName("fieldBlock");
        const populatePlayField = (() => {
            for(let i = 0; i < 9; i++) {
                playField.push(divs[i]);
            }
        })();

        function play(e) {
            if(playerOne.isActive && e.target.innerHTML != "O"){
                e.target.innerHTML = "X";
                playerOne.isActive = false;
                playerTwo.isActive = true;
            } else if(playerTwo.isActive && e.target.innerHTML != "X") {
                e.target.innerHTML = "O";
                playerOne.isActive = true;
                playerTwo.isActive = false;
            } 
        }
        for(let i = 0; i < playField.length; i++) {
            playField[i].addEventListener('click', play);
        }

        let playerOne = player(1, "X", true);
        let playerTwo = player(2, "O", false);
        return {playerOne, playerTwo};
    });

    const game = (() => {
        let gameBoard = gameBoard();
    })();

})();