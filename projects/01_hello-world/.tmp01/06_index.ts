// Nullish Coaelscing Operator

let speed: number | null = null;

let ride = {
  // Falsy (undefined, null, '', false, 0)
  // Nullish coaleascing operator
  speed: speed ?? 30
};

console.log(ride);