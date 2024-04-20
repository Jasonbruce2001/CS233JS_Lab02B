/* 
    Author:     Jason Bruce
    Date:       4/20/24
*/

gameObject = null;

//set on click handlers
document.getElementById('roll').onclick = indexRoll;
document.getElementById('start').onclick = newGame;

//initializes new game object and assigns event handlers for game elements
function newGame(){
    gameObject = new game();

    for(let i = 0; i < NUM_DICE; i++){
        document.getElementById(i).onclick = setAsideDie;
        document.getElementById(i).style.cursor = 'pointer';
    }
}

//calls game object to roll dice and displays them to the board
//defined as indexRoll to differentiate from other object roll functions
function indexRoll(){
    //checks how many times the current player has rolled and updates
    gameObject.checkRollLimit();

    //roll current players dice
    gameObject.gameRollDice();

    //update board
    displayDice();
}

//updates images of dice that have been saved to the lower positions
function setAsideDie(){
    let index = this.id;
    gameObject.saveDie(index);

    let values = gameObject.getSavedValues();

    for(let i = 0; i < values.length; i++){
        document.getElementById('s' + i).src = `images/die${values[i]}.png`;
    }

    disableDie(index);
}

//updates board images when dice have been rolled
function displayDice(){
    let values = gameObject.getDiceValues();

    for(let i = 0; i < NUM_DICE; i++){
        document.getElementById(i).src = `images/die${values[i]}.png`;
    }
}

function disableDie(index){
    elmnt = document.getElementById(index);

    //set image to blank die
    elmnt.src = 'images/blankDie.png';
    elmnt.style.cursor = 'default';

    //remove event handler w/ empty arrow function
    elmnt.onclick = () => {};
}

//updates table position to value based on the current player and round
function updateBoard(value, player, round){

}