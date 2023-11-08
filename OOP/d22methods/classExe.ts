// const numbers = {
//   one: 1,
//   two: 22,
//   three: 333,
//   four: 444,
// };


//
const numbers: { [key: string]: number } = {
  one: 1,
  two: 22,
  three: 333,
  four: 444,
};

const propertyOrder = ["one", "four", "three", "two"];


//write a for loop to print out the values of the properties according to the property names in the  propertyOrder array. You must use the properties array to access the values. You cannot directly write console.log(numbers.one) …
for(const property of propertyOrder){
  console.log(numbers[property])
}

