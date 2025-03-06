const stock = {
    items: [
        { name: 'milk', price: 5, quantity: 50 }, // пример внешнего вида одного товара
        { name: 'bread', price: 3, quantity: 100 },
        { name: 'cheese', price: 25, quantity: 70 }
    ], // массив товаров
    totalCost: 0, // итоговая стоимость товаров
    addItem(item) {
        if (item) {
        alert('Product exist, price und quantity was corrected!' )
        } else {
        alert('Product was add!')
        }
        // При добавлении нового товара возможны два сценария:
        // 1. Такого товара на складе нет. Тогда добавляем новую позицию на склад
        //      (добавляем новый элемент в массив items)
        // 2. Такой товар на складе есть. Тогда меняем существующую позицию на новое количество
        //      (изменяем элемент с информацией о данной позиции в массиве items)
    

    },
    removeItem(itemName, itemQuantity) {
        // При удалении товара возможны три сценария:
        // 1. Количество товара на складе больше удаляемого количества. Тогда меняем существующую позицию на новое количество
        //      (изменяем элемент с информацией о данной позиции в массиве items)
        // 2. Количество товара на складе равно удаляемому. Тогда удаляем позицию со склада
        //      (удаляем элемент в массив items)
        // 3. Количество товара на складе меньше удаляемого. Тогда действие не выполняется

    },
    updateTotalCost() {
        // 1. На основании информации, хранимой в массиве товаров (stock.items) посчитать итоговую стоимость всех товаров
        // this - ведёт на объект, с которым происходит действие

    }
}

const productNameInput = document.getElementById('productName');
const productPriceInput = document.getElementById('productPrice');
const productQuantityInput = document.getElementById('productQuantity');


const productsList = document.getElementById('productsList');

const statsList = document.getElementById('statsList');



const liProduct = document.createElement(`productsList`);
const liStats = document.createElement(`statsList`);

productsList.appendChild(liProduct);
statsList.appendChild(liStats);

liProduct.innerHTML = 
`<h4>${stock.items.map(item => 
    `<li>Product: ${item.name} 
    - Price: ${item.price}€, 
    - Qty: ${item.quantity}</li>`)
    .join("")}</h4>`;


function allShow() {
liProduct.innerHTML = 
`<h4>${stock.items.map(item => 
    `<li>Product: ${item.name} 
    - Price: ${item.price}€, 
    - Qty: ${item.quantity}</li>`)
    .join("")}</h4>`;
};

function toStats() {
// const totalProductCost = stock.items.map(item => item.price * item.quantity).reduce((acc, item) => acc + item, 0);
const totalProductCost = stock.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
const miniPrice = Math.min(...stock.items.map(item => item.price));
const maxPrice = Math.max(...stock.items.map(item => item.price));
const averagePrice = stock.items.reduce((acc, item) => acc + item.price, 0) / stock.items.length;
const averageNumberOfProduktName = stock.items.length;
const averageNumberOfProduktQuantity = stock.items.reduce((acc, item) => acc + item.quantity, 0)


liStats.innerHTML = 
`<h4>${stock.items.map(item => 
    `<li>Product: ${item.name} 
    - Price: ${item.price}€, 
    - Qty: ${item.quantity}, 
    - Total cost: ${item.price * item.quantity}</li>`)
    .join("")}</h4>

<h2>Price mini: ${miniPrice}</h2>
<h2>Price max: ${maxPrice}</h2> 
<h2>Average Price: ${averagePrice}</h2>
<h2>Average Number of Produkts Name: ${averageNumberOfProduktName}</h2>
<h2>Average Number of Produkts Quantity: ${averageNumberOfProduktQuantity}</h2>
<h2>Stock Cost: ${totalProductCost}<h2>
`};


function addProduct(){
    const inputName = productNameInput.value.trim();
    const inputPrice = parseInt(productPriceInput.value);
    const inputQuantity = parseInt(productQuantityInput.value); // Number, parseInt, parseFloat, +
    const currentProduct = stock.items.find(item => item.name === inputName);
    if (!inputName.trim() || inputPrice < 0 || inputPrice === NaN || inputQuantity < 0 || inputQuantity === NaN) {
        alert('Please check date');
        return;
    }
    if (currentProduct) {
        const existProduct = stock.items.find(item => item.name === inputName);
        existProduct.price = inputPrice;
        existProduct.quantity = existProduct.quantity + inputQuantity;
    } else {
        stock.items.push({
            name: inputName,
            price: inputPrice,
            quantity: inputQuantity
        });
    }
    stock.addItem(currentProduct);
    productNameInput.value = '';
    productPriceInput.value = '';
    productQuantityInput.value = '';
    allShow();
}


