interface Product {
  name: string;
  price: number;
}

class Store<T> {
  private _objects: T[] = [];

  protected get objects():T[] {
    return this._objects;
  }

  add(obj: T): void {
    this._objects.push(obj);
  }

  // T is Product
  // keyof T => 'name' | 'price'
  find(property: keyof T, value: unknown): T | undefined {
    return this.objects.find((obj) => obj[property] === value);
  }
}

let store = new Store<Product>();
store.add({name: 'a', price: 1});

console.log(store.find('name', 'a'));
console.log(store.find('price', 1));
console.log(store.find('nonExistingProperty', 1));