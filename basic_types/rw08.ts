let x: any;
let y = 3;
let z: unknown;

x = 'A';
z = 3;

console.log(x * y); // NaN

if (typeof z === 'number') console.log(z + y);
