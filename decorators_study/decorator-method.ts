function decorator(
    classProt: any,
    methodName: string,
    description: PropertyDescriptor
): PropertyDescriptor {
    console.log(classProt);
    console.log(methodName);
    console.log(description);
    return {
        value: (...args: string[]) => {
            return args[0].split("").reverse().join("");
        }
    }
}


export class People {
    constructor(
        private _firstName: string,
        private _lastName: string,
        private _age: number
    ) {}

    @decorator
    talkMsg(msg: string): string {
        return `${this._firstName} ${this._lastName}: ${msg}`;
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


const people = new People("Alexandre", "Nascimento", 20);
const method = people.talkMsg("Hello!");
console.log(method); // output: !olleH