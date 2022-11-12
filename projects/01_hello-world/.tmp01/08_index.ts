// The unknown Type

// let x: any;
function render(document: unknown) {
  // Narrowing type
  if(typeof document === 'string') {
    console.log(document.toUpperCase())
  }
  // document.move();
  // document.fly();
  // document.whateverWeWant();
}