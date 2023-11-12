export function doubleNums(arr) {
    return arr.map(num => num * 2);
}
export function doubleAges(arr) {
    return arr.map(person => ({ name: person.name, age: person.age * 2 }));
}
export function filterOver10(arr) {
    return arr.filter(person => ({ name: person.name, age: person.age > 10 }));
}
export function filterEvenNum(arr) {
    return arr.filter((num) => num % 2 === 0);
}
export function findEvenNum(arr) {
    return arr.filter(num => num % 2 === 0);
}
export function findEvenAge(arr) {
    return arr.filter(person => ({ name: person.name, age: person.age % 2 === 0 }));
}
export function includesEvenNum(arr) {
    return arr.some(num => num % 2 === 0);
}
export function includesEvenAge(people) {
    return people.some(person => person.age % 2 === 0);
}
