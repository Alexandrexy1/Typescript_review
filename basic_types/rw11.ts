export type Colors = "red" | "blue" | "green" | "purple";

export interface Person {
    firstName: string;
    lastName: string;
    age: number;
    favoriteColor?: Colors;
}

const p1: Person = {
    firstName: "Alexandre",
    lastName: "Nascimento",
    age: 20,
    favoriteColor: "red"
}

