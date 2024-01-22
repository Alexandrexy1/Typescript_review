export const person: {
    readonly name: string;
    readonly age: number;
    talkHi(): void;
} = {
    name: "Alex",
    age: 20,
    talkHi(): void {
        console.log(`Hi, my names is ${this.name}!`);
    }
}

person.talkHi();

