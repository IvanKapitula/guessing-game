class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.max = max;
        this.min = min; 
    }

    guess() {
        this.result = Math.round((this.min + this.max) /2);
       return  this.result;
    }

    lower() {
        this.max = this.result;
        this.min = this.min; 


    }

    greater() {
        this.max = this.max;
        this.min = this.result; 
    }
}


module.exports = GuessingGame;
