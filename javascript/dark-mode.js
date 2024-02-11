function switchTheme() {
  const checkbox = document.getElementById("checkbox");
  const darkParagraph = document.querySelectorAll('.dark-mode-p');
  const definitionArray = Array.from(document.querySelectorAll('.dark-mode-p'));
  const darkBlue = document.querySelectorAll('.dark-blue');
  const darkBlueArray = Array.from(document.querySelectorAll('.dark-blue'));
  const clearBlue = document.querySelectorAll('.clear-blue');
  const clearBlueArray = Array.from(document.querySelectorAll('.clear-blue'))

  if (checkbox.checked) {
     document.body.classList.add("dark-mode");
     definitionArray.map(item => item.classList.add('dark-mode-paragraph'));
     darkBlueArray.map(item => item.classList.add('dark-blue-paragraph'));
     clearBlueArray.map(item => item.classList.add('clear-blue-mode'));
  } else {
     document.body.classList.remove("dark-mode");
     definitionArray.map(item => item.classList.remove('dark-mode-paragraph'));
     darkBlueArray.map(item => item.classList.remove('dark-blue-paragraph'));
     clearBlueArray.map(item => item.classList.remove('clear-blue-mode'));
  }
}
document.body.addEventListener('click', switchTheme)