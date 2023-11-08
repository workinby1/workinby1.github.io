let user=  {
 
  name:"John",
  age:30
                        
};
user.sayHi = function(){
  console.log('Hello!')
};
user.sayHi();//hello
// a fun  that is a property of an object is called method. here sayHi;
//when we write our code using objecs to represent entities, that's called object-oriented programming, in short: OOP



// method shorthand
// ==object literal:
user = {
  sayHi:function(){
    console.log("Hello");
  }
};

user = {
  sayHi(){
    console.log("Hello")
  }

}
//the short hand form is preferred


//"this" in methods
// the value of this is the object "before dot", the one used to call themethod.

let user  = {
  name:"john",
  age:30,
}

sayHi(){
  //"this" si the "current object"
  console.log(this.name)
}//
user.sayHi();//John
//
// the value of "this" is evaluated during the run-time, depending on the context


//calling without an object: this==undefined
//arrow functions have no "this"
let user = {
  firstName: "Ilya",
  sayHi(){
let arrow= ()=> alert(this.fistName);
arrow();}
  }
  user.sayHi(); //Ilya
