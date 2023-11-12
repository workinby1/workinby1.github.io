/*
Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
The function should not modify the array. It should return the new array.
*/
export function filterRange(arr, a, b) {
    return arr.filter(element => element >= a && element <= b);
    // [];
}
export function map2fullName(users) {
    let result = users.map(user => ({ fullName: user.name + " " + user.surname, id: user.id }));
    // : { fullName: string, id: number }[] = [];
    return result;
}
