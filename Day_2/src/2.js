

class Calculator {

    add(n1, n2) {
        return n1 + n2;
    }

    subtract(n1, n2) {
        return n1 - n2;
    }

    static main() {
        let obj = new Calculator();
        let output = obj.add(1, 2);
        let sub = obj.subtract(5, 2);
        console.log(output);
        console.log(sub);
    }


}

// let cal = new Calculator();

// let output = cal.add(2, 3);
// console.log(output);

// let sub = cal.subtract(5, 2);
// console.log(sub);

Calculator.main();