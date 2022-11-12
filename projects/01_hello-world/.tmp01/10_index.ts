class Account {
  // readonly id: number;
  // owner: string;

  // private _balance: number;
  nickname?: string;

  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number
  ) {
    // this.id = id;
    // this.owner = owner;
    // this._balance = balance;
  }

  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error('Invalid amount');
    }
    this._balance += amount;
  }
  // private calculateTax(): number {
  //   return this._balance * 1.6;
  // }

  get balance(): number {
    return this._balance;
  }

  set balance(value: number) {
    if(value < 0) {
      throw new Error('Invalid value');
    }
    this._balance = value;
  }
}

let account = new Account(1, 'Mosh', 0);
account.deposit(100);
// account.id = 5;
// account.balance = -1000;
// console.log(account.balance);
console.log(account);
console.log(typeof account);
console.log(account instanceof Account);
console.log(account.balance);