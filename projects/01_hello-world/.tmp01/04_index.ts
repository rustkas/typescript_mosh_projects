type Employee = {
  readonly id: number;
  name?: string;
  retire: (date: Date) => void;
};

let employee: Employee = {
  id: 1,
  retire: (date: Date) => {
    console.log(date);
  },
};

function kgToLbs(weight: number | string) {
  if (typeof weight === 'number') {
    console.log(weight * 10);
  } else if (typeof weight === 'string') {
    console.log(parseInt(weight) * 10);
  }
}
kgToLbs(10);
kgToLbs('10k');
