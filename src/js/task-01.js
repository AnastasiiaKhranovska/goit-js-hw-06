const allItems = document.querySelectorAll('.item');
const allItemsQty = allItems.length;

console.log(`Number of categories: ${allItems.length}`);



allItems.forEach(element => {

      console.log(`Category: ${element.firstElementChild.textContent}`);
      console.log(`Elements: ${element.lastElementChild.children.length}`);
    
    });