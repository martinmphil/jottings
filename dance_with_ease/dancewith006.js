'use strict';

function main() {
  var o = document.querySelector('#navigation-drawer-toggle-bttn');
  var c = document.querySelector('#close-navigation-drawer-bttn');
  var m = document.querySelector('#navigation-drawer');
  o.addEventListener('click', function () {
    m.classList.toggle('navigation-drawer-hidden');
    o.style.display = "none";
  });
  c.addEventListener('click', function () {
    m.classList.toggle('navigation-drawer-hidden');
    o.style.display = "block"
  });
};
main();
