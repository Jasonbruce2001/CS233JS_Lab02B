/* 
    Author:     Jason Bruce
    Date:       4/20/24
*/

const NUM_DICE = 6;

class game{
    #numPlayers         //integer, returned from input box
    #round              //integer, round the game is on
    #curPlayerIndex     //integer, pos in array of player
    #players            //array of player objects
    #curDice            //array of dice objects currently being rolled
    #savedDice          //array of integers, die values that have set aside

    //class constructor
    constructor() {
        //initialize private class fields
        this.#numPlayers = document.getElementById("numPlayers").value;
        this.#round = 0;
        this.#curPlayerIndex = 0;
        this.#players = [];
        this.#curDice = [];
        this.#savedDice = [];

        //add players and dice to the game
        for(let i = 0; i < this.#numPlayers; i++){
            this.#players[i] = new player();
        }

        for(let i = 0; i < NUM_DICE; i++){
            this.#curDice[i] = new die();
        }
    }

    //rolls all die currently on the board for the current player
    gameRollDice(){
        this.#players[this.#curPlayerIndex].rollDice(this.#curDice);
        return this.#curDice;
    }

    //returns array of the current dice values
    getDiceValues(){
        let values = [];

        for (let die of this.#curDice){
                values.push(die.value);
        }

        return values;
    }

    //returns array of saved dice values
    getSavedValues(){
        let values = []

        for (let i = 0; i < this.#savedDice.length; i++){
            values.push(this.#savedDice[i]);
        }

        return values;
    }

    //pass in index of img id from index.js eventhandler
    saveDie(index){
        console.log("saving dice #" + index);
        let buffer = this.#curDice[index];

        this.#curDice.splice(index, 1, null);
        this.#savedDice.push(buffer.value);
    }

    //check for scores
    scoreDice(){
        let score = 0;
        let combo = 0; //values will be added until 

        for(let i = 0; i < this.#curDice.length; i++){
            score += this.#curDice[i];
        }

        //check in order of saved dice for a value adding to 7
        for(let i = 0; i < this.#savedDice.length; i ++){
            combo += this.#savedDice[i];
            
            //if combo = 7 remove 7 from total dice values on the board
            if(combo = 7){
                score -= 7;
                combo = 0; //reset combo
            }
        }

    }

    checkRollLimit(){
        //if players rolls is above 3, move to next player
        if(this.#players[this.#curPlayerIndex].rolls > 3){
            this.#curPlayerIndex++;

            //if current player index is outside of bounds of numPlayers, reset to first player
            if(this.#curPlayerIndex > this.#numPlayers - 1){
                this.#curPlayerIndex = 0;
            }
        }
    }
}