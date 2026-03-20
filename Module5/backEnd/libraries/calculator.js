class Calculator{
    constructor(){
        this.id = Date.now();
    }

    #log(result) { //used only to log in the console - # is a private method
       console.log(`[Calculator ${this.id}]: ${result}`); //..id is a Date.now
    };

    add(num1, num2) {
        const result = num1 + num2;
        this.#log(`Adding ${num1} + ${num2} = ${result}`);
        return result;
    };

    subtract(num1, num2) {
        const result = num1 - num2;
        this.#log(`Subtracting ${num1} - ${num2} = ${result}`);
        return result;
    };

    multiply(num1, num2) {
        const result = num1 * num2;
        this.#log(`Multiplying ${num1} * ${num2} = ${result}`);
        return result;
    };

    divide(num1, num2) {
        const result = num1 / num2;
        this.#log(`Dividing ${num1} / ${num2} = ${result}`);
        return result;
    };
};

module.exports = Calculator;