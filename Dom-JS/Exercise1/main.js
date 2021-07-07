
  
function createMenuItem(name) {
    let li = document.createElement('li');
    li.textContent = name;
    return li;
}
// get the ul#menu
const menu = document.querySelector('#band-list');
// add menu item
menu.appendChild(createMenuItem('Dire Straits'));
menu.appendChild(createMenuItem('Kansas'));
menu.appendChild(createMenuItem('Steely Dan'));