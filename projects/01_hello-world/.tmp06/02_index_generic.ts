class KeyValuePair<T> {
  constructor(public key: T, public value: string){

  }
}

let pair = new KeyValuePair<string>('1', 'a');