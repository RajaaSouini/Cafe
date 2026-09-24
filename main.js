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
function totalRevenue(orderList , menuList){
    let sum = 0 ; 
    for(let i of orderList){
        if(i.status === "Completed"){
            let item = findMenuItem(menuList , i.item);
            sum += item.price * i.quantity;
        }
    }
    return sum;
}
console.log(totalRevenue(orders , menu));

//cette derniere return the money made today
//30

console.log("-------------------------------------");
//step 7 
function getPendingOrders(orderList){
    let arr = [];
    for(let order of orderList){
        if(order.status === 'Pending' ){
            arr.push(order);
        }
    }
    return arr;
}
console.log(getPendingOrders(orders));

//cette derniere fonction retourne un autre tableau dans lequel on stoque les objet
//dont le status = 'pending'
console.log("-------------------------------------");
//step 8 
function statusSummary(orderList){
    let x = getPendingOrders(orderList).length;
    let y = orderList.length - x;

    return  `Completed: ${x}, Pending: ${y}`
}
console.log(statusSummary(orders));
//we print count of completed orders and pending orders
//we use the following function 



