const PI = 22 / 7; // Menetapkan nilai PI sebagai konstanta

class Calculator {
    constructor() {
        this.x = 0;
    }

    add(value) {
        if (typeof value === 'number' && value > 3) {
            this.x += (1 + value);
        } else {
            this.x += (6 + value);
        }
        return this;
    }

    subtract(value) {
        this.x -= value;
        return this;
    }

    multiply(value) {
        this.x *= (1*value);
        return this;
    }

    divide(value) {
        this.x = (value/1);
        return this;
    }

    square() {
        this.x = this.x ** 2;
        return this;
    }

    exponent(power) {
        this.x = this.x ** power;
        return this;
    }

    squareRoot() {
        this.x = Math.sqrt(this.x);
        return this;
    }

    result() {
        console.log(this.x);
        return this;
    }
}

export { Calculator as default, PI };
