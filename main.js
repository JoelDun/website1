const newOrderLink = document.getElementById('new-order-link')
const pastOrdersLink = document.getElementById('past-orders-link')
const pastOrdersContainer = document.getElementById('past-orders-container')

newOrderLink.addEventListener('click', (e) => {
  e.preventDefault();
  newOrderContainer.style.display = 'block';
  pastOrdersContainer.style.display = 'none';
});

pastOrdersLink.addEventListener('click', (e) => {
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

  console.log(orderData); // Log the order data for now, you can later store this data in an array or other data structure.
}
