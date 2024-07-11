
const bill = document.getElementById('bill');
const items = [];

function addItem() {
    const itemInput = document.getElementById('item');
    const priceInput = document.getElementById('price');
    const quantityInput = document.getElementById('quantity');

    const item = itemInput.value;
    const price = parseFloat(priceInput.value);
    const quantity = parseFloat(quantityInput.value);

    if (item && !isNaN(price) && !isNaN(quantity) && quantity > 0) {
        items.push({ item, price, quantity });
        displayBill();
        itemInput.value = '';
        priceInput.value = '';
        quantityInput.value = '';
    } else {
        alert('Please enter a valid item name, price, and quantity.');
    }
}

function displayBill() {
    bill.innerHTML = '';
    let total = 0;

    items.forEach(item => {
        const itemRow = document.createElement('div');
        const totalPrice = (item.price * item.quantity).toFixed(2);
        itemRow.textContent = `${item.item} (x ${item.quantity}): $${totalPrice}`;
        bill.appendChild(itemRow);
        
        total += item.price * item.quantity;
    });

    const totalRow = document.createElement('div');
    totalRow.textContent = `Total: $${total.toFixed(2)}`;
    bill.appendChild(totalRow);
}