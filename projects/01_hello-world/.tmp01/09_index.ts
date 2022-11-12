// The never type

function processEvents():never {
  while(true) {
    // Read message from a queue
  }
}
function  reject(message: string):never {
  throw new Error(message);
}

reject('Message');
// processEvents();
// console.log('Hello World');

