const checkbox = document.getElementById('theme-toggle-checkbox');

checkbox.addEventListener('change', function() {
  if(this.checked) {
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
  }
});
