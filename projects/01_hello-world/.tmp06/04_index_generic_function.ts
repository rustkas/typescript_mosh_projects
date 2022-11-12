function wrapInArray<T>(value: T) {
  return [value];
}

let numbers1 = wrapInArray('1');
let numbers2 = wrapInArray(1);

class ArrayUtils {
  wrapInArray<T>(value: T) {
    return [value];
  } 
}

let utils = new ArrayUtils();
let numbers = utils.wrapInArray(1);

class ArrayUtilsStatic {
  static wrapInArray<T>(value: T) {
    return [value];
  } 
}

let strings = ArrayUtilsStatic.wrapInArray('1');