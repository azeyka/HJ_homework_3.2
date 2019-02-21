'use strict';
const tableHead = document.querySelector('thead');
tableHead.addEventListener('click', handleTableClick);

function handleTableClick(event) {
  event.stopPropagation(); 
  event.target.dataset.dataDir === '1' ? event.target.dataset.dataDir = '-1' : 
                                                 event.target.dataset.dataDir = '1';
  sortTable(event.target.dataset.propName, +event.target.dataset.dataDir);
};
