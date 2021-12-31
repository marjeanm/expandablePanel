const panel = document.querySelectorAll('.panel');

for (let panels of panel) {
  panels.addEventListener('click', function () {
    removeActClasses();
    panels.classList.add('active');
  });
}

function removeActClasses() {
  for (let panels of panel) {
    panels.classList.remove('active');
  }
}
