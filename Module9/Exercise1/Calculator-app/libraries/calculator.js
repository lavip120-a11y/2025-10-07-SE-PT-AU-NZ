class Calculator {
    constructor() {
        this.id = Math.floor(Math.random() * 1_000_000); //adding math.random and math.floor for a random id (q.7 number 2)
    }
    #log(result) { //remove this private method and add generic logger library. modify the calculator to use the logger to log requests(q7 number 3)!!
    console.log(`[Calculator ${this.id}]: ${result}`); 
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
}

module.exports = Calculator;