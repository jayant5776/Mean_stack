

class Person {

    constructor() {
        console.log("I am constructor");
    }

    getPersonName() {
        return "I am DON !!";
    }

    getPersonAddress() {
        return "Address";
    }

    getPersonDetails() {
        const name = this.getPersonName();
        const address = this.getPersonAddress();

        return name + " " + address;
    }

    static main() {
        let p = new Person();
        const details = p.getPersonDetails();
        console.log(details);
    }

}


Person.main();