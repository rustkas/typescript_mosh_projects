// console.log('Hello World');
// let age: number = 20;

// if(age < 50) {
//   age += 10;
// }
// console.log('age', age);

// let sales = 123_456_789;
// let course = 'TypeScript';
// let is_published = true;

// let level;
// level=1;
// level='a';

// function render(document:any) {
//   console.log(document);
// }

// let numbers: number[] =[1,2,3];
// numbers.forEach(n => n.)

// Tupels
// let user: [number, string] = [1, 'Mosh'];
// user.push(1);

// Enums
// const small = 1;
// const medium = 1;
// const large = 1;
// const enum Size {Small=1,Medium,Large};
// let mySize: Size = Size.Medium;
// console.log(mySize);

function calculateTax(income: number, taxYeaer?: number): number {
  let x = 0;
  if ((taxYeaer || 2022) < 2000) {
    return income * 1.2;
  }
  if (income + x < 50_000) {
    return income * 1.2;
  }
  return income * 1.3;
}

calculateTax(10_000);

function calculateTax2(income: number, taxYeaer = 2022): number {
  let x = 0;
  if (taxYeaer < 2000) {
    return income * 1.2;
  }
  if (income + x < 50_000) {
    return income * 1.2;
  }
  return income * 1.3;
}

calculateTax(10_000, 2032);


// Objets


employee.name = 'Mosh';
// employee.id = 0;

let prices = [100, 200, 300];
// prices[0] = '$100';