class Human {
    static cpf = "000.000.000-00";

    constructor(
        private readonly name: string, 
        private readonly age: number, 
        private readonly cpf: string
    ) {}

    static addNewHuman(name:string, age: number): Human {
        return new Human(name, age, Human.cpf);
    }
}

const human1 = new Human("Alexandre", 20, "123.456.78-90");
const human2 = Human.addNewHuman("Alex", 23);
console.log(human1);
console.log(human2);