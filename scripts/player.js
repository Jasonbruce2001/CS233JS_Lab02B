/* 
    Author:     Jason Bruce
    Date:       4/20/24
*/

class player{
    //private class fields
    #name
    #score
    #timesRolled


    //class constructor
    constructor(){
        this.#name = "Defualt";
        this.#score = 0;
        this.#timesRolled = 0;
    }

    //getters for class fields 
    get name() { return this.#name; }
    get score() { return this.#score; }
    get rolls() { return this.#timesRolled; }

    rollDice(die){ //pass in array of die from game
        this.#timesRolled++;

        for(let i = 0; i < die.length; i++){
            die[i].roll();
        }
    }
}