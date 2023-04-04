function displayOrder(order) {
  const orderContainer = document.createElement('div');
  orderContainer.classList.add('order-container');

  orderContainer.innerHTML = `
    <h3>Job #: ${order.jobNumber}</h3>
    <p>Purchase Order #: ${order.purchaseOrderNumber}</p>
    <p>Current Date: ${order.currentDate}</p>
    <p>Requested Delivery Date: ${order.requestedDeliveryDate}</p>
    <p>Jobsite Name: ${order.jobsiteName}</p>
    <p>Foreman's Name: ${order.foremanName}</p>
  `;

  const materialsList = document.createElement('ul');
  order.materials.forEach((material) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${material.material}: ${material.quantity}`;
    materialsList.appendChild(listItem);
  });

  orderContainer.appendChild(materialsList);

  const ordersList = document.querySelector('.orders-list');
  ordersList.appendChild(orderContainer);
}

function displayPastOrders() {
  const orders = JSON.parse(localStorage.getItem('orders')) || [];
  orders.forEach((order) => {
    displayOrder(order);
  });
}

displayPastOrders();
