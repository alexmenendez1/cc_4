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
let customerType;
let extraDiscount = 0
if (customerType === "senior")
{
    discount += .07 ;
    extraDiscount += .07 ;
} else {
}

let customers = [
{name:"Customer 1", customerType :"regular", purchases:[products[1],products[4]]},
{name:"Customer 2",customerType:"regular",purchases:[products[0], products[2]]},
{name: "Customer 3",  customerType:"senior",purchases:[products[3], products[4]]},
];

for (let i = 1; i <=3; i++)
    {
    let subtotal = 0;
   console.log(`You are customer number ${i}. Your total is dollars`);
   console.log(`Your discount is ${discount}.`);
   console.log(products[4].inventory -=1);
    }

for (let product in products){
    console.log(name+ "Baseball" + products[4].price* (discount + extraDisocunt));
}
final =Object.entries(products)
console.log(final)

h 

  


