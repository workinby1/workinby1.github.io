
export type Person = {
    name: string,
    age: number
}

export function doubleNums(arr:number[]):number[]{
return arr.map(num => num * 2);
}

export function doubleAges(arr:{name:string; age:number;}[]):{name:string; age:number;}[]{
return arr.map(  person =>({name: person.name, age:person.age*2}))
}


export function filterOver10(
  arr: { name: string; age: number }[]
): { name: string; age: number }[] {
  return arr.filter(person=>({name:person.name, age:person.age> 10}));
}

export function filterEvenNum(arr: number[]): number[] {
  return arr.filter((num) => num%2===0);
}

export function findEvenNum(arr:number[]):number[]{
return arr.filter(num=> num%2===0)
}

export function findEvenAge(
  arr: { name: string; age: number }[]
): { name: string; age: number }[] {
  return arr.filter(person=>person.age%2===0);
}

export function includesEvenNum(arr:number[]):boolean{
return arr.some(num =>num%2===0)
}

export function includesEvenAge(people:Person[]):boolean{
return people.some(person => person.age%2===0)
}


