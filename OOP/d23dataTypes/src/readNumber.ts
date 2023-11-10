  
  
  export function readNumber(arrOfStr: string[]) {
  for (let i = 0; i < arrOfStr.length; i++) {
    if (!isNaN(Number(arrOfStr[i]))) {
      return arrOfStr[i];
    }
  }
  return null;
}
console.log(readNumber(["123ab", "123.99", "12.3"]));
