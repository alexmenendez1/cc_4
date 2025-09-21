let products= [
{sku: "sku-001", name:"Speaker", category:"electronics", price:1,inventory:100},
{sku: "sku-002", name:"Blue Jeans",category:"apparel",price:2,inventory:150},
{sku: "sku-003", name:"Steak",category:"groceries",price:3,inventory:75},
{sku: "sku-004", name:"Charger",category:"electronics",price:4,inventory:50},
{sku: "sku-005", name:"Baseball",category:"balls",price:5,inventory:150}
];

let discount;

for (let product of products) // Sets up switch, creates a "box" of array above 
{
    

    switch (product.category) {
        case "electronics":
            discount = 0.1
            break;
        case "apparel":
            discount = 0.15
            break;
        case "groceries":
        discount = .1
            break;
        default:
            discount = 0
}
}
let customerType = "student"; // or "senior" or "regular"
let extraDiscount = 0;
if (customerType === "student") extraDiscount = 0.05;
else if (customerType === "senior") extraDiscount = 0.07;

for (let i = 1; i <= 3; i++) {
  let total = 0;
  for (const item of products) {
    total += item.price;   // price already category-discounted in Step 3
    item.inventory--;      // decrement inventory
  }
  const finalTotal = total * (1 - extraDiscount); // extraDiscount from Step 4
  console.log(`Customer ${i}: $${finalTotal.toFixed(2)}`);
}
for (let product in products){
    console.log(name+ "Baseball" + products[4].price* (discount + extraDisocunt));
}
final =Object.entries(products)
console.log(final)

h 

  


