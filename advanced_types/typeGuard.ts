export interface AccountInterface {
    holder: string;
    number: string;
    balance: number;
}

export interface BusinessAccountInterface extends AccountInterface {
    loanLimit: number;
}

export interface SavingsAccountInterface extends AccountInterface {
    interestRate: number;
}

export type BusinessOrSaving = BusinessAccountInterface | SavingsAccountInterface;


export class BusinessAccount implements BusinessAccountInterface {
    constructor(
        public holder: string, 
        public number: string,
        public balance: number,
        public loanLimit: number
    ) {}
    
}


export class SavingsAccount implements SavingsAccountInterface {
    constructor(
        public holder: string, 
        public number: string,
        public balance: number,
        public interestRate: number
    ) {}
}


export function showLoanOrInterest(obj: BusinessOrSaving): number {
    if (obj instanceof BusinessAccount) return obj.loanLimit;
    else if (obj instanceof SavingsAccount) return obj.interestRate;
    throw new TypeError("Obj must be instace of BusinessAccount or SavingsAccount");
}


const businessAccount = new BusinessAccount("João", "1293", 2000.0, 500);
const savingsAccount = new SavingsAccount("Maria", "5432", 2400.0, 0.05);

console.log(showLoanOrInterest(businessAccount)); // Saída: 500
console.log(showLoanOrInterest(savingsAccount)); // Saída: 0.05