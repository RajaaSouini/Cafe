# Mini Project — Café Order Manager


## Scenario

You're building a small order-tracking script for **Café Aroma**. 

The café has a **menu** (an array of objects — each item has a name, price, and category) and a running list of today's **orders** (also an array of objects — each order has a customer, an item, a quantity, and a status). 

You'll build the script step by step, testing objects and arrays of objects from every angle: reading, writing, searching, filtering, computing, and updating.

Work in a single file, adding each step below the last. Run and check the output after every step before moving on.

---

## Step 1 — Build the Menu

Create an array called `menu` with three objects, each having `name`, `price`, and `category`:

| name | price | category |
|---|---|---|
| Espresso | 12 | Coffee |
| Cappuccino | 18 | Coffee |
| Croissant | 10 | Pastry |

Then loop over `menu` and print each item in the format `"<name> - <price> MAD"`.

**Expected output:**
```
Espresso - 12 MAD
Cappuccino - 18 MAD
Croissant - 10 MAD
```

---

## Step 2 — Find a Menu Item

Write a function `findMenuItem(list, itemName)` that searches `list` for an object whose `name` matches `itemName`, and returns that object — or `null` if it isn't found. No shortcuts, use a loop.

Test it:
```javascript
console.log(findMenuItem(menu, "Cappuccino"));
console.log(findMenuItem(menu, "Cappuccino").price);
```

**Expected output:**
```
{ name: 'Cappuccino', price: 18, category: 'Coffee' }
18
```

---

## Step 3 — Add a New Menu Item

Add a fourth item to `menu`: `{ name: "Muffin", price: 14, category: "Pastry" }`.

Then print `menu.length` and the last item in `menu`.

**Expected output:**
```
4
{ name: 'Muffin', price: 14, category: 'Pastry' }
```

---

## Step 4 — Update a Menu Item's Price

Write a function `updatePrice(list, itemName, newPrice)` that finds the item by name (reuse `findMenuItem`) and updates its `price`. 

Return `true` if the update happened, `false` if the item wasn't found.

Test it:
```javascript
console.log(updatePrice(menu, "Espresso", 13));
console.log(findMenuItem(menu, "Espresso"));
```

**Expected output:**
```
true
{ name: 'Espresso', price: 13, category: 'Coffee' }
```

---

## Step 5 — Build Today's Orders

Create an array called `orders` with five order objects, each having `customer`, `item`, `quantity`, and `status`:

| customer | item | quantity | status |
|---|---|---|---|
| Yassine | Espresso | 2 | Pending |
| Sara | Cappuccino | 1 | Completed |
| Omar | Croissant | 2 | Pending |
| Nadia | Espresso | 1 | Completed |
| Imane | Muffin | 2 | Pending |

Print `orders.length`.

**Expected output:**
```
5
```

---

## Step 6 — Compute the Day's Total Revenue 

Write a function `totalRevenue(orderList, menuList)` that returns the total money made today. 

```javascript
console.log(totalRevenue(orders, menu));
```

**Expected output:**
```
105
```

---

## Step 7 — Filter Pending Orders

Write a function `getPendingOrders(orderList)` that returns a new array containing only the orders whose `status` is `"Pending"`.

```javascript
console.log(getPendingOrders(orders));
```

**Expected output:**
```
[
  { customer: 'Yassine', item: 'Espresso', quantity: 2, status: 'Pending' },
  { customer: 'Omar', item: 'Croissant', quantity: 2, status: 'Pending' },
  { customer: 'Imane', item: 'Muffin', quantity: 2, status: 'Pending' }
]
```

---

## Step 8 — Status Summary

Write a function `statusSummary(orderList)` that returns a single string in the format `"Completed: X, Pending: Y"`.

```javascript
console.log(statusSummary(orders));
```

**Expected output:**
```
Completed: 2, Pending: 3
```

---

## Step 9 — Most Ordered Item 

This step has two parts.

**9a.** Write a function `quantityPerItem(orderList)` that returns a **plain object** (not an array!) where each key is an item name and each value is the *total quantity ordered* of that item across all orders. 


```javascript
let totals = quantityPerItem(orders);
console.log(totals);
```

**Expected output:**
```
{ Espresso: 3, Cappuccino: 1, Croissant: 2, Muffin: 2 }
```

**9b.** Write a function `mostOrderedItem(totalsObj)` that takes the object from 9a and returns the name of the item with the highest quantity, formatted as `"<name> (<quantity>)"`. 


```javascript
console.log(mostOrderedItem(totals));
```

**Expected output:**
```
Espresso (3)
```


---

## Step 10 — Mark an Order as Completed  

Write a function `markOrderCompleted(orderList, customerName, itemName)` that searches `orderList` for the order matching **both** that customer's name **and** that item, and updates its `status` to `"Completed"`. 

Return `true` if an order was updated, `false` if no match was found.

```javascript
console.log(markOrderCompleted(orders, "Yassine", "Espresso"));
console.log(orders[0]);
console.log(statusSummary(orders));
console.log(markOrderCompleted(orders, "Ghost", "Nothing"));
```

**Expected output:**
```
true
{ customer: 'Yassine', item: 'Espresso', quantity: 2, status: 'Completed' }
Completed: 3, Pending: 2
false
```

---

## Step 11 — Add a Walk-In Order

A new customer walks in. Push a sixth order onto `orders`: `{ customer: "Khalid", item: "Cappuccino", quantity: 3, status: "Pending" }`.

Then reprint `orders.length`, `totalRevenue(orders, menu)`, and `statusSummary(orders)` to confirm the new order was picked up everywhere.

```javascript
orders.push({ customer: "Khalid", item: "Cappuccino", quantity: 3, status: "Pending" });
console.log(orders.length);
console.log(totalRevenue(orders, menu));
console.log(statusSummary(orders));
```

**Expected output:**
```
6
159
Completed: 3, Pending: 3
```


---

## Step 12 — Cancel an Order — 

A customer cancels. 

Write a function `cancelOrder(orderList, customerName, itemName)` that removes the matching order from the array — **no shortcuts** like `.splice()` or `.filter()`. 

Return an object with two properties: `updatedList` (the new array) and `wasRemoved` (`true`/`false`, depending on whether a match was found).

```javascript
let cancelResult = cancelOrder(orders, "Omar", "Croissant");
console.log(cancelResult.wasRemoved);
console.log(cancelResult.updatedList.length);
orders = cancelResult.updatedList;
console.log(statusSummary(orders));
console.log(totalRevenue(orders, menu));

let secondAttempt = cancelOrder(orders, "Ghost", "Nothing");
console.log(secondAttempt.wasRemoved);
console.log(secondAttempt.updatedList.length);
```

**Expected output:**
```
true
5
Completed: 3, Pending: 2
139
false
5
```

---

## Step 13 — Revenue by Category — *logic challenge*

The café wants to know whether Coffee or Pastry brings in more money today. 

Write a function `revenueByCategory(orderList, menuList)` that returns a **plain object** where each key is a category (`"Coffee"`, `"Pastry"`) and each value is the total revenue from that category .

Then write `bestCategory(totalsObj)`, which takes that object and returns the top-earning category, formatted as `"<category> (<amount> MAD)"`.

```javascript
let categoryTotals = revenueByCategory(orders, menu);
console.log(categoryTotals);
console.log(bestCategory(categoryTotals));
```

**Expected output:**
```
{ Coffee: 111, Pastry: 28 }
Coffee (111 MAD)
```

---
