const newOrderLink = document.getElementById('new-order-link');
const orders = [];

newOrderLink.addEventListener('click', (e) => {
  e.preventDefault();
});

document.getElementById('add-row-button').addEventListener('click', addRow);

function addRow() {
  const materialsList = document.getElementById('materials-list');
  const newRow = document.createElement('div');
  newRow.classList.add('material-row');

  const materialId = materialsList.childElementCount + 1;

  newRow.innerHTML = `
    <label for="material-${materialId}">Material</label>
    <input type="text" id="material-${materialId}" name="material-${materialId}">
    <label for="quantity-${materialId}">Quantity</label>
    <input type="number" id="quantity-${materialId}" name="quantity-${materialId}">
  `;

  materialsList.appendChild(newRow);
}

document.getElementById('new-order-form').addEventListener('submit', submitForm);

function submitForm(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const orderData = {
    jobNumber: formData.get('job-number'),
    purchaseOrderNumber: formData.get('purchase-order-number'),
    currentDate: formData.get('current-date'),
    requestedDeliveryDate: formData.get('requested-delivery-date'),
    jobsiteName: formData.get('jobsite-name'),
    foremanName: formData.get('foreman-name'),
    materials: []
  };

  const materialsList = document.getElementById('materials-list');
  const materialRows = materialsList.getElementsByClassName('material-row');
  for (const row of materialRows) {
    const material = row.querySelector(`input[name^="material-"]`).value;
    const quantity = row.querySelector(`input[name^="quantity-"]`).value;

    orderData.materials.push({ material, quantity });
  }
  
  // Store the order data in localStorage
  orders.push(orderData);
  localStorage.setItem('orders', JSON.stringify(orders));

  // Reset the form
  event.target.reset()

  //Display order success notification
  const notification = document.createElement('div')
  notification.classList.add('notification')
  notification.textContent = 'Order submitted successfuly!'
  document.body.appendChild(notification)

  //Hide the notification after a few seconds
  setTimeout(() => {
    notification.remove()
  }, 3000)
}

