function Component(constructor: Function) {
  console.log('Component decorator called');
  constructor.prototype.uniqueId = Date.now();
  constructor.prototype.insertInDOM = ()=>{
    console.log('Inserting component in the DOM');
  };
}

@Component
class ProfileComponent {}


// Alternative
class Component2 {
  insertInDOM() {
    console.log('Inserting component in the DOM');
  }
}

class ProfileComponent02 extends Component2 {

}