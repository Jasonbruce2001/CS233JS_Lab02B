/* 
    Author:     Jason Bruce
    Date:       4/20/24
*/

class die {
    //private class fields
    #value

    //class constructor
    constructor() {
        this.#value = 0;
    }

    //class field getter
    get value() { return this.#value; }

    //method to roll die
    roll(){
        this.#value = Math.floor((Math.random() * 6) + 1);
    }
}