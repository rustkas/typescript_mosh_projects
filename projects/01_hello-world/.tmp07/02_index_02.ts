type ComponentOptions = {
  selector: string
};

function Component(options: ComponentOptions) {
  return (constructor: Function) => {
    console.log('Component decorator called');
  }
}

@Component({selector: '#my-profile'})
class ProfileComponent{

}