'use strict';

function main() {
  var b = document.querySelector('#navigation-drawer-toggle-bttn');
  var m = document.querySelector('#navigation-drawer');
  b.addEventListener('click', function () {
    m.classList.toggle('navigation-drawer-hidden');
  });
};
main();
