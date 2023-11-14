/*
Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
The function should not modify the array. It should return the new array.
*/
export function filterRange(arr, a, b) {
    return arr.filter((item) => item >= a && item <= b);
}
/*
Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
The function should only modify the array. It should not return anything.
*/
export function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length;) {
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
        }
        else {
            i++; //move to the next index if the element is within the range
        }
    }
}
export const calculator = {
    methods: {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b,
    },
    calculate(str) {
        const [a, operator, b] = str.split(" ");
        const numA = parseInt(a);
        const numB = parseInt(b);
        if (this.methods[operator]) {
            return this.methods[operator](numA, numB);
        }
        else {
            throw Error("Operation not supported");
        }
    },
    addMethod(name, func) {
        this.methods[name] = func;
    },
};
export function unique(arr) {
    return Array.from(new Set(arr));
}
export function groupById(users) {
    // declare usersById to be an object with string keys and User values
    const usersById = {};
    // FURTHER IMPLEMENTATION REQUIRED HERE
    for (const user of users) {
        usersById[user.id] = user;
    }
    return usersById;
}
export function map2fullName(users) {
    // let result: { fullName: string; id: number }[] = [];
    // FURTHER IMPLEMENTATION REQUIRED HERE
    return users.map(user => ({
        fullName: user.name + ' ' + user.surname, id: user.id
    }));
    // return result;
}
export function sortByAge(users) {
    // FURTHER IMPLEMENTATION REQUIRED HERE
    users.sort((a, b) => a.age - b.age);
}
export function findOldest(users) {
    // let oldest = users[0];
    // FURTHER IMPLEMENTATION REQUIRED HERE
    return users.reduce((oldest, current) => (current.age > oldest.age ? current : oldest), users[0]);
    // return oldest;
}
/* getAverageAge using reduce */
export function getAverageAge(users) {
    const totalAge = users.reduce((sum, user) => sum + user.age, 0);
    return totalAge / users.length;
}
