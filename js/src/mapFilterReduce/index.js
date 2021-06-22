//MAP

let products = [
  { id: 1, name: "Acer", unitPrice: 15000 },
  { id: 2, name: "Toshiba", unitPrice: 16000 },
];

//HTML Çıktısı
console.log("<ul>");
products.map((products) => console.log(`<li>${products.name}</li>`));
console.log("</ul>");

//FİLTER

let filteredProducts = products.filter((product) => product.unitPrice > 15500);
console.log(filteredProducts);

//Reduce

let cartTotal = products.reduce((acc, product) => acc + product.unitPrice, 0);
console.log(cartTotal);

let cartTotal2 = products
  .filter((p) => p.unitPrice > 13000)
  .map((p) => {
    p.unitPrice = p.unitPrice * 1.18;
    return p;
  })
  .reduce((acc, p) => acc + p.unitPrice, 0);

console.log(cartTotal2);
