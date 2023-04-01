const newOrderLink = document.getElementById('new-order-link')
const pastOrdersLink = document.getElementById('past-orders-link')
const newOrderContainer = document.getElementById('new-order-container')
const pastOrdersContainer = document.getElementById('past-orders-container')

newOrderLink.addEventListener('click', (e) => {
  e.preventDefault();
  newOrderContainer.style.display = 'block';
  pastOrdersContainer.style.display = 'none';
})

pastOrdersLink.addEventListener('click', (e) => {
  e.preventDefault();
  newOrderContainer.style.display = 'block';
  pastOrdersContainer.style.display = 'none';
})