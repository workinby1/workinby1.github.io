// // // //write any code you want to test here and run with npm run app
// // // import {classrooms, countStudentsInClassroom, findClassroomsWithCapacity, findStudentsOlderThan, averageStudentAge} from './classrooms.js';
export {};
// // // console.log(countStudentsInClassroom(classrooms, 102));
// // // console.log(findClassroomsWithCapacity(classrooms, 30));
// // // console.log(findStudentsOlderThan(classrooms, 18));
// // // console.log(averageStudentAge(classrooms));
// // // Exercise
// // // const team = [ "Bob", "Fred", "Jim"]
// // // destructure the team array onto variables with the same names as the elements, but all lower case
// // // const ["bob","fred", "jim"]=team
// // // let [fEle.toLowerCase(,)]
// // // console.log("expect Bob", bob );
// // // console.log("expect Jim", jim);
// // // // destructuring assignment also works with objects
// // // const options = {
// // //  title: "Menu",
// // //  width: 100,
// // //  height: 200
// // // };
// // // let {title, width, height} = options;
// // // console.log(title); // Menu
// // // console.log(width); // 100
// // // console.log(height); // 200
// // // ➢Properties are assigned to the corresponding variables.
// // // ➢order does not matter
// // // const {height, width, title} = { title: "Menu", height: 200, width: 100 }
// // // ////////////
// // // let arr = ["Ilya", "kantor"];
// // // let[firstName, surName]= arr;  ///destructuring
// // // powerful with split or other array-returning methods
// // // syntactic sugar to replace the following:
// // //how skip array elements
// // // via extara comma 
// // const [firstName,,title] = ["Julius", "Caesar", "Consul", "of he Roman republic"];
// // console.log(title)
// // console.log(firstName);
// // ///
// // type User={
// //   name:string;
// //   surname:string;
// // }
// // const user = {} as User;
// // [user.name, user.surname] ="Ilya Kantor".split(" ");
// // console.log(user.name)
// // // console.log("Ilya Kantor".split(" "));
// // // console.log("Ilya Kantor");
// // const[name1, ...belay]= [ "Bob", "Fred", "Jim"]
// // console.log(belay)
// // console.log(name1); 
// // //missing and default values
// // const [firstName1, surName1= "yirga"] = ["yirga"];
// // console.log(firstName1)
// // console.log(surName1);
// // //exercise
// // const team1  = [ "Bob", "Fred", "Jim"]
// // const [bob, fred, jim] = team1
// // console.log(bob)
// // console.log(fred);
// // console.log(jim);
// // // /object dexpructuring
// // // Object destructuring
// // // ➢destructuring assignment also works with objects
// // const options = {
// //  title1: "Menu",
// //  width: 100,
// //  height: 200
// // };
// // let {title1, width, height} = options;
// // console.log(title1); // Menu
// // console.log(width); // 100
// // console.log(height); // 200
// // //Destructure property to another name (TypeScript)
// // // const {width: w, height: h, title} = options;
// // // Confusingly, the colon here does not indicate the type.
// // // - type, if you specify it, needs to be written after the entire destructuring:
// // // const {width: w, height: h, title}: {width: number, height: number, title: string} = options;
// // // - do not need to specify in simple declaration statement, but will need for function parameter
// // // Exercise
// // const team = { point: "Bob", shooting: "Fred", power: "Jim", small: "Al", center: "Big Sleep" }
// // // 1. destructure the team object onto variables with the same names as the properties
// // const{point, shooting, power, small, center} = team
// // console.log("expect Big Sleep", center);
// // console.log("expect Bob", point);
// // console.log("expect Jim", power);
// // shooting;small //
// // // 2. destructure the team onto variables: one (point guard), two (shooting guard), three (small forward), four (power forward) and five (center)
// // const{point:one, shooting:two, power:three, small:four, center:five} = team
// // console.log("expect Al: ", four);
// // console.log("expect Bob: ", one);
// // console.log("expect Fred: ", two);
// // console.log("expect Jim: ", three);
// // console.log("expect Big Sleep: ", five);
// // type OptionsType = {
// //   width2:number;
// //   height2:number;
// //   title3:string;
// // }
// // const options2 = {}as OptionsType;
// // options2.title3 = "Menu"
// // // const options2 = {
// // //   title:"Menu"
// // // }
// // const{width2=100, height2=20, title3}= options2;
// // console.log(title3);
// // console.log(height2)
// // width2;
// // const obj2 = {a:1, b:2}
// // function addObj({a,b}:{a:number, b:number}):number{
// //   return a+b
// // }
// // console.log("expected 3", addObj(obj2));
// // //
// // // type ObjType = {
// // //   a:number, b:number
// // // } ;
// // // const obj = {a:1, b:2};
// // // function addObj({a,b}:ObjType):number{
// // //   return a+b;
// // // }
// // // console.log("expected 3", addObj(obj));
// // // // destructuring exercises
// // // let user ={name:"John", age:30};
// // // Object.keys(user) = ["name", "age"]
// // // Object.values(user)=["John", 30]
// // // Object.entries(user)= [["name","John"], ["age", 30]]
// // let person = {
// //   first: "Ben",
// //   last: "Green",
// //   age: 44,
// // };
// // let personInfo = Object.entries(person);
// // console.log(personInfo);
// // let personValues = Object.values(person);
// // let personKeys = Object.keys(person);
// // console.log(personValues);
// // console.log(personKeys);
// // for (let [key, value] of personInfo) {
// //   console.log(`${key}: ${value}`);
// // }
// // // JSON
// // // TYPES-
// // //STRINGS
// // //nUMBERS
// // //bOOLEANS
// // //NULL
// // //aRRAYS
// // // oBJECTS===={"key":value} {"age": 30}
// // //user.json
// // //object or array
// // // user.json
// // // {
// // //   "key":"value",
// // //   "favoriteNumber": 3,
// // //   "isProgrammer": true,
// // //   "hobbies": ["weight lifting", "bowling"],
// // //   "friends": [{
// // //     "hobbies":"swimming",
// // //     "favoriteNumber": 19,
// // //     "isProgramer": false
// // //   }]
// // // }
// //how to use APIs
// let [a,b,c]  = "ABC"; // 
// console.log(a)
// a;b;c;
// let [one, two ,three] = new Set([1,2,3])
// console.log(one);
// two; three;
// // //
// // let user = {};
// // [user.name, user.surname]  = "John Smith".split(' ');;
// // console.log(user.name)
// // // loop over keys-and-value
// // let user = {
// //   name:"John",
// //   age: 30
// // }
// // // loop
// // for(let [key, value] of Object.entries(user)){
// //   console.log(`${key}:${value}`)
// // }
// // // let {width:w = 100, height:h=200, title}= options
// // let options = {
// //   size:{
// //     width:100,
// //     heigth:200
// //   },
// //   items:["Cake","Donut"],
// //   extra:true
// // }
// // //destructuring
// // let{
// //   size{
// //     width,
// //     heigth
// //   },
// //   items:[item1, item2],
// //   title = "Menu"// not present in the object
// // }= options;
// let user ={name:"john", years: 30};
// let {name, age:years, isAdmine=false}=user
