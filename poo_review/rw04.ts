// Singleton - GoF

class Bank {
    private static bank: Bank;

    private constructor(
        private readonly name: string,
        private readonly account: string,
        private readonly balance: number
    ) {}

    details(): string {
        return `name: ${this.name} account ${this.account} balance: ${this.balance}`;
    }

    static addBank(name: string, account: string, balance: number) {
        if (Bank.bank) return Bank.bank;
        Bank.bank = new Bank(name, account, balance);
        return Bank.bank;
    }
}


const bank1 = Bank.addBank("Alexandre", "0001", 200.0);
console.log(bank1.details());

// output: name: Alexandre account 0001 balance: 200

const bank2 = Bank.addBank("Alguém", "0002", 500.0);
console.log(bank2.details());

// output: name: Alexandre account 0001 balance: 200