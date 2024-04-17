interface Colaborator {
    name: string;
    age: number;
}

export class Company {
    private readonly _name: string;
    protected readonly colaborators: Colaborator[] = [];

    constructor(name: string) {
        this._name = name;
    }

    addColaborator(colaborator: Colaborator): void {
        this.colaborators.push(colaborator);
    }

    get name(): string {
        return this._name;
    }
    
    getColaborators(): Colaborator[] {
        return this.colaborators;
    }
}

const colaborators: Colaborator[] = [
    {name: "Zé", age: 20}, 
    {name: "Joe", age: 19}, 
    {name: "Zézin", age: 25}, 
    {name: "Joezin", age: 32}
];

const company = new Company("Alex company");
company.addColaborator({name: "JoeZé", age: 39});
colaborators.forEach(colaborator => company.addColaborator(colaborator));

console.log(company.name);
console.log(company.getColaborators());