'use strict';
document.addEventListener('DOMContentLoaded', init);
showMore.addEventListener('click', init);

function init() {
  const itemsList = document.querySelector('.items-list');
  itemsList.addEventListener('click', onAddToCartClick);
};

function onAddToCartClick(event) {
  if (event.target.tagName === 'A') {
    event.stopPropagation();
    const item = {
      title: event.target.dataset.title,
      price: event.target.dataset.price
    };
    addToCart(item);
  };
};