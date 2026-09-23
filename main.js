//Mini project _ Café order manager 

//step 1 
console.log("-------------------------------------")
let menu = [
    {name:"Espresso" , price: 12, category : "Coffee"},
    {name:"Cappuccino" , price:18 , category : "Coffee"},
    {name:"Croissant" , price: 10, category : "Pastry"}
];

for( let item of menu){
    console.log(`${item.name} - ${item.price}`)
}

/*output of step 1__
Espresso - 12 MAD
Cappuccino - 18 MAD
Croissant - 10 MAD
*/

//step 2 
console.log("-------------------------------------")
function findMenuItem(list , itemName){
    for(let item of list){
        if(item.name === itemName){
            return item;
        }
    }
    return null;
}

console.log(findMenuItem(menu, "Cappucno"));

//this function return the item(objet) if the name exsit in the table
//else return null

//step 3 
console.log("-------------------------------------")
menu.push({ name: "Muffin", price: 14, category: "Pastry" });

console.log(menu.length);

//on this step we add an object to the array 
//and print the length of array

//step 4 
console.log("-------------------------------------")
function updatePrice(list , itemName , newPrice){
    let item = findMenuItem(list , itemName);

    if (item === null) return false;
    item.price = newPrice;

    return true;
    
}

console.log(updatePrice(menu , "Esprso", 56));

//on this step we change the price of item search by name
//we use the function in step 2


//step 5 
console.log("-------------------------------------")
let orders = [
    {customer : "Yassine" , item : "Espresso" , quantity : 2, status : "Pending"},
    {customer : "Sara" , item : "Cappuccino" , quantity : 1, status : "Completed"},
    {customer : "Omar" , item : "Croissant" , quantity : 1, status : "Pending"},
    {customer : "Nadia" , item : "Espresso" , quantity : 1, status : "Completed"},
    {customer : "Imane" , item : "Muffin" , quantity :2 , status : "Pending"}
];

console.log(orders.length);

//step 6

console.log("-------------------------------------");

