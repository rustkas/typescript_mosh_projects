interface Product {
  name: string;
  price: number;
}

// interface ReadOnlyProduct {
//   readonly name: string;
//   readonly price: number;
// }

type ReadOnlyProduct = {
  // Index signature
  // keyof
  readonly [Property in keyof Product]: Product[Property];
}

let product: ReadOnlyProduct = {
  name: 'a',
  price: 1
};

// product.name = 'a';

type ReadOnly<T> = {
  readonly [K in keyof T]: T[K]
}

let readonly_product: ReadOnly<Product> = {
  name: 'a',
  price: 1
};

// optional type
type Optional<T> = {
  [K in keyof T]?: T[K]
}

// nullable
type Nullable<T> = {
  [K in keyof T]: T[K] | null
}
