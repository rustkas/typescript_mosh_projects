interface Product {
  name: string;
  price: number;
}

class Store<T>{
  private _objects: T[]=[];

  protected get objects() {
    return this._objects;
  }

  add(obj: T): void {
    this._objects.push(obj);
  }
}

class CompressibleStore<T> extends Store<T> {
  compress() {}
}


let store = new Store<Product>();
let compressibleStore = new CompressibleStore<Product>();
compressibleStore.add({name:'car', price:10000});
compressibleStore.compress();

// Restrict the generic type parameter

class SearchableStore<T extends {name: string}> extends Store<T> {
  find(name: string): T | undefined {
    return this.objects.find(obj=> obj.name === name);
  }
}

// Fix the generic type parameter
class ProductStore extends Store<Product> {
  filterByCategory(category: string): Product[] {
    console.log(category);
    return [];
  }
}