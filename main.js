//Mini project _ Café order manager 

//step 1 
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
menu.push({ name: "Muffin", price: 14, category: "Pastry" });

console.log(menu.length);

//on this step we add an object to the array 
//and print the length of array
