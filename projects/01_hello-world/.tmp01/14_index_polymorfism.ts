class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return this.firstName + ' ' + this.lastName;
  }

  walk() {
    console.log('Walking');
  }
}

class Student extends Person {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  takeTest() {
    console.log('Taking a test');
  }
}

class Teacher extends Person {
  override get fullName() {
    return `Professon ${super.fullName}`;
  }
}

class Principal extends Person {
  override get fullName() {
    return `Principal ${super.fullName}`;
  }
}


function printNames(people: Person[]) {
  for(let person of people) {
    console.log(person.fullName);
  }
}

printNames([
  new Student(1, 'John', 'Smith'),
  new Teacher('Mosh', 'Hamedani'),
  new Principal('Mary', 'Smith')
]);