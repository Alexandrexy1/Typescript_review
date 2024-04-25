export class Calculator {
    constructor(public number: number) {}

    add(number: number): this {
        this.number += number;
        return this;
    }
    sub(number: number): this {
        this.number -= number;
        return this;
    }
    mul(number: number): this {
        this.number *= number;
        return this;
    }
    div(number: number): this {
        this.number /= number;
        return this;
    }
}

export const calculator = new Calculator(5);
calculator.add(10).add(10).sub(5).mul(3).div(2);
console.log(calculator);