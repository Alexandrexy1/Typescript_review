@decorator
export class Account {
    constructor(
        public name: string,
        public number: string,
        public balance: number,
    ) {}
}

function decorator(target: any): any {
    return class extends target {
        name: string;
        constructor(...args: any[]) {
            super(...args);
            this.name = args[0].split("").reverse().join("");
        }
    };
}

const account = new Account("Alex", "0001", 200);
console.log(account);