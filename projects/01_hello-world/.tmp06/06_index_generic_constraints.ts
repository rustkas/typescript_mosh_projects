function echo<T extends number | string>(value: T): T {
  return value;
}

echo(11);
echo('string value');
// echo(true);

function echo2<T extends {name: string}>(value: T): T {
  return value;
}
echo2({name: 'a'});

interface Person {
  name: string;
}

function echo3<T extends Person>(value: T): T {
  return value;
}
echo3({name: 'a'});

class PersonItem {
  constructor(public name: string){}
}

class Customer extends PersonItem {

}

function echo4<T extends PersonItem>(value: T): T {
  return value;
}

echo4(new PersonItem('p'));
echo4(new Customer('p'));

