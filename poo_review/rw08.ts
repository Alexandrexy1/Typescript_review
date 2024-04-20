type arrayList = (number | string)[];

interface PersonType {
    firstName: string;
    lastName: string;
    age?: number;
    fullName(): string;
}

const array: arrayList = [1, "Alex"]; 

class Person implements PersonType {
    constructor(private _firstName: string, private _lastName: string, private _age: number) {}

    fullName(): string {
        return `${this._firstName} ${this._lastName}`;
    }

    get firstName(): string {
        return this._firstName;
    }
    get lastName(): string {
        return this._lastName;
    }
    get age(): number {
        return this._age;
    }
}