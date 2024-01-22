export let numberArray: Array<number | boolean> = [];
export let stringArray: Array<string> = [];

numberArray.push(2);
numberArray.push(true);

export let sum: (x: number, y: number) => number = (x, y) => x + y; 

console.log(sum(4, 5));



