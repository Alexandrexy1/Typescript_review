let phrase;


if (typeof phrase === 'undefined') phrase = 'Algo';


// console.log(phrase.concat(phrase));

export function createHuman(firstName: string, age: number, lastName?: string): {
    firstName: string;
    age: number;
    lastName?: string;
} {
    return({
        firstName,
        age,
        lastName
    })
}


const h1 = createHuman('Alex', 20);
console.log(h1);
