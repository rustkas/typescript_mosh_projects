
// Decorator factory
function Component(value: number) {
  return (constructor: Function) => {
    console.log('Component decorator called');
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertInDOM = () => {
      console.log('Inserting component in the DOM');
    };
    constructor.prototype.options = value;
  };
}

@Component(1)
class ProfileComponent {}
