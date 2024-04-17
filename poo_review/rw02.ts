export class Person {
    constructor(
        private _firstname: string, 
        private _lastname: string, 
        private readonly age: number
    ) {}

    set firstname(firstname: string) {
        this._firstname = firstname;
    }

    set lastname(lastname: string) {
        this._lastname = lastname;
    }

    get fullName(): string {
        return this._firstname + " " + this._lastname;
    }
}

export class Student extends Person {
    get fullName(): string {
        return super.fullName + " :)";
    }
}

const student = new Student("Alexandre", "Nascimento", 20);
console.log(student.fullName);
student.firstname = "Alex";
student.lastname = "Nascimento";
console.log(student.fullName);