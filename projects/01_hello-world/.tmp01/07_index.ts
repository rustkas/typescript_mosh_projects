// Type Accertions

let phone = document.getElementById('phone') as HTMLInputElement;
let phone2 = <HTMLInputElement> document.getElementById('phone');
// HTMLElement
// HTMLInputElement

console.log(phone?.value);
console.log(phone2?.value);