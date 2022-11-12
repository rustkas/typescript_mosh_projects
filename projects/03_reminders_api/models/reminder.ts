export default class Reminder {
  id: number;
  isComplite: boolean;

  constructor(public title: string) {
    // set the id
    // se isComplete
    this.id = Date.now();
    this.isComplite = false;
  }
}
