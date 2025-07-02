const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const texts = document.querySelectorAll('.task-text');

checkboxes.forEach((checkbox, index) => {
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      texts[index].style.textDecoration = 'line-through';
      texts[index].style.opacity = '0.6';
    } else {
      texts[index].style.textDecoration = 'none';
      texts[index].style.opacity = '1';
    }
  });
});