//your code here
document.getElementById('add-button').addEventListener('click', () => {
  // Get input values
  const itemName = document.getElementById('item-name-input').value.trim();
  const itemPrice = parseFloat(document.getElementById('item-price-input').value.trim());

  // Validate input
  if (itemName === '' || isNaN(itemPrice) || itemPrice <= 0) {
    alert('Please enter valid item name and price.');
    return;
  }

  // Create table row
  const shoppingList = document.getElementById('shopping-list');
  const newRow = document.createElement('tr');

  const nameCell = document.createElement('td');
  nameCell.setAttribute('data-ns-test', 'item-name');
  nameCell.textContent = itemName;

  const priceCell = document.createElement('td');
  priceCell.setAttribute('data-ns-test', 'item-price');
  priceCell.textContent = itemPrice.toFixed(2);

  newRow.appendChild(nameCell);
  newRow.appendChild(priceCell);

  // Add row before grandTotal row
  const grandTotalRow = shoppingList.querySelector('[data-ns-test="grandTotal"]').parentElement;
  shoppingList.insertBefore(newRow, grandTotalRow);

  // Update grand total
  updateGrandTotal();

  // Clear input fields
  document.getElementById('item-name-input').value = '';
  document.getElementById('item-price-input').value = '';
});

function updateGrandTotal() {
  const prices = document.querySelectorAll('[data-ns-test="item-price"]');
  let total = 0;

  prices.forEach(priceCell => {
    total += parseFloat(priceCell.textContent);
  });

  // Update grandTotal value
  const grandTotalCell = document.querySelector('[data-ns-test="grandTotal"]');
  grandTotalCell.textContent = total.toFixed(2);
}
