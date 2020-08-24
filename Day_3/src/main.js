
let Person = require('./person')

class Main {
    static main() {
        console.log("This is the execution POINT!!");

        let p = new Person();
        let output = p.getName();

        console.log(output);
    }
}

Main.main();