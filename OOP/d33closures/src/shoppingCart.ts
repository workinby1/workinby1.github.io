//This closure exercise involves a common real-world scenario.  

// This exercise uses closures to create a shopping cart. It encapsulates the cart array, allowing you to
//  add items, remove items, and calculate the total cost. The items and their prices are private and can only be 
//  accessed or modified through the provided methods, demonstrating the concept of closures in a different context.
// Exercise: Closure and a Shopping Cart

// Create a function that simulates a shopping cart. The cart should allow you to add items,
// remove items, and calculate the total cost. Items and their prices should be private
// and not directly accessible.

type Item = {
    name:string;
  
    price: number;
}

type Cart = {
  items: Item[];
  addItem: (item: string, price: number) => void;
  removeItem: (item: string) => void;
  getTotal: () => number;
};

export function createShoppingCart(): Cart {
 //IMPLEMENT THIS FUNCTION
const cart:Cart={
    items:[],
addItem(name: string, price:number):void{
    cart.items.push({name, price});
},
removeItem(name:string):void{
    cart.items= cart.items.filter(item=>item.name !==name)
},
getTotal():number {
    return cart.items.reduce((total, item)=>total + item.price, 0)
},

}
return cart;
}

///

//return {
//     addTheItem:addItem;
//     removeTheItem: removeItem;
//     getTotal: getTotal;
// }