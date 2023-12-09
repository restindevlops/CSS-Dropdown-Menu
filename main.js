let navigation = document.getElementById('navig');

document.querySelector('.menuToggle').onclick = function(){  // to toggle down and close the menu bar

this.classList.toggle('active'); // active is the name of the CSS style tag to toggle on while clicking.
navigation.classList.toggle('active'); // active is the name of the CSS style tag to toggle on while clicking.

}