// intersection Types
// let weight: number & string;

type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

// Literal types
type Quantity = 50 | 100;
let quantity: Quantity = 50;
quantity = 100;
// quantity = 4;

type Metric = 'cm' | 'inch';

// Nullable types
function greet(name: string | null | undefined) {
  if (name) {
    console.log(name.toUpperCase());
  } else {
    console.log('Hola!');
  }
}

greet(null);
greet(undefined);


// Optional chaning
type Customer = {
  birthday: Date
}

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : {birthday: new Date()}
}

let customer = getCustomer(0);
if(customer !== null && customer !== undefined) {
  console.log(customer.birthday);
}
console.log(customer?.birthday?.getFullYear());

// Optional element access operator
// customers?[0]

// Optional call

let log: any = null;

log?.('a');
