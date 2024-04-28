@decorator("Anything", "else")
export class Account {
    constructor(
        public name: string,
        public number: string,
        public balance: number,
    ) {}
}

function decorator(param: string, param2: string) {
    return function decorator(target: any): any {
        return class extends target {
            name: string;

            constructor(...args: any[]) {
                super(...args);
                this.name = `${this.invertString(args[0])} ${param} ${param2}` ;
            }

            invertString(value: string) {
                return value.split("").reverse().join("");
            }
        };
    }
}

const account = new Account("Alex", "0001", 200);
console.log(account);