export interface PersonName {
    name: string;
}

export interface PersonAge {
    age: number;
}

export type Person = PersonName & PersonAge;

const p1: Person = {
    name: "Alex",
    age: 20
}