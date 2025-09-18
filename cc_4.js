let products= [
{sku: "sku-001", name:"Speaker", category:"electronics", price:1,inventory:100},
{sku: "sku-002", name:"Blue Jeans",category:"apparel",price:2,inventory:150},
{sku: "sku-003", name:"Steak",category:"grocerices",price:3,inventory:75},
{sku: "sku-004", name:"Charger",category:"electronics",price:4,inventory:50},
{sku: "sku-005", name:"Baseball Hat",category:"apparel",price:5,inventory:150}
];

for (let product of products) // Sets up switch, creates a "box" of array above 
{
    let discount;

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
if (customerType === "senior")
{
    discount += .07 ;
} else {
    discount ;
}
let customers = [
    [products[0], products[1], products[2]], 
    [products[1], products[4], products[5]],
    [products[2], products[3], products[4]]
];
for(let customer = customers.length, ${discount}, product.inventory -- 1)

