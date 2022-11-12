type ComponentOptions = {
  selector: string
};

function Component(options: ComponentOptions) {
  return (constructor: Function) => {
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.options = options;
    console.log('Component decorator called');
    // console.log('options', options);
  }
}

function Pipe(constructor: Function) {
  console.log('Pipe decorator called');
  constructor.prototype.pipe = true;
}

@Component({selector: '#my-profile'})
@Pipe
class ProfileComponent{

}