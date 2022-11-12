function Capitalize(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  const original = descriptor.get;
  descriptor.get = function () {
    const result = original?.call(this);
    if (typeof result === 'string') {
      return result.toUpperCase();
    }
    return result;
  };
}

class Person {
  constructor(public firstName: string, public lastName: string) {}

  @Capitalize
  get fullName() {
    // return `${this.firstName} ${this.lastName}`;
    // return 0;
    return null;
  }
}

let person = new Person('mosh', 'hamedani');

console.log(person.fullName);
