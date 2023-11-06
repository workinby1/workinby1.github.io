
/**
 *@returns {number} double the input
 */
 export function double(num: number): number {
  return num * 2; 
}


/**
 * @returns {number} 100 times the input
 */
export function times100(number: number) {
  return number * 100;
}


/**
 * @returns {Array} creates a new array with function mapped to each element
 */
export function myMap( arr:number[], fun:(num:number)=>number):number[]{
 
    return arr.map(element=> fun(element));

}
let inputArr = [1,2,3,4,5]
let doubleArr= myMap(inputArr, double)
console.log(doubleArr)


let times100Arr = myMap(inputArr, times100);
console.log(times100Arr)




